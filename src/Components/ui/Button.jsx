import "./Button.css";
export default function Button({ title, imgSrc, imgAlt }) {
	return (
		<>
			<button className="btnPrimary">
				<img src={imgSrc} alt={imgAlt} className="img-icon" />
				{title}
			</button>
		</>
	);
}
