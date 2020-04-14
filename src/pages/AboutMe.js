import React from "react";
import { Row, Col } from "antd";

import * as Scroll from "react-scroll";

import Typical from "react-typical";
import { IoIosArrowDropdown } from "react-icons/io";

import "./AboutMe.css";

import AOS from "aos";
import "aos/dist/aos.css";

let scroll = Scroll.animateScroll; // You can also use <link> for styles

function AboutMe() {
	function scrollToBottom() {
		scroll.scrollToBottom();
	}

	AOS.init();
	return (
		<>
			<Row gutter={[8, 16]} style={{ marginTop: "7%" }}>
				<Col span={2} />
				<Col span={20} className="mainName">
					<Row gutter={[8, 16]}>
						<div>[ 이재협, LEEJAEHYUB, HYOBI ]</div>
						<div className="subName">
							<Typical
								steps={[`Responsibility  Cooperation  Steady  Study`, 1000000]}
								loop={10}
								wrapper="p"
							/>
						</div>
					</Row>
				</Col>
				<Col span={2} />
			</Row>

			<Row data-aos="fade-up">
				<Col style={{ fontSize: "45px", textAlign: "center" }} span={24}>
					Front-End Developer 🐣
				</Col>
			</Row>
			<Row gutter={[8, 16]} style={{ marginTop: 50 }} data-aos="fade-up">
				<Col style={{ fontSize: 50, textAlign: "center" }} className="down" span={24}>
					<IoIosArrowDropdown
						style={{ cursor: "pointer" }}
						onClick={() => {
							scrollToBottom();
						}}
					/>
				</Col>
			</Row>
			<Row style={{ marginTop: 200 }} data-aos="fade-up">
				<Col span={24} style={{ fontSize: 40, textAlign: "center" }}>
					어제보다 나은 내가 되기를 꿈꾸는 개발자입니다.
				</Col>
			</Row>
			<Row style={{ marginTop: 20 }} data-aos="fade-up">
				<Col span={24} style={{ fontSize: 30, textAlign: "center" }}>
					<p className="p1">
						본인의 코드에 <strong>책임</strong>을 질수 있는 개발자가 되어야 합니다.
					</p>
					<p className="p">다른 사람에게 설명하지 못하는 코드는 본인의 것이 아닙니다.</p>
					<p className="p">
						본인의 코드에 <strong>이유</strong>를 가지고,
					</p>
					<p className="p">
						이유에 정확한 <strong>근거</strong>를 가지는 개발자가 되기 위해 노력할 것 입니다.
					</p>
				</Col>
			</Row>
		</>
	);
}

export default AboutMe;
