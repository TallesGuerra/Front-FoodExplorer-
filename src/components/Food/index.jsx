import { useState, useEffect } from "react";
import { BiPencil } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { RxCaretRight } from "react-icons/rx";
import { useMediaQuery } from "react-responsive";
import theme from "../../styles/theme";
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { Container, Title, Order } from "./styles";
import { NumberPicker } from '../../components/NumberPicker';
import { Button } from "../../components/Button";


export function Food({ data, isAdmin, isFavorite, updateFavorite, handleDetails, user_id, ...rest }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const params = useParams();
  const navigate = useNavigate();

  const [number, setNumber] = useState(1);
  const [cartId, setCartId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [localIsFavorite, setLocalIsFavorite] = useState(isFavorite);

  // Verifica se o prato já está nos favoritos
  useEffect(() => {
    const checkIfFavorite = async () => {
      try {
        const response = await api.get(`/favorites?user_id=${user_id}&dish_id=${data.id}`);
        const isFavorite = response.data.some((favorite) => favorite.dish_id === data.id);
        setLocalIsFavorite(isFavorite);
      } catch (error) {
        console.log('Erro ao verificar favoritos:', error);
      }
    };

    checkIfFavorite();
  }, [data.id, user_id]);

  const handleFavorite = async () => {
    try {
      // Faz a requisição para o backend
      if (!localIsFavorite) {
        await api.post(`/favorites`, { dish_id: data.id, user_id });
      } else {
        await api.delete(`/favorites/${data.id}`, { data: { user_id } });
      }

      // Atualiza o estado local após a confirmação do backend
      setLocalIsFavorite((prev) => !prev);

      // Chama a função `updateFavorite` para atualizar o estado global
      if (updateFavorite) {
        updateFavorite(!localIsFavorite, data.id);
      }
    } catch (error) {
      console.log('Erro ao atualizar favoritos:', error);

      // Reverte o estado local em caso de erro
      setLocalIsFavorite((prev) => !prev);

     
    }
  };

  function handleEdit() {
    navigate(`/edit/${data.id}`);
  }

  async function handleInclude() {
    setLoading(true);

    try {
      const cartItem = {
        dish_id: data.id,
        name: data.name,
        quantity: number,
      };

      const response = await api.get('/carts', { params: { created_by: user_id } });
      const cart = response.data[0];

      if (cart) {
        await api.patch(`/carts/${cart.id}`, { cart_items: [cartItem] });
      } else {
        const createResponse = await api.post('/carts', { cart_items: [cartItem], created_by: user_id });
        const createdCart = createResponse.data;

        setCartId(createdCart.id);
      }

      alert('Prato adicionado ao carrinho!');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível adicionar ao carrinho.');
        console.log('Erro ao adicionar ao carrinho:', error);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container {...rest} isAdmin={isAdmin}>
      {isAdmin ? (
        <BiPencil size={"2.4rem"} onClick={handleEdit} />
      ) : (
        <FiHeart
          size={"2.4rem"}
          fill={localIsFavorite ? theme.COLORS.GRAY_200 : "none"}
          onClick={handleFavorite}
          style={{ cursor: 'pointer' }}
        />
      )}

      <img 
        src={`${api.defaults.baseURL}/files/${data.image}`} 
        alt="Imagem do prato." 
        onClick={() => handleDetails(data.id)} 
      />
      
      <Title>
        <h2>{data.name}</h2>
        <RxCaretRight 
          size={isDesktop ? "2.4rem" : "1.4rem"} 
          onClick={() => handleDetails(data.id)} 
        />
      </Title>
      
      {isDesktop && <p>{data.description}</p>}
      <span>R$ {data.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>

      {!isAdmin && 
        <Order>
          <NumberPicker number={number} setNumber={setNumber} />
          <Button title="incluir" onClick={handleInclude} loading={loading} />
        </Order>
      }
    </Container>
  );
}