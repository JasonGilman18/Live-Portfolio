import React from "react";
import "../styles/global.css";
import '../styles/welcome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import { LinkTable } from '../components/linkTable';
import { StyledWelcome } from '../components/styledWelcome';
import {ReactComponent as Github} from '../icons/github.svg';
import {ReactComponent as Linkedin} from '../icons/linkedin.svg';
import {ReactComponent as Email} from '../icons/email.svg';


class IndexPage extends React.Component
{
    constructor(props: any)
    {
      super(props);
    }

    render()
    {
      return(

        <Container fluid className="welcomeContainer">
          <Row className="welcomeRow">
            <Col xl={8} lg={8} md={8}>
              <StyledWelcome main={true}>
                <h1 className="welcomeHeading">Welcome</h1>
                <h2 className="welcomeSubHeading">Jason Gilman's Portfolio</h2>
              </StyledWelcome>
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
              <StyledWelcome main={false}>
                <Github className="icon"/>
                <Linkedin className="icon"/>
                <Email className="icon"/>
              </StyledWelcome>
            </Col>
          </Row>
        </Container>
      );
    }
}

export default IndexPage
