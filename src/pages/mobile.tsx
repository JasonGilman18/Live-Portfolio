//@ts-nocheck
import React, { useRef, useState} from "react";
import "../styles/global.css";
import '../styles/mobile/welcome_mobile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/mobile/second_mobile.css';
import { Container, Row, Col } from "react-bootstrap";
import { StyledWelcomeMobile } from '../components/mobile/styledWelcome_mobile';
import { StyledButtonBoxMobile } from '../components/mobile/styledButtonBox_mobile';
import { StyledIconBoxMobile } from '../components/mobile/styledIconBox_mobile';
import { StyledBubbleMobile } from '../components/mobile/styledBubble_mobile';
import { StyledBubbleContentMobile } from '../components/mobile/styledBubbleContent_mobile';
import { ExperienceMobile } from '../components/mobile/experience_mobile';
import { ProjectsMobile } from '../components/mobile/projects_mobile';
import {ReactComponent as Github} from '../icons/github.svg';
import {ReactComponent as Linkedin} from '../icons/linkedin.svg';
import {ReactComponent as Email} from '../icons/email.svg';
import {ReactComponent as Menu} from '../icons/bars-solid.svg';
import {ReactComponent as Close} from '../icons/times-solid.svg';


export const Mobile: React.FunctionComponent = (props) => {

  const [menu, setMenu] = useState(false);
  const home = useRef(null);
  const aboutMe = useRef(null);
  const experience = useRef(null);
  const projects = useRef(null);


  return (
      <div ref={home}>
        <Container fluid className="welcomeContainerMobile">
          <Container className="menuContainerMobile">
            <StyledButtonBoxMobile menu={menu}>
              <Menu className={menu ? "hidden" : "openMenuButtonMobile"} onClick={() => setMenu(true)}/>
              <Close className={menu ? "closeMenuButtonMobile" : "hidden"} onClick={() => setMenu(false)}/>
              <Container fluid className={menu ? "linksMobile" : "linksMobileHidden"}>
                <h5 className="mobileLink" onClick={() => {setMenu(false);home.current.scrollIntoView({ behavior: "smooth" })}}>Home</h5>
                <h5 className="mobileLink" onClick={() => {setMenu(false);aboutMe.current.scrollIntoView({ behavior: "smooth" })}}>About Me</h5>
                <h5 className="mobileLink" onClick={() => {setMenu(false);experience.current.scrollIntoView({ behavior: "smooth" })}}>Experience</h5>
                <h5 className="mobileLink" onClick={() => {setMenu(false);projects.current.scrollIntoView({ behavior: "smooth" })}}>Projects</h5>
              </Container>
            </StyledButtonBoxMobile>
          </Container>
          <Container fluid className={"welcomeBufferMobile " + (menu ? "blurBackground" : "")} onClick={() => setMenu(false)}>
            <StyledWelcomeMobile>
              <Container fluid className="welcomeBoxMobile">
                <h1 className="welcomeHeadingMobile">Welcome</h1>
                <h2 className="welcomeSubHeadingMobile">Jason Gilman's Portfolio</h2>
              </Container>
              <Container fluid className="introBoxMobile">
                <Row>
                  <Col sm={8} xs={8} className="skillsMobile">
                    <h2 className="skillLabelMobile">Software Engineering</h2>
                    <div className="skillDividerMobile"/>
                    <h2 className="skillLabelMobile">Web Development</h2>
                    <div className="skillDividerMobile"/>
                    <h2 className="skillLabelMobile">Project Design</h2>
                    <div className="skillDividerMobile"/>
                    <h2 className="skillLabelMobile">Problem Solving</h2>
                  </Col>
                  <Col sm={4} xs={4} className="iconsMobile">
                    <StyledIconBoxMobile>
                      <a href="https://github.com/JasonGilman18" target="_blank"><Github className="iconMobile"/></a>
                      <a href="https://www.linkedin.com/in/jason-g-918475136/" target="_blank"><Linkedin className="iconMobile"/></a>
                      <a href="mailto:jasongilman18@gmail.com"><Email className="iconMobile"/></a>
                    </StyledIconBoxMobile>
                  </Col>
                </Row>
                <Row className="underlinesMobile">
                  <div className="skillUnderlineMobile one"/>
                  <div className="skillUnderlineMobile two"/>
                  <div className="skillUnderlineMobile three"/>
                </Row>
              </Container>
            </StyledWelcomeMobile>
          </Container>
        </Container>
        <Container fluid className={menu ? "secondContainerMobile blurBackground" : "secondContainerMobile"} onClick={() => setMenu(false)}>
          <div className="stripeMobile firstMobile"/>
          <div className="stripeMobile secondMobile"/>
          <div className="stripeMobile thirdMobile"/>
          <div className="firstBubbleMobile" ref={aboutMe}>
            <StyledBubbleMobile/>
            <StyledBubbleContentMobile header={"About Me"} first={true}>
              <p className="bubbleParagraphMobile">
              My name is Jason Gilman, and I am soon to be a professional software engineer. 
              I will graduate from Texas A&M University in May of 2021, and will be moving to Austin, Tx to begin my career. 
              I am interested in various aspects of software engineering, including SAAS development, frontend and backend design, 
              information storage and retrieval, and artificial intelligence. My stack of choice is a ReactJS frontend with a Flask backend.
              </p>
            </StyledBubbleContentMobile>
          </div>
          <div className="secondBubbleMobile" ref={experience}>
            <StyledBubbleMobile/>
            <StyledBubbleContentMobile header={"Experience"} first={false}> 
              <ExperienceMobile/>
            </StyledBubbleContentMobile>
          </div>
          <div className="thirdBubbleMobile" ref={projects}>
            <StyledBubbleMobile/>
            <StyledBubbleContentMobile header={"Projects"} first={false}>
              <ProjectsMobile/>
            </StyledBubbleContentMobile>
          </div>
        </Container>
      </div>
    );
}