import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import "../Project.css";

import firstIntro from "../../images/projectIntro/firstProjectIntro.png";

import { FaGithub, FaAndroid } from "react-icons/fa";

function ProjectDislack() {
	return (
		<div className="contentsContainer" data-aos="fade-up">
			<div className="contentPic">
				<NavLink to="/Main/Project/dislack">
					<div className="imgBoxText">Click Me!</div>
					<img className="imgBox" src={firstIntro} alt="firstIntro" />
				</NavLink>
			</div>

			<div className="contentDes">
				<div>
					<span className="content-title">diSlack</span>
				</div>
				<div>
					<span className="content-desc">Team Crong - Team Leader</span>
				</div>

				<div style={{ textAlign: "center", width: "100%" }}>
					<div className="content-icon">
						<FaGithub
							className="projectIcon"
							size={38}
							onClick={() => {
								window.open("https://github.com/LEEJAEHYUB/diSlack_client");
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectDislack;
