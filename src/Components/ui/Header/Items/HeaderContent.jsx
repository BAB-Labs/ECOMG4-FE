import { Button } from "../../Button/Button";
import { IconsWrapper } from "../../Icons/IconsWrapper";
import { Input } from "../../Input/Input";
import { Logo } from "../../Logo/Logo";
import { icons } from "../../../../Styles/icons";

import { useChangeTheme } from "../../../../Hooks/useChangeTheme";

export const HeaderContent = () => {
	// Hook que se encarga de la logica del cambio de tema separado
	// como buen uso de buenas practicas al tener un useEffect este se tiene que separar
	const { theme, toggleTheme } = useChangeTheme();

	return (
		<header className="header">
			<div className="header_container">
				{/* Componente de logo separado que se ocupa en el Footer */}
				<Logo />

				{/* Buscador */}
				<div className="header_search_bar">
					<IconsWrapper size={20}>
						<icons.iconoBuscar width={20} color="var(--text-subtitle)" />
					</IconsWrapper>
					<Input
						transparent
						backgroundColor="none"
						borderColor="none"
						width="100%"
						placeholder="Buscar productos: carne, embutidos, tecnologia..."
					/>
					<Button
						color1="var(--bg-primary)"
						color2="var(--bg-secondary)"
						width="100%"
						maxWidth="100px"
						height="40px"
					>
						<span style={{ color: "var(--text-white)" }}>Buscar</span>
					</Button>
				</div>

				{/* Íconos lado derecho */}
				<div className="header_right_side">
					<button
						type="button"
						className={`header_toggle ${theme === "darkTheme" ? "header_toggle--on" : ""}`}
						onClick={toggleTheme}
						aria-label="Cambiar de tema"
					>
						<div className="header_knob">
							{theme === "darkTheme" ? (
								<icons.iconoLuna className="header_toggle_icon" width={16} />
							) : (
								<icons.iconoSol className="header_toggle_icon" width={16} />
							)}
						</div>
					</button>
					<IconsWrapper size={20} cursor="pointer">
						<icons.iconoUsuario width={20} color="var(--icons-color-base)" />
					</IconsWrapper>
					<IconsWrapper size={20} cursor="pointer">
						<icons.iconoCarritoCompra
							width={20}
							color="var(--icons-color-base)"
						/>
					</IconsWrapper>
				</div>
			</div>
		</header>
	);
};
