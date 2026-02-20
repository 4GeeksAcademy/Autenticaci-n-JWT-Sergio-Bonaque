import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Private = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
            navigate("/login"); // Redirigir si no hay token (Instrucción 3)
        }
    }, []);

    return (
        <div className="container mt-5">
            <h1>Área Privada</h1>
            <p>Solo puedes ver esto si estás logueado.</p>
        </div>
    );
};
