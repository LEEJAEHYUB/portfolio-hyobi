import React from "react";

import "../Project.css";

import { FiCalendar } from "react-icons/fi";
import { TiSpannerOutline } from "react-icons/ti";
import { GoNote } from "react-icons/go";

function ProjectSerendipityModal() {
	return (
		<>
			<div style={{ marginTop: 3 }}>
				<span>
					<GoNote size={23} />
					<span style={{ fontSize: 25 }}>직장인을 위한 만남 주선 어플</span>
				</span>
				<span style={{ marginLeft: "2%" }}>
					<FiCalendar size={20} /> <span style={{ fontSize: 25 }}>01/2019 ~ 02/2019</span>
				</span>
				<span style={{ marginLeft: "2%" }}>
					<TiSpannerOutline size={23} /> <span style={{ fontSize: 25 }}>Front-End</span>
				</span>
			</div>
		</>
	);
}

export default ProjectSerendipityModal;
