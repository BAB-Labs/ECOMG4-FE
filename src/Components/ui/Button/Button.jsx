import "./Button.css";

export const Button = ({ title, imgSrc, imgAlt }) => {
	return (
		<button className="btnPrimary" type="button">
			<img src={imgSrc} alt={imgAlt} className="img-icon" />
			{title}
		</button>
	);
};
