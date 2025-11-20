import {
	CopyRight,
	Bubble,
	Banner,
	FooterInfo,
	FooterClients,
	FooterContact,
	FooterShortcuts,
} from "../index";
import "./Footer.css";

export const Footer = () => {
	return (
		<>
			<Banner />
			<footer id="footer_static">
				<section className="footer_sections">
					{/* Seccion del footer para poner la informacion principal de la pagina y enlaces a redes sociales */}
					<FooterInfo />

					{/* Seccion del footer para indicar los enlances rapidos */}
					<FooterShortcuts />

					{/* Seccion del footer para la parte de enlaces a ayudar al cliente */}
					<FooterClients />

					{/* Seccion del footer de contacto como email, telefono y ubicacion*/}
					<FooterContact />
				</section>

				{/* Burbuja para darle seguimiento al diseño que se tiene en penpot */}
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

			{/* Pequeña seccion hasta abajo donde se indica el propietario de la pagina y los derechos de autor */}
			<CopyRight />
		</>
	);
};
