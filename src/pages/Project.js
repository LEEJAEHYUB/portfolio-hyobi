import React from "react";

import { Row, Col } from "antd";
import "./Project.css";
import { FiCalendar } from "react-icons/fi";
import { TiSpannerOutline } from "react-icons/ti";
import { GoNote } from "react-icons/go";
import { FaGithub, FaAndroid } from "react-icons/fa";

import finalPic from "../images/finalProject.gif";
import finalPic3 from "../images/finalProject3.gif";
import firstPic from "../images/firstProject.gif";

function Project() {
	return (
		<div className="project">
			<Row gutter={[8, 16]}>
				<Col span={4} />
				<Col span={16}>
					<div style={{ fontSize: "50px", textAlign: "center" }}>PROJECTs</div>
				</Col>
				<Col span={4} />
			</Row>

			<Row gutter={[8, 16]} style={{ marginTop: "3%" }} data-aos="fade-up">
				<Col span={2} />
				<Col span={20} className="contents">
					<Row gutter={[8, 16]}>
						<Col flex="500px" className="contentLeft">
							<img
								className="imgBox-1"
								src={finalPic}
								alt="finalProject1"
								onClick={() => {
									window.open("https://github.com/LEEJAEHYUB/Serendipity_client");
								}}
							/>
							<img
								className="imgBox-1"
								src={finalPic3}
								alt="finalProject2"
								onClick={() => {
									window.open("https://github.com/LEEJAEHYUB/Serendipity_client");
								}}
							/>
						</Col>
						<Col flex="auto" className="contentRight" style={{ padding: 0 }}>
							<div>
								<span style={{ fontSize: "45px", fontWeight: "bold" }}>
									Serendipity - eat, pray, love
								</span>
							</div>
							<div>
								<span style={{ fontSize: "30px", fontWeight: "bold" }}>
									Team Serengeti - Team Member
								</span>
							</div>
							<div style={{ marginTop: 10 }}>
								<FiCalendar size={20} /> <span style={{ fontSize: 20 }}>01/2019 ~ 02/2019</span>
							</div>
							<div style={{ marginLeft: -2, marginTop: 10 }}>
								<TiSpannerOutline size={23} /> <span style={{ fontSize: 20 }}>Front-End</span>
							</div>
							<div style={{ marginTop: 10 }}>
								<GoNote size={23} /> <span style={{ fontSize: 20 }}>직장인을 위한 만남 주선 어플</span>
							</div>
							<div style={{ marginTop: 10 }}>
								<FaGithub size={23} />
								<span
									className="webSite"
									style={{ fontSize: 20 }}
									onClick={() => {
										window.open("https://github.com/LEEJAEHYUB/Serendipity_client");
									}}
								>
									{" "}
									https://github.com/LEEJAEHYUB/Serendipity_client
								</span>
							</div>
							<div
								style={{ marginTop: 10 }}
								className="webSite"
								onClick={() => {
									window.open("https://tuney.kr/Av6qFX");
								}}
							>
								<FaAndroid size={23} /> <span style={{ fontSize: 20 }}>https://tuney.kr/Av6qFX</span>
							</div>
						</Col>
					</Row>
				</Col>
				<Col span={2} />
			</Row>

			<Row gutter={[8, 16]} style={{ marginTop: "2%" }} data-aos="fade-up">
				<Col span={2} />
				<Col span={20} className="contents">
					<Row gutter={[8, 16]}>
						<Col flex="500px" className="contentLeft">
							<img
								className="imgBox"
								src={firstPic}
								alt="finalProject"
								onClick={() => {
									window.open("https://github.com/LEEJAEHYUB/diSlack_client");
								}}
							/>
						</Col>

						<Col flex="auto" className="contentRight" style={{ padding: 0 }}>
							<div>
								<span style={{ fontSize: "45px", fontWeight: "bold" }}>diSlack</span>
							</div>
							<div>
								<span style={{ fontSize: "30px", fontWeight: "bold" }}>Team Crong - Team Leader</span>
							</div>
							<div style={{ marginTop: 10 }}>
								<FiCalendar size={20} /> <span style={{ fontSize: 20 }}>01/2019 ~ 01/2019</span>
							</div>
							<div style={{ marginLeft: -2, marginTop: 10 }}>
								<TiSpannerOutline size={23} /> <span style={{ fontSize: 20 }}>Front-End</span>
							</div>
							<div style={{ marginTop: 10 }}>
								<GoNote size={23} /> <span style={{ fontSize: 20 }}>slack cloning</span>
							</div>
							<div style={{ marginTop: 10 }}>
								<FaGithub size={23} />
								<span
									className="webSite"
									style={{ fontSize: 20 }}
									onClick={() => {
										window.open("https://github.com/LEEJAEHYUB/diSlack_client");
									}}
								>
									{" "}
									https://github.com/LEEJAEHYUB/diSlack_client
								</span>
							</div>
						</Col>
					</Row>
				</Col>
				<Col span={2} />
			</Row>
		</div>
	);
}

export default Project;
