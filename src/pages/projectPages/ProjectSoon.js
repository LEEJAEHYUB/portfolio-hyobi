import React from "react";

import "../Project.css";

import soon from "../../images/projectIntro/comingsoon.jpg";
import { FaGithub, FaAndroid } from "react-icons/fa";

function ProjectSoon() {
	return (
		<div className="contentsContainer" data-aos="fade-up">
			<div className="contentPic">
				{/* <div className="imgBoxText">Click Me!</div> */}
				<img className="imgBox" src={soon} alt="soon" />
			</div>

			<div className="contentDes">
				<div>
					<span className="content-title">Coming Soon!</span>
				</div>
				<div>
					<span className="content-desc">pomodoro App</span>
				</div>

				<div style={{ textAlign: "center", width: "100%" }}>
					{/* <div style={{ marginTop: "3%" }}>
						<FaGithub
							className="projectIcon"
							size={30}
							onClick={() => {
								window.open("https://github.com/LEEJAEHYUB/Serendipity_client");
							}}
						/>

						<FaAndroid
							className="projectIcon"
							style={{ marginLeft: "3%" }}
							size={30}
							onClick={() => {
								window.open("https://tuney.kr/Av6qFX");
							}}
						/>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default ProjectSoon;
