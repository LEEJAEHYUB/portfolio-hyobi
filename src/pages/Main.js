import React, { useState, useEffect, useRef } from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "antd/dist/antd.css";

import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
import "./Main.css";

const { Header, Content, Footer } = Layout;

function Main() {
	const [curItem, setItem] = useState("AboutMe");

	return (
		<Router>
			<Layout style={{ overflow: "hidden" }}>
				<Header style={{ position: "fixed", zIndex: 1, width: "100%", backgroundColor: "transparent" }}>
					<Menu
						className="naviBar"
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={[`${curItem}`]}
						style={{
							lineHeight: "40px",
							float: "right",
							borderRadius: "20px",
							marginTop: "1%",
						}}
					>
						<Menu.Item
							key="AboutMe"
							className="naviBarContent"
							onClick={val => {
								setItem(val.key);
							}}
						>
							<Link style={{ fontSize: "20px" }} to="/portfolio-hyobi/Main">
								About Me
							</Link>
						</Menu.Item>

						<Menu.Item
							key="Experience"
							className="naviBarContent"
							onClick={val => {
								setItem(val.key);
							}}
						>
							<Link style={{ fontSize: "20px" }} to="/portfolio-hyobi/Main/Experience">
								Experience
							</Link>
						</Menu.Item>

						<Menu.Item
							key="Project"
							className="naviBarContent"
							onClick={val => {
								setItem(val.key);
							}}
						>
							<Link style={{ fontSize: "20px" }} to="/portfolio-hyobi/Main/Project">
								Project
							</Link>
						</Menu.Item>

						<Menu.Item
							key="Contact"
							className="naviBarContent"
							onClick={val => {
								setItem(val.key);
							}}
						>
							<Link style={{ fontSize: "20px" }} to="/portfolio-hyobi/Main/Contact">
								Contact
							</Link>
						</Menu.Item>
					</Menu>
				</Header>
				<Content
					className="site-layout"
					style={{ padding: "0 50px", marginTop: 20, height: "1200px", marginBottom: 30, overflow: "scroll" }}
				>
					<div className="site-layout-background" style={{ padding: 30, marginTop: "3%" }}>
						<Switch>
							<Route exact path="/portfolio-hyobi/Main" render={() => <AboutMe />} />
							<Route exact path="/portfolio-hyobi/Main/Project" render={() => <Project />} />
							<Route exact path="/portfolio-hyobi/Main/Experience" render={() => <Experience />} />
							<Route exact path="/portfolio-hyobi/Main/Contact" render={() => <Contact />} />
						</Switch>
					</div>
				</Content>
				<Footer
					style={{
						position: "fixed",
						bottom: 1,
						zIndex: 1,
						width: "100%",
						textAlign: "center",
						height: "5%",
					}}
				>
					Hyobi's PortFolio ©2020 Created by HYOBI
				</Footer>
			</Layout>
		</Router>
	);
}

export default Main;
