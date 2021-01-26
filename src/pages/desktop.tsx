import React, { useRef } from "react";
import "../styles/global.css";
import '../styles/desktop/welcome_desktop.css';
import '../styles/desktop/second_desktop.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import { LinkTable } from '../components/desktop/linkTable_desktop';
import { StyledWelcomeDesktop } from '../components/desktop/styledWelcome_desktop';
import { StyledBubbleDesktop } from '../components/desktop/styledBubble_desktop';
import { StyledBubbleContentDesktop } from '../components/desktop/styledBubbleContent_desktop';
import { ExperienceDesktop } from '../components/desktop/experience_desktop';
import { ProjectsDesktop } from '../components/desktop/projects_desktop';
import {ReactComponent as Github} from '../icons/github.svg';
import {ReactComponent as Linkedin} from '../icons/linkedin.svg';
import {ReactComponent as Email} from '../icons/email.svg';


export const Desktop: React.FunctionComponent = () => {

  const home = useRef(null);
  const aboutMe = useRef(null);
  const experience = useRef(null);
  const projects = useRef(null);

  return (
  <div>
    <Container fluid className="welcomeContainer" ref={home}>
          <Row className="welcomeRow">
            <Col xl={8} lg={9} md={9} sm={9}>
              <StyledWelcomeDesktop main={true}>
                <h1 className="welcomeHeading">Welcome</h1>
                <h2 className="welcomeSubHeading">Jason Gilman's Portfolio</h2>
              </StyledWelcomeDesktop>
            </Col>
            <Col xl={4} lg={3} md={3} sm={3}>
              <Container className="linkBox">
                  <LinkTable links={["Home", "About Me", "Experience", "Projects"]} refs={[home, aboutMe, experience, projects]}></LinkTable>
              </Container>
            </Col>
          </Row>
          <Row className="introRow">
            <Col className="skillSection" xl={8} lg={9} md={9} sm={9}>
              <Container className="skills">
                <h2 className="skillLabel">Software Engineering</h2>
                <div className="skillDivider"/>
                <h2 className="skillLabel">Web Development</h2>
                <div className="skillDivider"/>
                <h2 className="skillLabel">Project Design</h2>
                <div className="skillDivider"/>
                <h2 className="skillLabel">Problem Solving</h2>
              </Container>
              <Container>
                <div className="skillUnderline one"/>
                <div className="skillUnderline two"/>
                <div className="skillUnderline three"/>
              </Container>
            </Col>
            <Col xl={4} lg={3} md={3} sm={3}>
              <StyledWelcomeDesktop main={false}>
                <div className="iconContainer">
                  <a href="https://github.com/JasonGilman18" target="_blank"><Github className="icon"/></a>
                  <a href="https://www.linkedin.com/in/jason-g-918475136/" target="_blank"><Linkedin className="icon"/></a>
                  <a href="mailto:jasongilman18@gmail.com"><Email className="icon"/></a>
                </div>
              </StyledWelcomeDesktop>
            </Col>
          </Row>
        </Container>
        <Container fluid className="secondContainer">
          <div className="stripe first"/>
          <div className="stripe second"/>
          <div className="stripe third"/>
          <div className="firstBubble" ref={aboutMe}>
            <StyledBubbleDesktop/>
            <StyledBubbleContentDesktop header={"About Me"}>
              <p className="bubbleParagraph">
                My name is Jason Gilman, and I am soon to be a professional software engineer. 
                I will graduate from Texas A&M University in May of 2021, and will be moving to Austin, TX to begin my career. 
                I am interested in various aspects of software engineering, including SaaS development, frontend and backend design, 
                information storage and retrieval, and artificial intelligence. My stack of choice is a ReactJS frontend with a Flask backend.
              </p>
            </StyledBubbleContentDesktop>
          </div>
          <div className="secondBubble" ref={experience}>
            <StyledBubbleDesktop/>
            <StyledBubbleContentDesktop header={"Experience"}>
              <ExperienceDesktop/>
            </StyledBubbleContentDesktop>
          </div>
          <div className="thirdBubble" ref={projects}>
            <StyledBubbleDesktop/>
            <StyledBubbleContentDesktop header={"Projects"}>
              <ProjectsDesktop/>
            </StyledBubbleContentDesktop>
          </div>
        </Container>
  </div>
  );
};