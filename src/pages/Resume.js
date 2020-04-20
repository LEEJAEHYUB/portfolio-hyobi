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
		<div className="resume-container">
			<a className="resume-link" href={"https://drive.google.com/open?id=1dNmrnT3xXBjriLFdDQKcSDg0qBqR9vb7"}>
				모바일용 이력서
			</a>
			<Row className="resume-frame">
				<iframe title="resume" className="resume-iframe" src={resume} />
			</Row>
		</div>
	);
}

export default Resume;

// document={{
// 	url: "https://drive.google.com/open?id=1dNmrnT3xXBjriLFdDQKcSDg0qBqR9vb7",
// }}
