import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch(process.env.VITE_BACKEND_URL + "/api/token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        if (response.ok) {
            const data = await response.json();
            // Punto 2: Guardar token en sessionStorage
            sessionStorage.setItem("token", data.token);
            navigate("/private");
        } else {
            alert("Credenciales incorrectas");
        }
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};
