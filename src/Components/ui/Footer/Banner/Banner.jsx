import "./Banner.css";
import { bannerItems } from "../Data/BannerData";
import { IconsWrapper } from "../../Icons/IconsWrapper";
import { Bubble } from "../../Bubble/Bubble";

export const Banner = () => {
	return (
		<div className="banner">
			{bannerItems.map((value) => (
				<div key={value.title} className="banner_items">
					<IconsWrapper
						color1="var(--bg-blue)"
						color2="var(--bg-aqua)"
						borderColor=""
						size={48}
					>
						{value.icon}
					</IconsWrapper>
					<span className="banner_title">{value.title}</span>
					<span className="banner_subtitle">{value.subtitle}</span>
				</div>
			))}
			<Bubble
				width={250}
				height={250}
				top={0}
				left={0}
				colors={{
					start: "rgba(37, 94, 217, 0.936)",
					mid1: "rgba(37, 94, 217, 0.814)",
					mid2: "rgba(37, 94, 217, 0.489)",
					end: "rgba(37, 94, 217, 0.301)",
				}}
			/>
		</div>
	);
};
