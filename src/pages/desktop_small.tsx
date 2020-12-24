import React from "react";
import "../styles/global.css";
import '../styles/desktop/welcome_desktop.css';
import '../styles/desktop/second_desktop.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import { LinkTable } from '../components/desktop/linkTable_desktop';
import { StyledWelcomeDesktop } from '../components/desktop/styledWelcome_desktop';
import { StyledBubbleDesktop } from '../components/desktop/styledBubble_desktop';
import { StyledBubbleContentDesktop } from '../components/desktop/styledBubbleContent_desktop';
import {ReactComponent as Github} from '../icons/github.svg';
import {ReactComponent as Linkedin} from '../icons/linkedin.svg';
import {ReactComponent as Email} from '../icons/email.svg';


export const DesktopSmall: React.FunctionComponent = () => (

  <div>
    <Container fluid className="welcomeContainer">
          <Row className="welcomeRow">
            <Col md={12} sm={12}>
              <StyledWelcomeDesktop main={true}>
                <h1 className="welcomeHeading">Welcome</h1>
                <h2 className="welcomeSubHeading">Jason Gilman's Portfolio</h2>
              </StyledWelcomeDesktop>
            </Col>
          </Row>
          <Row className="linkRow">
            <Col md={8} sm={8}>
              <StyledWelcomeDesktop main={false}>
                <a href="https://github.com/JasonGilman18" target="_blank"><Github className="icon"/></a>
                <a href="https://www.linkedin.com/in/jason-g-918475136/" target="_blank"><Linkedin className="icon"/></a>
                <a href="mailto:jasongilman18@gmail.com"><Email className="icon"/></a>
              </StyledWelcomeDesktop>
            </Col>
            <Col md={4} sm={4}>
              <Container className="linkBox">
                  <LinkTable links={["Link 1", "Link 2", "Link 3", "Link 4"]}></LinkTable>
              </Container>
            </Col>
          </Row>
          <Row className="introRow">  
            <Col md={12} sm={12}>
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
          </Row>
        </Container>
        <Container fluid className="secondContainer">
          <div className="stripe first"/>
          <div className="stripe second"/>
          <div className="stripe third"/>
          <div className="firstBubble">
            <StyledBubbleDesktop/>
            <StyledBubbleContentDesktop header={"About Me"}>

            </StyledBubbleContentDesktop>
          </div>
        </Container>
  </div>
);