import "./Bubble.css";
export const Bubble = ({
	top,
	bottom,
	right,
	left,
	width,
	height,
	colors = {},
}) => {
	const { start, mid1, mid2, end } = colors;

	const gradient = `radial-gradient(circle,
        ${start} 0%,
        ${mid1} 40%,
        ${mid2} 70%,
        ${end} 100%)`;

	return (
		<div
			style={{
				position: "absolute",
				width: width,
				height: height,
				top: top,
				bottom: bottom,
				right: right,
				left: left,
				background: gradient,
			}}
			className="bubble"
		></div>
	);
};
