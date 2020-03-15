import React, { useState } from "react";
import { Row, Col } from "antd";

import "../Project.css";

import ProjectSeredipity from "./ProjectSerendipity";
import ProjectDislack from "./ProjectDislack";
import ProjectSoon from "./ProjectSoon";

function ProjectSerendipity() {
	return (
		<>
			<Row gutter={[8, 16]}>
				<Col span={4} />
				<Col span={16}>
					<div style={{ fontSize: "50px", textAlign: "center" }}>PROJECTs</div>
				</Col>
				<Col span={4} />
			</Row>
			<Row>
				<Col className="projectCard" span={8}>
					<ProjectSeredipity />
				</Col>
				<Col className="projectCard" span={8}>
					<ProjectDislack />
				</Col>
				<Col className="projectCard" span={8}>
					<ProjectSoon />
				</Col>
			</Row>
		</>
	);
}

export default ProjectSerendipity;
