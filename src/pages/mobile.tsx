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
import {ReactComponent as Menu} from '../icons/bars-solid.svg';
import {ReactComponent as Close} from '../icons/times-solid.svg';


type MobileProps = {};
type MobileStates = {menu: boolean};
class Mobile extends React.Component<MobileProps, MobileStates>
{
  constructor(props: any)
  {
    super(props);

    this.state = {menu: false};

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu()
  {
    this.setState({menu: true});
  }

  closeMenu()
  {
    this.setState({menu: false});
  }

  render()
  {
    return (

      <Container fluid className="welcomeContainerMobile">
        <Container className="menuContainerMobile">
          <StyledButtonBoxMobile menu={this.state.menu}>
            <Menu className={this.state.menu ? "hidden" : "openMenuButtonMobile"} onClick={this.openMenu}/>
            <Close className={this.state.menu ? "closeMenuButtonMobile" : "hidden"} onClick={this.closeMenu}/>
            <Container fluid className={this.state.menu ? "linksMobile" : "linksMobileHidden"}>
              <h5 className="mobileLink">Link 1</h5>
              <h5 className="mobileLink">Link 2</h5>
              <h5 className="mobileLink">Link 3</h5>
              <h5 className="mobileLink">Link 4</h5>
            </Container>
          </StyledButtonBoxMobile>
        </Container>
        <Container fluid className={"welcomeBufferMobile " + (this.state.menu ? "blurBackground" : "")}>
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
    );
  }
}

export default Mobile;