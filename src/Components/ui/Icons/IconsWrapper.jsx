export const IconsWrapper = ({
	children,
	color1 = "",
	color2 = null,
	borderColor = "transparent",
	size = 0,
	padding = 0,
	bgOpacity = 1,
	extraClassName = "",
}) => {
	const backgroundStyle = color2
		? `linear-gradient(150deg, ${color1}, ${color2})`
		: color1;

	return (
		<span
			className={`icon_wrapper ${extraClassName}`}
			style={{
				width: size,
				height: size,
				padding,
				borderRadius: "var(--radius-lg)",
				border: borderColor ? `1px solid ${borderColor}` : "none",
				background: backgroundStyle,
				opacity: bgOpacity,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				cursor: "pointer",
				transition: "0.25s ease",
			}}
		>
			{children}
		</span>
	);
};
