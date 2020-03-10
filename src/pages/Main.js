import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "antd/dist/antd.css";

import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";

const { Header, Content, Footer } = Layout;

function Main() {
	const [curItem, setItem] = useState("AboutMe");

	return (
		<Router>
			<Layout style={{}}>
				<Header style={{ position: "fixed", zIndex: 1, width: "100%", backgroundColor: "transparent" }}>
					<Menu
						theme="dark"
						mode="horizontal"
						// defaultSelectedKeys={[`${curItem}`]}
						style={{ lineHeight: "64px", float: "right" }}
					>
						<Menu.Item
							key="AboutMe"
							onClick={val => {
								setItem(val.key);
							}}
						>
							<Link to="/">About Me</Link>
						</Menu.Item>

						<Menu.Item
							key="Experience"
							onClick={val => {
								setItem(val.key);
							}}
						>
							<Link to="/Experience">Experience</Link>
						</Menu.Item>

						<Menu.Item
							key="Project"
							onClick={val => {
								setItem(val.key);
							}}
						>
							<Link to="/Project">Project</Link>
						</Menu.Item>

						<Menu.Item
							key="Contact"
							onClick={val => {
								setItem(val.key);
							}}
						>
							<Link to="/Contact">Contact</Link>
						</Menu.Item>
					</Menu>
				</Header>
				<Content className="site-layout" style={{ padding: "0 50px", marginTop: 64, height: "1000px" }}>
					<div className="site-layout-background" style={{ padding: 24 }}>
						<Switch>
							<Route exact path="/" render={() => <AboutMe />} />
							<Route path="/Project" render={() => <Project />} />
							<Route path="/Experience" render={() => <Experience />} />
							<Route path="/Contact" render={() => <Contact />} />
						</Switch>
					</div>
				</Content>
				<Footer style={{ position: "fixed", bottom: 1, zIndex: 1, width: "100%", textAlign: "center" }}>
					Hyobi's PortFolio ©2020 Created by HYOBI
				</Footer>
			</Layout>
		</Router>
	);
}

export default Main;
