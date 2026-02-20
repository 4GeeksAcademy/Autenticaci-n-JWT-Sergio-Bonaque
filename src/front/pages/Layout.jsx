import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/layout"; // componente Layout
import { Home } from "./pages/home";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Private } from "./pages/Private";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/*Layout*/}
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/private" element={<Private />} />
                    <Route path="*" element={<h1>No encontrado</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
