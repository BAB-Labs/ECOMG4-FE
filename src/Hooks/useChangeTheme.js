import { useState, useEffect } from "react";

export const useChangeTheme = () => {
	const [isDark, setIsDark] = useState(() => {
		localStorage.getItem("theme");

		// Si no hay nada almacenado se usara el tema del sistema
		return window.matchMedia("(prefers-color-scheme: dark)").matches;
	});

	const toggleTheme = () => {
		setIsDark(!isDark);
	};

	useEffect(() => {
		document.body.classList.toggle("darkTheme", isDark);

		localStorage.setItem("theme", isDark ? "dark" : "light");
	}, [isDark]);

	return {
		isDark,
		toggleTheme,
	};
};
