import { icons } from "../../../../Styles/icons";

export const footerSocialIcons = [
	{
		icon: <icons.iconoInstagram width={20} color="var(--icons-color-base)" />,
		href: "https://instagram.com",
	},
	{
		icon: <icons.iconoTwitter width={20} color="var(--icons-color-base)" />,
		href: "https://twitter.com",
	},
	{
		icon: <icons.iconoFacebook width={20} color="var(--icons-color-base)" />,
		href: "https://facebook.com",
	},
];

export const footerQuickLinks = [
	{ label: "Inicio", href: "/home" },
	{ label: "Productos", href: "/products" },
	{ label: "Categorías", href: "/categories" },
	{ label: "Ofertas", href: "/offers" },
];

export const footerClientLinks = [
	{ label: "Centro de Ayuda", href: "/help-center" },
	{ label: "Envíos y Devoluciones", href: "/shipping-and-returns" },
	{ label: "Términos y Condiciones", href: "/terms-and-conditions" },
	{ label: "Política de Privacidad", href: "/privacy-policy" },
];

export const footerContactItems = [
	{
		icon: <icons.iconoCorreo width={20} color="var(--icons-color-base)" />,
		value: "soporte@ecomg4.com",
		href: "mailto:soporte@ecomg4.com",
	},
	{
		icon: <icons.iconoTelefono width={20} color="var(--icons-color-base)" />,
		value: "+1 (555) 123-4567",
		href: "tel:+15551234567",
	},
	{
		icon: <icons.iconoPuntoMapa width={20} color="var(--icons-color-base)" />,
		value: "123 Calle Principal, Ciudad",
		href: "https://www.google.com/maps?q=123+Calle+Principal,+Ciudad",
		newTab: true,
	},
];
