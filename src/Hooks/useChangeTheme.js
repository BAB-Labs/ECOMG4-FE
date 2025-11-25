import { useState, useEffect } from "react";

export const useChangeTheme = () => {
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem("theme") || "";
	});

	useEffect(() => {
		if (theme === "darkTheme") {
			document.body.classList.add("darkTheme");
		} else {
			document.body.classList.remove("darkTheme");
		}
	}, [theme]);

	const toggleTheme = () => {
		const nextTheme = theme === "darkTheme" ? "" : "darkTheme";

		setTheme(nextTheme);
		localStorage.setItem("theme", nextTheme);
	};

	return { theme, toggleTheme };
};
