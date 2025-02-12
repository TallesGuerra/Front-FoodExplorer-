import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {        
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@foodExplorer:user", JSON.stringify(user));
            localStorage.setItem("@foodExplorer:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({ user, token });
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível realizar o login.");
            }
        }    
    }

    function signOut() {
        localStorage.removeItem("@foodExplorer:token");
        localStorage.removeItem("@foodExplorer:user");

        setData({});
    }

    async function addFavorite(dishId) {
        if (!data.user) {
            alert("Você precisa estar logado para favoritar um prato.");
            return;
        }

        try {
            await api.post("/favorites", {
                user_id: data.user.id, 
                dish_id: dishId
            });

            alert("Prato adicionado aos favoritos!");
        } catch (error) {
            console.error("Erro ao favoritar:", error.response?.data || error.message);
            alert("Erro ao adicionar aos favoritos.");
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@foodExplorer:token");
        const user = localStorage.getItem("@foodExplorer:user");

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({
                token,
                user: JSON.parse(user)
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ 
            signIn,
            signOut,
            addFavorite, // Adicionando a função de favoritos ao contexto
            user: data.user,
            isAuthenticated: !!data.user,            
        }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth };
