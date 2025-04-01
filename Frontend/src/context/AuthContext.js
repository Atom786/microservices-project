import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userRole = localStorage.getItem("role");

        if (token && userRole) {
            setUser(token);
            setRole(userRole);
        }
    }, []);

    const v_login = (token, role) => {
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        setUser(token);
        setRole(role);
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setUser(null);
        setRole(null);
    };

    return (
        <AuthContext.Provider value={{ user, role, v_login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
