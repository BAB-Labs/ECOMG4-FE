import { footerClientLinks } from "../Data/FooterData";

export const FooterClients = () => {
	return (
		<div className="clients">
			<span className="clients_title">Atencion al Cliente</span>

			{/* Estos Links no se pueden quedar asi se tienen que migrar a enlaces con React Router */}

			{footerClientLinks.map((value) => (
				<a key={value.label} href={value.href}>
					{value.label}
				</a>
			))}
		</div>
	);
};
