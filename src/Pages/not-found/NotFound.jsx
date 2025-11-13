// Pages/not-found/NotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./not-found.css";

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className="notfound-container">
			<div className="notfound-content">
				<h1 className="notfound-title">404</h1>
				<p className="notfound-text">¡Ups! La página que buscas no existe.</p>
				<p className="notfound-subtext">
					Tal vez el producto fue retirado o escribiste mal la dirección.
				</p>
				<button className="notfound-button" onClick={() => navigate("/")}>
					Volver a la tienda
				</button>
			</div>
			<div className="notfound-bg">
				<img
					src="https://cdn-icons-png.flaticon.com/512/7486/7486802.png"
					alt="Carrito perdido"
					className="notfound-image"
				/>
			</div>
		</div>
	);
};

export default NotFound;
