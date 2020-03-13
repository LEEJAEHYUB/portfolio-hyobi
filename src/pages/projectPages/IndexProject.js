import React, { useState } from "react";
import { Row, Col, Modal } from "antd";

import "../Project.css";

import ProjectSeredipity from "./ProjectSerendipity";
import ProjectDislack from "./ProjectDislack";

import ProjectSerendipityModal from "./ProjectSerendipityModal";

function ProjectSerendipity() {
	const [projectModal, setModal] = useState(false);

	function clickCard(key) {
		setModal(key);
	}

	function closeModal() {
		setModal(false);
	}

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
				<Col
					className="projectCard"
					span={8}
					onClick={() => {
						clickCard("serendipity");
					}}
				>
					<ProjectSeredipity />
				</Col>
				<Col
					className="projectCard"
					span={8}
					onClick={() => {
						clickCard("dislack");
					}}
				>
					<ProjectDislack />
				</Col>
				<Col className="projectCard" span={8}>
					<ProjectSeredipity />
				</Col>
			</Row>

			{/* 모 달 */}

			<Modal
				style={{ marginTop: "-3.5%" }}
				width={1400}
				wrapClassName="projectModalWrap"
				className="projectModal"
				title="Serendipity - eat, pray, love"
				visible={projectModal === "serendipity"}
				onCancel={() => {
					closeModal();
				}}
			>
				<ProjectSerendipityModal />
			</Modal>
			<Modal
				style={{ marginTop: "-3.5%" }}
				width={1400}
				wrapClassName="projectModalWrap"
				className="projectModal"
				title="diSlack"
				visible={projectModal === "dislack"}
				onCancel={() => {
					closeModal();
				}}
			>
				<ProjectSerendipityModal />
			</Modal>
		</>
	);
}

export default ProjectSerendipity;
