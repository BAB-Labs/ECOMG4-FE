import { IconsWrapper } from "../../Icons/IconsWrapper";
import { footerContactItems } from "../Data/FooterData";
import { icons } from "../../../../Styles/icons";
import { Input } from "../../Input/Input";
import { Button } from "../../Button/Button";

export const FooterContact = () => {
	return (
		<div className="contact">
			<h3 className="contact_title">Contacto</h3>

			<ul className="contact_list">
				{footerContactItems.map((item) => (
					<li key={item.value}>
						<div className="contact_item">
							<IconsWrapper
								color1="var(--icons-color-dark)"
								size={42}
								cursor="pointer"
							>
								{item.icon}
							</IconsWrapper>

							<a
								href={item.href}
								target={item.newTab ? "_blank" : "_self"}
								rel="noopener noreferrer"
							>
								{item.value}
							</a>
						</div>
					</li>
				))}
			</ul>

			{/* Seccion del footer de newsletter o poderse suscribir a las notificaciones del sistema */}

			<div className="newsletter">
				<div className="newsletter_header">
					<IconsWrapper size={20}>
						<icons.iconoBolsaCompras width={20} color="var(--bg-aqua)" />
					</IconsWrapper>
					<span className="newsletter_subtitle">Newsletter</span>
				</div>

				<p className="newsletter_text">
					Suscríbete y recibe ofertas exclusivas
				</p>

				<div className="newsletter_form">
					<Input placeholder={"tu@email.com"} blur />
					<Button
						color1="var(--btn-primary)"
						color2="var(--btn-accent)"
						padding="10px 14px"
						radius={14}
						extraClassName="btn_shadow_soft"
					>
						<icons.iconoFlechaDerecha width={20} color="white" />
					</Button>
				</div>
			</div>
		</div>
	);
};
