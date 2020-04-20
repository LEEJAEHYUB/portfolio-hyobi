import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "antd/dist/antd.css";

import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
import Skills from "./Skills";
import ProjectSerendipityModal from "./projectPages/ProjectSerendipityModal";
import ProjectDislackModal from "./projectPages/ProjectDislackModal";

import "./Main.css";

const { Header, Content, Footer } = Layout;

function Main() {
	const HEIGHT = window.innerHeight;

	const [curItem, setItem] = useState("AboutMe");

	return (
		<Router>
			<Layout style={{ overflow: "hidden" }}>
				<Header style={{ position: "fixed", zIndex: 1, width: "100%", backgroundColor: "transparent" }}>
					<Menu className="naviBar" theme="dark" mode="horizontal" defaultSelectedKeys={[`${curItem}`]}>
						<Menu.Item
							key="AboutMe"
							className="naviBarContent"
							onClick={(val) => {
								setItem(val.key);
							}}
						>
							<Link className="link-btn" to="/portfolio-hyobi/Main">
								About Me
							</Link>
						</Menu.Item>

						<Menu.Item
							key="Resume"
							className="naviBarContent"
							onClick={(val) => {
								setItem(val.key);
							}}
						>
							<Link className="link-btn" to="/portfolio-hyobi/Main/Resume">
								Resume
							</Link>
						</Menu.Item>

						<Menu.Item
							key="Experience"
							className="naviBarContent"
							onClick={(val) => {
								setItem(val.key);
							}}
						>
							<Link className="link-btn" to="/portfolio-hyobi/Main/Experience">
								Experience
							</Link>
						</Menu.Item>

						<Menu.Item
							key="Skills"
							className="naviBarContent"
							onClick={(val) => {
								setItem(val.key);
							}}
						>
							<Link className="link-btn" to="/portfolio-hyobi/Main/Skills">
								Skills
							</Link>
						</Menu.Item>

						<Menu.Item
							key="Project"
							className="naviBarContent"
							onClick={(val) => {
								setItem(val.key);
							}}
						>
							<Link className="link-btn" to="/portfolio-hyobi/Main/Project">
								Project
							</Link>
						</Menu.Item>

						<Menu.Item
							key="Contact"
							className="naviBarContent"
							onClick={(val) => {
								setItem(val.key);
							}}
						>
							<Link className="link-btn" to="/portfolio-hyobi/Main/Contact">
								Contact
							</Link>
						</Menu.Item>
					</Menu>
				</Header>
				<Content className="site-layout">
					<div className="site-layout-background" style={{ padding: 30, marginTop: "3%" }}>
						<Switch>
							<Route exact path="/portfolio-hyobi/Main" render={() => <AboutMe />} />
							<Route exact path="/portfolio-hyobi/Main/Resume" render={() => <Resume />} />
							<Route exact path="/portfolio-hyobi/Main/Experience" render={() => <Experience />} />
							<Route exact path="/portfolio-hyobi/Main/Skills" render={() => <Skills />} />
							<Route exact path="/portfolio-hyobi/Main/Project" render={() => <Project />} />
							<Route path="/Main/Project/serendipity" children={<ProjectSerendipityModal />} />
							<Route path="/Main/Project/dislack" children={<ProjectDislackModal />} />
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
