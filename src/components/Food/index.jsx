import { useState } from "react";
import { BiPencil } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { RxCaretRight } from "react-icons/rx";

import { useMediaQuery } from "react-responsive";
import theme from "../../styles/theme";

import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container, Title, Order } from "./styles";
import { NumberPicker } from "../../components/NumberPicker";
import { Button } from "../../components/Button";
import { useCart } from "../../contexts/CartContext"; // 🔹 Importado contexto do carrinho

export function Food({ data, isAdmin, isFavorite, updateFavorite, handleDetails, user_id, ...rest }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const { addToCart } = useCart(); // 🔹 Hook para atualizar o carrinho

  const navigate = useNavigate();

  const [number, setNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleFavorite = async () => {
    try {
      if (isFavorite) {
        updateFavorite(true, data.id);
        alert("Favorito removido!");
      } else {
        updateFavorite(false, data.id);
        alert("Favorito adicionado com sucesso!");
      }
    } catch (error) {
      console.log("Erro ao atualizar favoritos:", error);
    }
  };

  function handleEdit() {
    navigate(`/edit/${data.id}`); // 🔹 Corrigido template literal
  }

  async function handleInclude() {
    setLoading(true);

    try {
      const cartItem = {
        dish_id: data.id,
        name: data.name,
        quantity: number,
        price: data.price,
      };

      await addToCart(cartItem); // 🔹 Atualiza o contexto do carrinho

      alert("Prato adicionado ao carrinho!");
    } catch (error) {
      alert("Não foi possível adicionar ao carrinho.");
      console.log("Erro ao adicionar ao carrinho:", error);
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
          fill={isFavorite ? theme.COLORS.GRAY_200 : undefined}
          onClick={handleFavorite}
        />
      )}

      <img 
        src={`${api.defaults.baseURL}/files/${data.image}`} // 🔹 Corrigido template literal
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
      <span>R$ {data.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>

      {!isAdmin && 
        <Order>
          <NumberPicker number={number} setNumber={setNumber} />
          <Button title="Incluir" onClick={handleInclude} loading={loading} />
        </Order>
      }
    </Container>
  );
}
