import "./Button.css";

export const Button = ({
	children,
	handleOnClick,
	color1,
	color2,
	borderColor,
	width,
	maxWidth,
	height,
	padding,
	bgOpacity = 1,
	extraClassName = "",
}) => {
	const backgroundStyle = color2
		? `linear-gradient(90deg, ${color1}, ${color2})`
		: color1;

	return (
		<button
			type="button"
			className={`btn_primary ${extraClassName}`}
			onClick={handleOnClick}
			style={{
				width,
				height,
				maxWidth,
				padding,
				borderRadius: "var(--radius-lg)",
				border: borderColor ? `1px solid ${borderColor}` : "none",
				background: backgroundStyle,
				opacity: bgOpacity,
			}}
		>
			{children}
		</button>
	);
};
