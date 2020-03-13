import React from "react";

import "../Project.css";

import firstIntro from "../../images/projectIntro/firstProjectIntro.png";

import { FaGithub, FaAndroid } from "react-icons/fa";

function ProjectDislack() {
	return (
		<div className="contentsContainer">
			<div className="contentPic">
				<div className="imgBoxText">Click Me!</div>
				<img className="imgBox" src={firstIntro} alt="firstIntro" />
			</div>

			<div className="contentDes">
				<div>
					<span style={{ fontSize: "30px", fontWeight: "bold" }}>diSlack</span>
				</div>
				<div>
					<span style={{ fontSize: "25px", fontWeight: "bold" }}>Team Crong - Team Leader</span>
				</div>

				<div style={{ textAlign: "center", width: "100%" }}>
					<div style={{ marginTop: "3%" }}>
						<FaGithub
							size={30}
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
