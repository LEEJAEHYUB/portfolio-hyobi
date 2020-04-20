import React from "react";
import { Row, Col } from "antd";

import { FiCalendar } from "react-icons/fi";
import { TiSpannerOutline } from "react-icons/ti";
import { GoNote } from "react-icons/go";

import intro from "../../images/ProjectSerendipity/intro.gif";
import architecture from "../../images/ProjectSerendipity/architecture.png";
import cardSwipe from "../../images/ProjectSerendipity/cardSwipe.gif";
import fullstack from "../../images/ProjectSerendipity/fullstack.png";
import matching from "../../images/ProjectSerendipity/matching.gif";
import signupBasic from "../../images/ProjectSerendipity/signupBasic.gif";
import signupMap from "../../images/ProjectSerendipity/signupMap.gif";

import "./ProjectModal.css";

function ProjectSerendipityModal() {
	return (
		<div className="project-detail-container">
			<Row gutter={[8, 16]}>
				<Col span={4} />
				<Col span={16}>
					<div className="project-detail-title">Serendipity - eat, pray, love</div>
				</Col>
				<Col span={4} />
			</Row>

			<Row>
				<Col className="projectCard" span={12}>
					<div className="projectContent">
						<Col span={6}>
							<img className="img" src={intro} alt="intro" />
						</Col>
						<Col span={16} className="description">
							<div>📅 01/2020 ~ 02/2020 (4weeks)</div>
							<div>🔧 Front-End </div>
							<div>✔ 직장인들을 위한 만남 주선 어플</div>
							<div className="descriptionP">
								◼︎ 그래서 만들어 봤어요 <br />
								- 주변 유저 찾기를 5km로 정해서 가까운 사람을 쉽게 만날 수 있게 했어요
								<br />
								- 회사 전용 이메일 인증을 통해 직장인 인증을 가능하게 했어요
								<br />
								- 내 회사 근처의 직장인 인증을 통해 안정성을 높였어요.
								<br />
								◼︎ [ 맘에 들면 오른쪽, 맘에 들지 않으면 왼쪽으로 스와이프! ] <br />
								- 오른쪽 스와이프 —> LIKE / 왼쪽 스와이프 —> NOPE
								<br />
							</div>
						</Col>
					</div>
				</Col>

				<Col className="projectCard" span={12}>
					<div className="projectContent">
						<Col span={14}>
							<img className="img" src={fullstack} alt="fullstack" />
						</Col>
						<Col span={10} className="description">
							<div>⚡Stacks</div>
							<div className="descriptionP">
								◼︎ Front-End <br />
								React-Native / React-Hooks / <br />
								MobX / Apollo-Client / <br />
								◼︎ Back-End <br />
								GraphQL / Prisma / <br />
								Heroku / PostgreSQL / <br />
							</div>
						</Col>
					</div>
				</Col>
			</Row>

			<Row className="myTask">My Task</Row>

			<Row>
				<Col className="projectCard" span={12}>
					<div className="projectContent">
						<Col span={6}>
							<img className="img" src={cardSwipe} alt="cardSwipe" />
						</Col>
						<Col span={16} className="description">
							<div>💁‍♂ 카드 스와이프를 통한 좋아요 표시!</div>
							<div className="descriptionP">
								데이터베이스에서 불러온 유저 데이터들을 <br />
								카드 형식으로 VIEW에 표시했습니다. <br />
								여기서 유저데이터는 로그인한 사용자의 조건에 맞는 유저들입니다. <br />
								오른쪽으로 카드를 넘기면 LIKE!🙋‍♂ <br />
								왼쪽으로 카드를 넘기면 NOPE!🙅‍♂ <br />
								NOPE이 된 유저는 더이상 내 카드에 나타나지 않아요 🤷‍♂ <br />
							</div>
						</Col>
					</div>
				</Col>

				<Col className="projectCard" span={12}>
					<div className="projectContent">
						<Col span={6}>
							<img className="img" src={matching} alt="matching" />
						</Col>
						<Col span={16} className="description">
							<div>💑 서로 좋아요가 되면 채팅방이 열려요!</div>
							<div className="descriptionP">
								나도 좋아요 && 상대방도 좋아요 <br />
								채팅방이 열립니다! 💬 <br />
								서로 대화를 통해서 약속을 잡을 수 있어요 <br />
								이 사람과 채팅이 더 하기 싫다면 꾹 눌러서 채팅방을 나갈 수 있어요! 👋 <br />
								범죄가 의심되거나, 비매너 유저라면 신고할 수 있는 기능도 있습니다 🚔 <br />
							</div>
						</Col>
					</div>
				</Col>
			</Row>

			<Row>
				<Col className="projectCard" span={12}>
					<div className="projectContent">
						<Col span={6}>
							<img className="img" src={signupBasic} alt="signupBasic" />
						</Col>
						<Col span={16} className="description">
							<div>✅ 회원가입 - 사용자의 기본정보를 기록!</div>
							<div className="descriptionP">
								이메일주소를 통한 인증! 📨 <br />
								휴대폰문자를 통한 인증! 📱 <br />
								닉네임 등록 및 중복확인! 🤔 <br />
								로그인을 위한 패스워드!🤦‍♂ <br />
								생년월일 입력! 📅 <br />
								정보가 하나라도 빠지면 다음으로 넘어가지 않습니다. ✍ <br />
							</div>
						</Col>
					</div>
				</Col>
				<Col className="projectCard" span={12}>
					<div className="projectContent">
						<Col span={6}>
							<img className="img" src={signupMap} alt="signupMap" />
						</Col>
						<Col span={16} className="description">
							<div>🗺 회원가입 - 사용자의 위치정보 및 관심사!</div>
							<div className="descriptionP">
								자신의 회사 위치를 직접 등록! <br />
								회사명, 회사에서 맡은 역할 등 기본 정보를 입력! <br />
								자신과 관심사가 비슷한 상대를 만나기 위한 관심사 태그 등록! <br />
							</div>
						</Col>
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default ProjectSerendipityModal;
