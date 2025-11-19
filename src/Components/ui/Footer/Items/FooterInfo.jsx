import { IconsWrapper } from "../../Icons/IconsWrapper";
import { footerSocialIcons } from "../Data/FooterData";

export const FooterInfo = () => {
	return (
		<div className="info">
			<div className="info_group">
				<div className="info_square_logo">E</div>

				<div className="info_group_labels">
					<h3 className="info_title">ECOMG4</h3>
					<span className="info_text">Supermercado Digital</span>
				</div>
			</div>

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
