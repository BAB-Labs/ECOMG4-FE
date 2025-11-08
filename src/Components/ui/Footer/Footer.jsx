import { icons } from "../../../Styles/icons";
import "./Footer.css";
export const Footer = () => {
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
					<span>Enalces Rapidos</span>
					<ul>
						<li>Inicio</li>
						<li>Productos</li>
						<li>Categorias</li>
						<li>Ofertas</li>
					</ul>
				</div>
				<div className="clients">
					<span>Atencion al CLiente</span>
					<p>Centro de Ayuda</p>
					<p>Envios y Devoluciones</p>
					<p>Terminos y Condiciones</p>
					<p>Politica de Privacidad</p>
				</div>
				<div className="contact">
					<span>Contacto</span>
				</div>
			</section>
		</footer>
	);
};
