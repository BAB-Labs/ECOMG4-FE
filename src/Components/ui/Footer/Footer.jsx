import { icons } from "../../../Styles/icons";
import { Button, Input, IconsWrapper, CopyRight, Bubble } from "../index";
import "./Footer.css";

export const Footer = () => {
	return (
		<>
			<footer id="footer_static">
				<section className="footer_sections">
					<div className="info">
						<div className="info_group">
							<div className="info_square_logo">E</div>

							<div className="info_group_labels">
								<h3 className="info_title">ECOMG4</h3>
								<span className="info_text">Supermercado Digital</span>
							</div>
						</div>

						<p>
							Tu supermercado digital de confianza. Productos frescos y de
							calidad premium entregados directamente en tu hogar.
						</p>

						<div className="info_icons">
							<IconsWrapper color1="var(--icons-color-dark)" size={42}>
								<icons.iconoInstagram
									width={20}
									color="var(--icons-color-base)"
								></icons.iconoInstagram>
							</IconsWrapper>

							<IconsWrapper color1="var(--icons-color-dark)" size={42}>
								<icons.iconoTwitter
									width={20}
									color="var(--icons-color-base)"
								/>
							</IconsWrapper>

							<IconsWrapper color1="var(--icons-color-dark)" size={42}>
								<icons.iconoFacebook
									width={20}
									color="var(--icons-color-base)"
								/>
							</IconsWrapper>
						</div>
					</div>
					<div className="shortcuts">
						<span className="shortcuts_title">Enlaces Rapidos</span>

						{/* Estos Links no se pueden quedar asi se tienen que migrar a enlaces con React Router */}

						<a href="/home">Inicio</a>
						<a href="/products">Productos</a>
						<a href="/categories">Categorias</a>
						<a href="/ofers">Ofertas</a>
					</div>
					<div className="clients">
						<span className="clients_title">Atencion al Cliente</span>

						{/* Estos Links no se pueden quedar asi se tienen que migrar a enlaces con React Router */}

						<a href="/help-center">Centro de Ayuda</a>
						<a href="/shipping-and-returns">Envíos y Devoluciones</a>
						<a href="/terms-and-conditions">Términos y Condiciones</a>
						<a href="/privacy-policy">Política de Privacidad</a>
					</div>
					<div className="contact">
						<h3 className="contact_title">Contacto</h3>

						<ul className="contact_list">
							<li>
								<div className="contact_item">
									<IconsWrapper color1="var(--icons-color-dark)" size={42}>
										<icons.iconoCorreo
											width={20}
											color="var(--icons-color-base)"
										/>
									</IconsWrapper>
									<a href="mailto:soporte@ecomg4.com">soporte@ecomg4.com</a>
								</div>
							</li>

							<li>
								<div className="contact_item">
									<IconsWrapper color1="var(--icons-color-dark)" size={42}>
										<icons.iconoTelefono
											width={20}
											color="var(--icons-color-base)"
										/>
									</IconsWrapper>
									<a href="tel:+15551234567">+1 (555) 123-4567</a>
								</div>
							</li>

							<li>
								<div className="contact_item">
									<IconsWrapper color1="var(--icons-color-dark)" size={42}>
										<icons.iconoPuntoMapa
											width={20}
											color="var(--icons-color-base)"
										/>
									</IconsWrapper>
									<a
										href="https://www.google.com/maps?q=123+Calle+Principal,+Ciudad"
										target="_blank"
										rel="noopener noreferrer"
									>
										123Calle Principal, Ciudad
									</a>
								</div>
							</li>
						</ul>

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
				</section>
				<Bubble
					width={300}
					height={300}
					bottom={0}
					right={0}
					colors={{
						start: "rgba(31, 200, 226, 0.866)",
						mid1: "rgba(31, 200, 226, 0.682)",
						mid2: "rgba(31, 200, 226, 0.405)",
						end: "rgba(31, 200, 226, 0.153)",
					}}
				/>
			</footer>
			<CopyRight />
		</>
	);
};
