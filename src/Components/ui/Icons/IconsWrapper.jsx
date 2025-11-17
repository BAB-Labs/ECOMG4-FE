export const IconsWrapper = ({
	children,
	color1 = "#0ea5e9",
	color2 = null,
	borderColor = "transparent",
	size = 42,
	radius = 12,
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
				borderRadius: radius,
				border: `1px solid ${borderColor}`,
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
