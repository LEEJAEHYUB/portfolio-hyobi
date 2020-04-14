import React, { useEffect } from "react";
import { Row, Col } from "antd";

import { Document, Page } from "react-pdf";
import resume from "../images/resume.pdf";

import * as Scroll from "react-scroll";

import "./Resume.css";

let scroll = Scroll.animateScroll;

function Resume() {
	useEffect(() => {
		scroll.scrollToTop();
	}, []);

	return (
		<>
			<Row gutter={[8, 16]} style={{ marginTop: "7%" }}>
				<iframe title="resume" className="resume-iframe" src={resume} />
			</Row>
		</>
	);
}

export default Resume;

// document={{
// 	url: "https://drive.google.com/open?id=1dNmrnT3xXBjriLFdDQKcSDg0qBqR9vb7",
// }}
