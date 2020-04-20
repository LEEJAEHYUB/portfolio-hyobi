import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout } from "antd";
import Typical from "react-typical";

import { FiArrowRightCircle } from "react-icons/fi";

import "./Intro.css";

import Main from "./pages/Main";

function Intro() {
	const [goMain, setGo] = useState(false);

	return !goMain ? (
		<Router>
			<Layout style={{ height: "920px", background: "transparent", alignItems: "center" }}>
				<div className="mainTxt">
					<Typical style={{}} steps={[`<Welcome To Hyobi's PortFolio />`, 1000000]} loop={10} wrapper="p" />
				</div>

				<div className="nextBtn">
					<Link
						to="/portfolio-hyobi/Main"
						onClick={() => {
							setGo(true);
						}}
					>
						<FiArrowRightCircle size={50} color={"#bdc3c7"} />
					</Link>
				</div>
			</Layout>
		</Router>
	) : (
		<Router>
			<Route path="/portfolio-hyobi/Main" component={Main} />
		</Router>
	);
}

export default Intro;
