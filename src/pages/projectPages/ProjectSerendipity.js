import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import "../Project.css";

import finalPic from "../../images/projectIntro/finalProjectIntro.png";
import { FaGithub, FaAndroid } from "react-icons/fa";

function ProjectSerendipity() {
	return (
		<div className="contentsContainer" data-aos="fade-up">
			<div className="contentPic">
				<NavLink to="/Main/Project/serendipity">
					<div className="imgBoxText">Click Me!</div>
					<img className="imgBox" src={finalPic} alt="finalProject1" />
				</NavLink>
			</div>

			<div className="contentDes">
				<div>
					<span className="content-title">Serendipity - eat, pray, love</span>
				</div>
				<div>
					<span className="content-desc">Team Serengeti - Team Member</span>
				</div>

				<div style={{ textAlign: "center", width: "100%" }}>
					<div className="content-icon">
						<FaGithub
							className="projectIcon"
							size={38}
							onClick={() => {
								window.open("https://github.com/LEEJAEHYUB/Serendipity_client");
							}}
						/>

						<FaAndroid
							className="projectIcon"
							style={{ marginLeft: "3%" }}
							size={38}
							onClick={() => {
								window.open("https://tuney.kr/Av6qFX");
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectSerendipity;
