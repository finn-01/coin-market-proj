import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
	Navbar,
	Homepage,
	Exchanges,
	Cryptocurrencies,
	CryptoDetails,
	News,
} from "./components";

const App = () => {
	return (
		<div className="app">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="main">
				<Layout>
					<div className="routes">
						<Routes>
							<Route element={<Homepage />} exact path="/" />
							<Route element={<Exchanges />} exact path="/exchanges" />
							<Route
								element={<Cryptocurrencies />}
								exact
								path="/cryptocurrencies"
							/>
							<Route element={<CryptoDetails />} exact path="/crypto/:coinId" />
							<Route element={<News />} exact path="/news" />
						</Routes>
					</div>
				</Layout>
			</div>

			<div className="footer"></div>
		</div>
	);
};

export default App;
