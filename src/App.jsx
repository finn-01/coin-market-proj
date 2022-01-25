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

				<div className="footer">
					<Typography.Title
						level={5}
						style={{ color: "white", textAlign: "center" }}
					>
						Crytoverse <br />
						All rights reserved
					</Typography.Title>
					<Space>
						<Link to="/">Home</Link>
						<Link to="/exchanges">Exchanges</Link>
						<Link to="/news">News</Link>
					</Space>
				</div>
			</div>
		</div>
	);
};

export default App;
