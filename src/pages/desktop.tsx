import React from "react";
import "../styles/global.css";
import '../styles/desktop/welcome_desktop.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import { LinkTable } from '../components/desktop/linkTable_desktop';
import { StyledWelcomeDesktop } from '../components/desktop/styledWelcome_desktop';
import {ReactComponent as Github} from '../icons/github.svg';
import {ReactComponent as Linkedin} from '../icons/linkedin.svg';
import {ReactComponent as Email} from '../icons/email.svg';


export const Desktop: React.FunctionComponent = () => (

    <Container fluid className="welcomeContainer">
          <Row className="welcomeRow">
            <Col xl={8} lg={8} md={8}>
              <StyledWelcomeDesktop main={true}>
                <h1 className="welcomeHeading">Welcome</h1>
                <h2 className="welcomeSubHeading">Jason Gilman's Portfolio</h2>
              </StyledWelcomeDesktop>
            </Col>
            <Col xl={4} lg={4} md={4}>
              <Container className="linkBox">
                  <LinkTable links={["Link 1", "Link 2", "Link 3", "Link 4"]}></LinkTable>
              </Container>
            </Col>
          </Row>
          <Row className="introRow">
            <Col xl={8} lg={8} md={8}>
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
            <Col xl={4} lg={4} md={4}>
              <StyledWelcomeDesktop main={false}>
                <Github className="icon"/>
                <Linkedin className="icon"/>
                <Email className="icon"/>
              </StyledWelcomeDesktop>
            </Col>
          </Row>
        </Container>
);