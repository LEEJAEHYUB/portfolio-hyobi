import React from "react";

import { Row, Col } from "antd";
import "./Project.css";
import { FiCalendar } from "react-icons/fi";

import finalPic from "../images/finalProject.gif";
import finalPic3 from "../images/finalProject3.gif";
import firstPic from "../images/firstProject.gif";

function Project() {
	return (
		<>
			<Row gutter={[8, 16]}>
				<Col span={4} />
				<Col span={16}>
					<div style={{ fontSize: "40px", textAlign: "center" }}>PROJECTs</div>
				</Col>
				<Col span={4} />
			</Row>

			<Row gutter={[8, 16]} style={{ marginTop: "3%" }}>
				<Col span={2} />
				<Col span={20} className="contents">
					<Row gutter={[8, 16]}>
						<Col flex="500px" className="contentLeft">
							<img className="imgBox-1" src={finalPic} alt="finalProject1" onClick={() => {}} />
							<img className="imgBox-1" src={finalPic3} alt="finalProject2" />
						</Col>
						<Col flex="auto" className="contentRight">
							<div>
								<span style={{ fontSize: "30px", fontWeight: "bold" }}>
									Serendipity - eat, pray, love
								</span>

								<span style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "3%" }}>
									Team Serengeti - Team Member
								</span>
							</div>
							<div style={{ marginTop: 10 }}>
								<FiCalendar size={15} /> <span style={{ fontSize: 16 }}>01/2019 ~ 02/2019</span>
							</div>
						</Col>
					</Row>
				</Col>
				<Col span={2} />
			</Row>

			<Row gutter={[8, 16]} style={{ marginTop: "2%" }}>
				<Col span={2} />
				<Col span={20} className="contents">
					<Row gutter={[8, 16]}>
						<Col flex="500px" className="contentLeft">
							<img className="imgBox" src={firstPic} alt="finalProject" />
						</Col>

						<Col flex="auto" className="contentRight">
							<div>
								<span style={{ fontSize: "30px", fontWeight: "bold" }}>diSlack</span>

								<span style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "3%" }}>
									Team Crong - Team Leader
								</span>
							</div>
							<div style={{ marginTop: 10 }}>
								<FiCalendar size={15} /> <span style={{ fontSize: 16 }}>01/2019 ~ 01/2019</span>
							</div>
						</Col>
					</Row>
				</Col>
				<Col span={2} />
			</Row>
		</>
	);
}

export default Project;
