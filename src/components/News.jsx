import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
	"https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
	const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
	const { data } = useGetCryptosQuery(100);
	const { data: cryptoNews } = useGetCryptoNewsQuery({
		newsCategory,
		count: simplified ? 6 : 12,
	});
	console.log(cryptoNews);

	return <div>News</div>;
};

export default News;
