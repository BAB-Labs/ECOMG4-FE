import React from "react";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>🛒 ECOM Supermercado</div>

			<nav className={styles.nav}>
				<a href="#inicio">Inicio</a>
				<a href="#productos">Productos</a>
				<a href="#ofertas">Ofertas</a>
				<a href="#contacto">Contacto</a>
			</nav>
		</header>
	);
};

export default Header;
