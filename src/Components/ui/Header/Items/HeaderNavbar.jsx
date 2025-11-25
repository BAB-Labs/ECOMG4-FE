import { IconsWrapper } from "../../Icons/IconsWrapper";
import { icons } from "../../../../Styles/icons";

export const HeaderNavbar = () => {
	return (
		<nav className="header_navbar">
			<div className="header_navbar_container">
				{/* Categorias */}
				<div className="header_navbar_left">
					<IconsWrapper size={20}>
						<icons.iconoMenuHamburguesa size={20} />
					</IconsWrapper>

					<span className="header_navbar_label">Categorías</span>

					<IconsWrapper size={20} cursor="pointer">
						<icons.iconoDesplegarAbajo size={20} />
					</IconsWrapper>
				</div>

				{/* Links */}
				<div className="header_navbar_links">
					<a href="#tendencias">Tendencias</a>
					<a href="#nuevos">Nuevos</a>
					<a href="#ofertas">Ofertas</a>
					<a href="#destacados">Destacados</a>
				</div>
			</div>
		</nav>
	);
};
