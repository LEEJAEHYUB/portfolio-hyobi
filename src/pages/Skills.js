import React, { useEffect } from "react";
import { Row, Col } from "antd";

import * as Scroll from "react-scroll";

import "./Skills.css";
import react from "../images/skills/react.png";
import react_native from "../images/skills/react_native.png";
import mobx from "../images/skills/mobx.png";
import apollo from "../images/skills/apollo.png";

import reacthooks from "../images/skills/reacthooks.png";
import nodejs from "../images/skills/nodejs.png";
import express from "../images/skills/express.png";
import mysql from "../images/skills/mysql.png";
import antd from "../images/skills/antd.png";

import git from "../images/skills/git.png";
import notion from "../images/skills/notion.png";
import slack from "../images/skills/slack.png";
import vsc from "../images/skills/vsc.png"; // You can also use <link> for styles

let scroll = Scroll.animateScroll;

function Skills() {
	useEffect(() => {
		scroll.scrollToTop();
	}, []);

	return (
		<div className="skill-container">
			<Row gutter={[8, 16]}>
				<Col span={4} />
				<Col span={16}>
					<div className="skill-title" style={{ fontSize: "50px", textAlign: "center" }}>
						SKILLs
					</div>
				</Col>
				<Col span={4} />
			</Row>

			<Row style={{ marginTop: 40 }} data-aos="fade-up">
				<Col style={{ fontSize: 40, textAlign: "center" }} span={24}>
					More Experience
				</Col>
			</Row>
			<Row style={{ marginTop: 10 }} data-aos="fade-up">
				<Col style={{ fontSize: 30, textAlign: "center", display: "flex", justifyContent: "center" }} span={24}>
					<span className="skillBox">
						<img className="skillImg" src={react} alt="react" />
					</span>
					<span className="skillBox">
						<img className="skillImg" src={react_native} alt="react_native" />
					</span>
					<span className="skillBox">
						<img className="skillImg" src={mobx} alt="mobx" />
					</span>
				</Col>
			</Row>

			<Row style={{ marginTop: 10 }} data-aos="fade-up">
				<Col span={24} style={{ fontSize: 40, textAlign: "center" }}>
					Experience
				</Col>
			</Row>
			<Row style={{ marginTop: 10 }} data-aos="fade-up">
				<Col style={{ fontSize: 30, textAlign: "center", display: "flex", justifyContent: "center" }} span={24}>
					<span className="skillBox">
						<img className="skillImg" src={reacthooks} alt="reacthooks" />
					</span>
					<span className="skillBox">
						<img className="skillImg" src={apollo} alt="apollo" />
					</span>
					<span className="skillBox">
						<img className="skillImg" src={nodejs} alt="nodejs" />
					</span>
					<span className="skillBox">
						<img className="skillImg" src={express} alt="express" />
					</span>

					<span className="skillBox">
						<img className="skillImg" src={mysql} alt="mysql" />
					</span>
					<span className="skillBox">
						<img className="skillImg" src={antd} alt="antd" />
					</span>
				</Col>
			</Row>

			<Row style={{ marginTop: 10 }} data-aos="fade-up">
				<Col span={24} style={{ fontSize: 40, textAlign: "center" }}>
					Tools
				</Col>
			</Row>
			<Row style={{ marginTop: 10 }} data-aos="fade-up">
				<Col style={{ fontSize: 30, textAlign: "center", display: "flex", justifyContent: "center" }} span={24}>
					<span className="skillBox">
						<img className="skillImg" src={git} alt="git" />
					</span>
					<span className="skillBox">
						<img className="skillImg" src={notion} alt="notion" />
					</span>
					<span className="skillBox">
						<img className="skillImg" src={slack} alt="slack" />
					</span>
					<span className="skillBox">
						<img className="skillImg" src={vsc} alt="vsc" />
					</span>
				</Col>
			</Row>
		</div>
	);
}

export default Skills;
