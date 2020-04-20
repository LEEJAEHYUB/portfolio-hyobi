import React, { useEffect } from "react";

import "./Project.css";

import IndexProject from "./projectPages/IndexProject";

import * as Scroll from "react-scroll";
let scroll = Scroll.animateScroll; // You can also use <link> for styles

function Project() {
	useEffect(() => {
		scroll.scrollToTop();
	}, []);

	return (
		<div className="project-container">
			<IndexProject />
		</div>
	);
}

export default Project;
