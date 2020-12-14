import * as React from "react";
import "../../styles/global.css";
import "../../styles/mobile/styledWelcome_mobile.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

type StyledWelcomeProps = {};
export const StyledWelcomeMobile: React.FunctionComponent<StyledWelcomeProps> = (props) => (

    <Container fluid className="welcomeBoxLgMobile">
        <Container fluid className="welcomeBoxMdMobile">
            <Container fluid className="welcomeBoxSmMobile">
                {props.children}
            </Container>
        </Container>
    </Container>
);