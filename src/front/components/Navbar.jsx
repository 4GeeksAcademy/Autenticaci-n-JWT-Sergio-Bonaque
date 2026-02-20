import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();

    const logout = () => {
       
        // Elimina el token del almacenamiento del navegador
        sessionStorage.removeItem("token");
        // Redirige inmediatamente a la ruta de inicio de sesión
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-light bg-light px-3 shadow-sm mb-4">
            <div className="container">
                <Link className="navbar-brand" to="/">JWT</Link>
                <div className="ml-auto">
                    {/* Botón de cierre de sesión */}
                    <button className="btn btn-outline-danger btn-sm" onClick={logout}>
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </nav>
    );
};
