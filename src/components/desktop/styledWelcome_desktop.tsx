import * as React from "react";
import "../../styles/global.css";
import "../../styles/desktop/styledWelcome_desktop.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";


type StyledWelcomeProps = {main: boolean}
export const StyledWelcomeDesktop: React.FunctionComponent<StyledWelcomeProps> = (props) => (

    <Container fluid className={"welcomeBoxLg " + (props.main ? "main" : "sub")}>
        <Container fluid className={"welcomeBoxMd " + (props.main ? "main" : "sub")}>
            <Container fluid className={"welcomeBoxSm " + (props.main ? "main" : "sub")}>
                {props.children}
            </Container>
        </Container>
    </Container>
);