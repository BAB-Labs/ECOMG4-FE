import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Search, User, ShoppingCart, Moon } from "lucide-react";

export default function Header() {
	const [isLight, setIsLight] = useState(() => {
		const storedTheme = localStorage.getItem("theme");
		return storedTheme === "light";
	});

	const toggleTheme = () => {
		setIsLight((prevIsLight) => !prevIsLight);
	};

	// 2. Aplica la clase de modo oscuro o claro al body del documento
	useEffect(() => {
		// 🚨 APLICA SIEMPRE UNA CLASE: darkModeRoot O lightModeRoot
		const newClassName = isLight ? styles.lightModeRoot : styles.darkModeRoot;

		document.body.className = newClassName;

		// Almacena la preferencia del usuario
		localStorage.setItem("theme", isLight ? "light" : "dark");
	}, [isLight]); // <-- ESTO DEBERÍA FUNCIONAR
	return (
		// 🚨 Contenedor principal para asegurar el color de fondo en toda la pantalla
		<div className={styles.appWrapper}>
			{/* Topbar */}
			<div className={styles.topbar}>
				<span>ECOMG4 • Tu supermercado digital de confianza</span>
				<span>✓ Envío gratis en compras mayores a $99.90</span>
				<span className={styles.topbarSeparator}>|</span>
				<span>ECOMG4 • Tu supermercado digital de confianza</span>
				<span>✓ Envío gratis en compras mayores a $99.90</span>
			</div>

			{/* Header */}
			<header className={styles.header}>
				<div className={styles.container}>
					{/* Logo */}
					<div className={styles.logoContainer}>
						<div className={styles.logoWrapper}>
							<img
								src="/src/assets/logo.png"
								className={styles.logo}
								alt="logo"
							/>
							<span className={styles.logoText}>E</span>
						</div>
						<div>
							<h3 className={styles.title}>ECOMG4</h3>
							<p className={styles.subtitle}>Supermercado Digital</p>
						</div>
					</div>

					{/* Buscador */}
					<div className={styles.searchBar}>
						<Search className={styles.searchIcon} />
						<input
							className={styles.searchInput}
							placeholder="Buscar productos: carnes, embutidos, tecnología..."
						/>
						<button className={styles.searchBtn}>Buscar</button>
					</div>

					{/* Íconos lado derecho */}
					<div className={styles.rightSide}>
						{/* Toggle */}
						<div
							className={`${styles.toggle} ${isLight ? styles.toggleOn : ""}`}
							onClick={toggleTheme}
							role="button"
						>
							<div className={styles.knob}>
								<Moon className={styles.toggleIcon} />
							</div>
						</div>

						<User className={styles.iconAction} />
						<ShoppingCart className={styles.iconAction} />
					</div>
				</div>
			</header>

			{/* Navbar */}
			<nav className={styles.navbar}>
				<div className={styles.container}>
					<div className={styles.navLeft}>
						<span className={styles.iconMenu}>≡</span>
						<span>Categorías</span>
					</div>

					<div className={styles.navLinks}>
						<a href="#tendencias">Tendencias</a>
						<a href="#nuevos">Nuevos</a>
						<a href="#ofertas">Ofertas</a>
						<a href="#destacados">Destacados</a>
					</div>
				</div>
			</nav>
		</div>
	);
}
