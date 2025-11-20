import "./InputBasic.css";

export const InputBasic = ({
	placeholder = "",
	type = "text",
	required = false,
	width,
	height,
	maxWidth,
}) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			required={required}
			className="btn_basic"
			style={{
				width,
				height,
				maxWidth,
			}}
		/>
	);
};
