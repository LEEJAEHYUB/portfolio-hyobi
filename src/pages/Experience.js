import React from "react";
import { Row, Col, Timeline } from "antd";

import "./Experience.css";

function Experience() {
	return (
		<>
			<Row gutter={[8, 16]}>
				<Col span={5}></Col>
				<Col span={14}>
					<div style={{ marginTop: "3%", fontSize: "50px", textAlign: "center" }}>EXPERIENCE</div>
					<Timeline className="timeLine" data-aos="fade-up">
						<Timeline.Item className="timeLineTxt" color="green">
							<p>2017-08 서경대학교 도시공학과 졸업</p>
						</Timeline.Item>
						<Timeline.Item className="timeLineTxt" color="blue">
							<p>2017-09 Hyein E&C 입사</p>
							<p>2019-06 Hyein E&C 퇴사</p>
						</Timeline.Item>
						<Timeline.Item className="timeLineTxt" color="green">
							<p>2019-07 CodeStates, Advanced Soft Engineering Immersive Program START!</p>
							<p>2020-02 CodeStates, Advanced Soft Engineering Immersive Program END!</p>
						</Timeline.Item>
						<Timeline.Item className="timeLineTxt" color="green">
							<p>2020-02~ 개발자로서 매일 발전 진행중!</p>
						</Timeline.Item>
					</Timeline>
				</Col>
				<Col span={5}></Col>
			</Row>
		</>
	);
}

export default Experience;
