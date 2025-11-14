import { icons } from "../../../Styles/icons";
import { Button, Input } from "../index";
import "./Footer.css";

export default function Footer() {
	return (
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
						Tu supermercado digital de confianza. Productos frescos y de calidad
						premium entregados directamente en tu hogar.
					</p>

					<div className="info_icons">
						<span className="icon_button">
							<icons.iconoInstagram width={20} />
						</span>
						<span className="icon_button">
							<icons.iconoTwitter width={20} />
						</span>
						<span className="icon_button">
							<icons.iconoFacebook width={20} />
						</span>
					</div>
				</div>
				<div className="shortcuts">
					<span className="shortcuts_title">Enlaces Rapidos</span>
					<p>Inicio</p>
					<p>Productos</p>
					<p>Categorias</p>
					<p>Ofertas</p>
				</div>
				<div className="clients">
					<span className="clients_title">Atencion al Cliente</span>
					<p>Centro de Ayuda</p>
					<p>Envios y Devoluciones</p>
					<p>Terminos y Condiciones</p>
					<p>Politica de Privacidad</p>
				</div>
				<div className="contact">
					<span className="contact_title">Contacto</span>
					<ul>
						<li>soporte@ecomg4.com</li>
						<li>+1(555)123-4567</li>
						<li>123 Calle Principal, Ciudad</li>
					</ul>
					<div>
						icon <span>Newsletter</span>
						<p>Suscribete y recibe ofertas exclusivas</p>
						<div style={{ display: "flex" }}>
							<Input placeholder={"tu@email.com"} />
							<Button
								imgAlt={"Boton para newsletter"}
								title={"Hola mundo"}
								imgSrc={<icons.iconoFlechaDerecha.arguments />}
							/>
						</div>
					</div>
				</div>
			</section>
		</footer>
	);
}
