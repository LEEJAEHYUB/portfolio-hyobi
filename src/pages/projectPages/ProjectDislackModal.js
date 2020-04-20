import React from "react";

import { Row, Col } from "antd";

import intro from "../../images/ProjectDislack/intro.gif";
import final_stack from "../../images/ProjectDislack/final_stack.png";
import sideBar from "../../images/ProjectDislack/sideBar.png";
import search from "../../images/ProjectDislack/search.gif";
import chat from "../../images/ProjectDislack/chat.gif";
import thread from "../../images/ProjectDislack/thread.gif";

import "./ProjectDislackModal.css";

function ProjectDislackModal() {
	return (
		<div className="project-detail-container">
			<Row gutter={[8, 16]}>
				<Col span={4} />
				<Col span={16}>
					<div style={{ fontSize: "50px", textAlign: "center" }}>diSlack</div>
				</Col>
				<Col span={4} />
			</Row>

			<Row>
				<Col className="projectCard" span={12}>
					<div className="projectContent">
						<Col span={14}>
							<img className="img" src={intro} alt="intro" />
						</Col>
						<Col span={10} className="description">
							<div>📅 01/2020 ~ 01/2020 (2weeks)</div>
							<div>🔧 Front-End </div>
							<div>
								✔ IT업계에서 핫핫 메신저인 `SLACK`을 <br />
								클로닝해보았습니다!
							</div>
							<div className="descriptionP">
								◼︎ 워크스페이스 생성 및 초대 <br />
								◼︎ 해당 워크스페이스에서 채널 등록 <br />
								◼︎ 해당 워크스페이스에 있는 유저에게 DM보내기 <br />
								◼︎ 채널 및 DM에서 채팅이나 게시글 남기기 <br />
								◼︎ 게시글에 댓글 남기기 <br />
							</div>
						</Col>
					</div>
				</Col>

				<Col className="projectCard" span={12}>
					<div className="projectContent">
						<Col span={14}>
							<img className="img" src={final_stack} alt="final_stack" />
						</Col>
						<Col span={10} className="description">
							<div>⚡Stacks</div>
							<div className="descriptionP">
								◼︎ Front-End <br />
								React / <br />
								◼︎ Back-End <br />
								Nodejs / ExpressJS / MySQL /<br />
							</div>
						</Col>
					</div>
				</Col>
			</Row>

			<Row className="myTask">My Task</Row>

			<Row>
				<Col className="projectCard" span={12}>
					<div className="projectContent">
						<Col span={14}>
							<img className="img" src={sideBar} alt="sideBar" />
						</Col>
						<Col span={10} className="description">
							<div>💁‍♂ 채널 로그인 SideBAR 구현</div>
							<div className="descriptionP">
								- MyStatus에서 LogOut 기능 구현 <br />
								- Channel메뉴에서 channel 생성, 해당 channel에 접근 <br />
								- 워크스페이스 내의 유저에게 DirectMessage보내기 가능
								<br />
							</div>
						</Col>
					</div>
				</Col>

				<Col className="projectCard" span={12}>
					<div className="projectContent">
						<Col span={14}>
							<img className="img" src={search} alt="search" />
						</Col>
						<Col span={10} className="description">
							<div>💁‍♂ Global Navigation Bar 구현</div>
							<div className="descriptionP">
								- 어느 유저로 로그인 해도 같은 기능인 상단바 구현 <br />
								- 키워드로 검색 기능 <br />
								- 현재 채널 확인 <br />
								- 현재 채널에 있는 유저 인원 확인 <br />
							</div>
						</Col>
					</div>
				</Col>
			</Row>

			<Row>
				<Col className="projectCard" span={12}>
					<div className="projectContent">
						<Col span={14}>
							<img className="img" src={chat} alt="chat" />
						</Col>
						<Col span={10} className="description">
							<div>💁‍♂ 워크스페이스 내의 유저에게 DirectMessage 보내기</div>
							<div className="descriptionP">
								- 워크스페이스 내의 유저에게 DM을 보낼수 있다 <br />
								- 이미 존재하는 유저에게는 다시 생성이 되지 않고, <br />
								- SideBar에서 확인하면 된다 <br />
							</div>
						</Col>
					</div>
				</Col>
				<Col className="projectCard" span={12}>
					<div className="projectContent">
						<Col span={14}>
							<img className="img" src={thread} alt="thread" />
						</Col>
						<Col span={10} className="description">
							<div>💁‍♂ Thread 기능 구현</div>
							<div className="descriptionP">
								- 쓰레드 창에서 해당 채널 정보 확인 <br />
								- 채널에 있는 유저 정보 확인 <br />
								- 해당 유저의 프로필을 클릭하면 쓰레드창으로 정보 확인 가능 <br />
								- 해당 쓰레드에서 DM 전송 가능 <br />
							</div>
						</Col>
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default ProjectDislackModal;
