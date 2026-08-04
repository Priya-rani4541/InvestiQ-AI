import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [token, setToken] = useState(
        localStorage.getItem("token") || null
    );

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const storedUser = localStorage.getItem("user");

        if (storedUser) {

            setUser(JSON.parse(storedUser));

        }

        setLoading(false);

    }, []);

    const login = (token, user) => {

        localStorage.setItem("token", token);

        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );

        setToken(token);

        setUser(user);

    };

    const logout = () => {

        localStorage.removeItem("token");

        localStorage.removeItem("user");

        setToken(null);

        setUser(null);

    };

    return (

        <AuthContext.Provider

            value={{

                user,

                token,

                loading,

                login,

                logout,

                isAuthenticated: !!token,

            }}

        >

            {children}

        </AuthContext.Provider>

    );

};

export const useAuth = () => {

    return useContext(AuthContext);

};