import React from "react";
import "../styles/global.css";
import '../styles/mobile/welcome_mobile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import { StyledWelcomeMobile } from '../components/mobile/styledWelcome_mobile';
import { StyledButtonBoxMobile } from '../components/mobile/styledButtonBox_mobile';
import { StyledIconBoxMobile } from '../components/mobile/styledIconBox_mobile';
import {ReactComponent as Github} from '../icons/github.svg';
import {ReactComponent as Linkedin} from '../icons/linkedin.svg';
import {ReactComponent as Email} from '../icons/email.svg';
import {ReactComponent as Caret} from '../icons/caret-down-solid.svg';


export const Mobile: React.FunctionComponent = () => (

    <Container fluid className="welcomeContainerMobile">
      <Container className="menuContainerMobile">
        <StyledButtonBoxMobile>
          <Caret className="menuButtonMobile"/>
        </StyledButtonBoxMobile>
      </Container>
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
                  <Github className="iconMobile"/>
                  <Linkedin className="iconMobile"/>
                  <Email className="iconMobile"/>
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
);