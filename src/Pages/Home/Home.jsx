import "./home.css";
import productImage from "../../assets/producto.jpg"; // reemplaza con tu imagen real

const Home = () => {
	return (
		<div className="home">
			<div className="home-left">
				<div className="badge-shipping">🚚 Envío gratis en pedidos +$50</div>

				<h1 className="home-title">
					Tu <span className="text-green">supermercado</span> digital
				</h1>

				<p className="home-desc">
					Productos frescos y de calidad premium entregados directamente en tu
					hogar.{" "}
					<span className="text-blue">Compra fácil, rápido y 100% seguro.</span>
				</p>

				<div className="home-buttons">
					<button className="btn-primary">Comprar Ahora</button>
					<button className="btn-outline">Ver Ofertas</button>
				</div>

				<div className="home-stats">
					<div className="stat-box">
						<div className="icon">⭐</div>
						<div>
							<h3>4.9</h3>
							<p>Calificación</p>
						</div>
					</div>
					<div className="stat-box">
						<div className="icon">⏱️</div>
						<div>
							<h3>24h</h3>
							<p>Entrega</p>
						</div>
					</div>
					<div className="stat-box">
						<div className="icon">👥</div>
						<div>
							<h3>50K+</h3>
							<p>Clientes</p>
						</div>
					</div>
				</div>
			</div>

			<div className="home-right">
				<div className="product-card">
					<img
						src={productImage}
						alt="Producto premium"
						className="product-img"
					/>
					<div className="label-premium">Calidad Premium</div>
					<div className="label-discount">20% OFF</div>
					<div className="label-free">Envío GRATIS</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
