import { useState, useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { RxCaretLeft } from "react-icons/rx";

import { Container, Content } from "./styles";
import { Menu } from "../../components/Menu";
import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Button } from "../../components/Button";

export function Orders({ isAdmin }) {
  const { cartItems, setCartItems } = useCart();
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartDetails, setCartDetails] = useState([]);
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  // 🔹 Buscar detalhes dos pratos caso os dados estejam incompletos
  useEffect(() => {
    async function fetchDetails() {
      const updatedCartItems = await Promise.all(
        cartItems.map(async (item) => {
          try {
            const response = await api.get(`/dishes/${item.dish_id}`);
            return {
              ...item,
              name: response.data.name || "Nome não disponível",
              price: parseFloat(item.price.replace(",", ".")) || 0,
              image: response.data.image || null,
              description: response.data.description || "Sem descrição",
            };
          } catch (error) {
            console.error("Erro ao buscar detalhes do prato:", error);
            return item;
          }
        })
      );

      setCartDetails(updatedCartItems);
    }

    if (cartItems.length > 0) {
      fetchDetails();
    }
  }, [cartItems]);

  // 🔹 Limpar todo o carrinho
  function handleClearCart() {
    setCartItems([]); // Zera o estado do carrinho
    setCartDetails([]); // Zera os detalhes do carrinho
    localStorage.removeItem("cartItems"); // Remove do localStorage
    localStorage.removeItem("cartDetails"); // Remove detalhes salvos
  }

  // 🔹 Calcular o total do pedido
  const totalOrder = cartDetails.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <Container>
      {!isDesktop && (
        <Menu
          isAdmin={isAdmin}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}

      <Header
        className="headerOrders"
        isAdmin={isAdmin}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main>
        <header>
          <ButtonText onClick={handleBack}>
            <RxCaretLeft />
            voltar
          </ButtonText>

       
        </header>

        <Content>
          <h1>Meu Pedido</h1>

       

          {cartDetails.length > 0 ? (
            <>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {cartDetails.map((item, index) => {
                  const totalPrice = (item.price * item.quantity).toFixed(2);
                  const imageUrl = item.image
                    ? `${api.defaults.baseURL}/files/${item.image}`
                    : "https://via.placeholder.com/100";

                  return (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                        padding: "10px",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <img
                        src={imageUrl}
                        alt={`Imagem de ${item.name}`}
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "8px",
                          objectFit: "cover",
                        }}
                        onError={(e) =>
                          (e.target.src = "https://via.placeholder.com/100")
                        }
                      />
                      <div className="dishInformation">
                        <h2 style={{ margin: "5px 0" }}>{item.name}</h2>
                        <p style={{ color: "#666" }}>{item.description}</p>
                        <p>Quantidade: {item.quantity}</p>
                        <p>Preço Total: R$ {totalPrice}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
                

              <div className="footerOrders">
                      {/* 🔹 Botão para limpar carrinho */}
                {cartDetails.length > 0 && (
                  <Button
                    title="limpar carrinho"
                    onClick={handleClearCart}
                      >
                    Limpar Carrinho
                  </Button>
                )}
                <h2>Total do Pedido: R$ {totalOrder.toFixed(2)}</h2>
              </div>
            </>
          ) : (
            <p>Nenhum item no carrinho.</p>
          )}
        </Content>
      </main>

      <Footer />
    </Container>
  );
}
