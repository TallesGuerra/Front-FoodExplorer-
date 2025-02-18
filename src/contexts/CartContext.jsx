import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // 🔹 Recuperar os itens do carrinho do localStorage ao carregar a aplicação
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");

    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // 🔹 Sempre que o carrinho for atualizado, salvar no localStorage
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  function addToCart(item) {
    const existingItem = cartItems.find((cartItem) => cartItem.dish_id === item.dish_id);

    if (existingItem) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.dish_id === item.dish_id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  }

  function removeFromCart(dish_id) {
    const updatedCart = cartItems.filter((item) => item.dish_id !== dish_id);
    setCartItems(updatedCart);
  }

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
