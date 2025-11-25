import { IconsWrapper } from "../../Icons/IconsWrapper";
import { footerSocialIcons } from "../Data/FooterData";
import { Logo } from "../../Logo/Logo";

export const FooterInfo = () => {
	return (
		<div className="info">
			{/* Componente de logo separado que se ocupa en el header */}
			<Logo />

			<p>
				Tu supermercado digital de confianza. Productos frescos y de calidad
				premium entregados directamente en tu hogar.
			</p>

			<div className="info_icons">
				{footerSocialIcons.map((value) => (
					<IconsWrapper
						key={value.href}
						color1="var(--icons-color-dark)"
						size={42}
						cursor="pointer"
					>
						{value.icon}
					</IconsWrapper>
				))}
			</div>
		</div>
	);
};
