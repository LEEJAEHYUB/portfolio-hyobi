import React from "react";
import { Row, Col } from "antd";
import Typical from "react-typical";
import { IoIosArrowDropdown } from "react-icons/io";

import "./AboutMe.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

function AboutMe() {
	AOS.init();
	return (
		<>
			<Row gutter={[8, 16]} style={{ marginTop: "7%" }}>
				<Col span={2} />
				<Col span={20} className="mainName">
					<Row gutter={[8, 16]}>
						<Typical steps={[`이재협, LEEJAEHYUB, Hyobi`, 1000000]} loop={10} wrapper="p" />
					</Row>
				</Col>
				<Col span={2} />
			</Row>

			<Row style={{}} data-aos="fade-up">
				<Col style={{ fontSize: 50, textAlign: "center" }} span={24}>
					Front-End Developer
				</Col>
			</Row>
			<Row gutter={[8, 16]} style={{ marginTop: 50 }} data-aos="fade-up">
				<Col style={{ fontSize: 50, textAlign: "center" }} span={24}>
					<IoIosArrowDropdown />
				</Col>
			</Row>
			<Row style={{ marginTop: 200 }} data-aos="fade-up">
				<Col span={24} style={{ fontSize: 50, textAlign: "center" }}>
					어제보다 나은 내가 되기를 꿈꾸는 개발자입니다.
				</Col>
			</Row>
			<Row style={{ marginTop: 20 }} data-aos="fade-up">
				<Col span={24} style={{ fontSize: 50, textAlign: "center" }}>
					I always strive to be a better version of myself than yesterday.
				</Col>
			</Row>
		</>
	);
}

export default AboutMe;
