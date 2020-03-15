import React, { useEffect } from "react";
import { Row, Col } from "antd";

import mobile3 from "../images/contact/mobile3.png";
import email from "../images/contact/email.png";
import git from "../images/contact/git.png";
import tistory from "../images/contact/tistory.png";
import "./Contact.css";

import * as Scroll from "react-scroll";
let scroll = Scroll.animateScroll; // You can also use <link> for styles

function Contact() {
	useEffect(() => {
		scroll.scrollToTop();
	}, []);

	return (
		<>
			<Row gutter={[8, 16]}>
				<Col span={4} />
				<Col span={16}>
					<div style={{ fontSize: "50px", textAlign: "center" }}>CONTACT</div>
				</Col>
				<Col span={4} />
			</Row>

			<Row gutter={[16, 16]} style={{ alignItems: "center" }} data-aos="fade-up">
				<Col className="contactCol" span={12}>
					<div className="contactCard">
						<img className="skillImg" src={mobile3} alt="mobile2" />
					</div>
					<div className="contactText">010.4136.5511</div>
				</Col>
				<Col className="contactCol" span={12}>
					<div className="contactCard">
						<img className="skillImg" src={email} alt="email" />
					</div>
					<div className="contactText">woguqdl20@gmail.com</div>
				</Col>
			</Row>

			<Row gutter={[16, 16]} style={{ alignItems: "center" }} data-aos="fade-up">
				<Col
					className="contactCol"
					span={12}
					onClick={() => {
						window.open("https://github.com/LEEJAEHYUB/");
					}}
					style={{ cursor: "pointer" }}
				>
					<div className="contactCard">
						<img className="skillImg" src={git} alt="git" />
					</div>
					<div className="contactText">https://github.com/LEEJAEHYUB</div>
				</Col>
				<Col
					className="contactCol"
					span={12}
					onClick={() => {
						window.open("https://hyobi.tistory.com");
					}}
					style={{ cursor: "pointer" }}
				>
					<div className="contactCard">
						<img className="skillImg" src={tistory} alt="tistory" />
					</div>
					<div className="contactText">https://hyobi.tistory.com</div>
				</Col>
			</Row>
		</>
	);
}

export default Contact;
