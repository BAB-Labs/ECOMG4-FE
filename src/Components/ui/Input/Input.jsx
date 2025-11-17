import "./Input.css";

export const Input = ({
	placeholder = "",
	width,
	height,
	maxWidth,
	padding,
	borderColor,
	backgroundColor,
	blur = false,
	transparent = false,
	extraClassName = "",
	children,
	...props
}) => {
	return (
		<div className={`input_wrapper ${extraClassName}`}>
			{children && <span className="input_icon">{children}</span>}

			<input
				placeholder={placeholder}
				className={`inputPrimary ${blur ? "input_blur" : ""} ${
					transparent ? "input_transparent" : ""
				}`}
				style={{
					width,
					height,
					maxWidth,
					padding,
					paddingLeft: children && "45px",
					borderColor,
					borderRadius: "var(--radius-lg)",
					backgroundColor,
				}}
				{...props}
			/>
		</div>
	);
};
