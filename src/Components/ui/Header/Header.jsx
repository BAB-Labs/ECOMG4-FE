import { HeaderTop } from "./Items/HeaderTop";
import { HeaderContent } from "./Items/HeaderContent";
import { HeaderNavbar } from "./Items/HeaderNavbar";
import "./Header.css";

export const Header = () => {
	return (
		<div id="header_static">
			{/* Header banner para datos extras */}
			<HeaderTop />

			{/* Contenido del header */}
			<HeaderContent />

			{/* Navegacion por medio de links */}
			<HeaderNavbar />
		</div>
	);
};
