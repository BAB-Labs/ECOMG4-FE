import { footerQuickLinks } from "../Data/FooterData";

export const FooterShortcuts = () => {
	return (
		<div className="shortcuts">
			<span className="shortcuts_title">Enlaces Rapidos</span>

			{/* Estos Links no se pueden quedar asi se tienen que migrar a enlaces con React Router */}

			{footerQuickLinks.map((value) => (
				<a key={value.label} href={value.href}>
					{value.label}
				</a>
			))}
		</div>
	);
};
