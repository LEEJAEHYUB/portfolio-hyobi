import React, { useState } from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";

import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";

const { Header, Content, Footer } = Layout;

function Main() {
	const [curItem, setItem] = useState("aboutMe");

	return (
		<Layout style={{}}>
			<Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} style={{ lineHeight: "64px" }}>
					<Menu.Item
						key="AboutMe"
						onClick={val => {
							setItem(val.key);
						}}
					>
						About Me
					</Menu.Item>
					<Menu.Item
						key="Experience"
						onClick={val => {
							setItem(val.key);
						}}
					>
						Experience
					</Menu.Item>
					<Menu.Item
						key="Project"
						onClick={val => {
							setItem(val.key);
						}}
					>
						Project
					</Menu.Item>
					<Menu.Item
						key="Contact"
						onClick={val => {
							setItem(val.key);
						}}
					>
						Contact
					</Menu.Item>
				</Menu>
			</Header>
			<Content className="site-layout" style={{ padding: "0 50px", marginTop: 64 }}>
				<div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
					{console.log(curItem)}
				</div>
			</Content>
			<Footer style={{ textAlign: "center" }}>Hyobi's PortFolio ©2020 Created by HYOBI</Footer>
		</Layout>
	);
}

export default Main;
