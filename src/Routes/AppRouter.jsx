import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../Pages/not-found";
import Home from "../Pages/Home";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route>
					<Route index element={<Home />} />
					{/* {/* agregar aqui mas rutas --- */}
				</Route>

				{/*Agregar aqui mas Layouts */}

				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};
