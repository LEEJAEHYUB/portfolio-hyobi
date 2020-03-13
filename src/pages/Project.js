import React from "react";

import "./Project.css";

import IndexProject from "./projectPages/IndexProject";

function Project() {
	return (
		<>
			<IndexProject />
		</>
	);
}

export default Project;

/**
 * import React, { useState } from "react";
import { Row, Col } from "antd";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./Project.css";
import ProjectCard from "./ProjectCard";
import Serendipity from "./projectPages/Serendipity";
import Temporary from "./Temporary";

function Project() {
	const [projectName, goProject] = useState(null);

	return projectName === null ? (
		<>
			<Row gutter={[8, 16]}>
				<Col span={4} />
				<Col span={16}>
					<div style={{ fontSize: "50px", textAlign: "center" }}>PROJECTs</div>
				</Col>
				<Col span={4} />
			</Row>

			<Row>
			<Link style={{ fontSize: "20px" }} to="/portfolio-hyobi/Main/Skills">
				<Col
					className="projectCard"
					onClick={() => {
						goProject("serendipity");
					}}
					span={8}
				>
					<ProjectCard />
				</Col>
				</Link>
				<Col
					className="projectCard"
					onClick={() => {
						goProject("dislack");
					}}
					span={8}
				>
					<ProjectCard />
				</Col>
				<Col
					className="projectCard"
					onClick={() => {
						goProject("pomodoro");
					}}
					span={8}
				>
					<ProjectCard />
				</Col>
			</Row>
		</>
	) : projectName === "serendipity" ? (
		<Serendipity />
	) : (
		<Temporary />
	);
}

export default Project;

 */
