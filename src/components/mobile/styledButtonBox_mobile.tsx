import * as React from "react";
import "../../styles/global.css";
import "../../styles/mobile/styledButtonBox_mobile.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

type StyledButtonProps = {};
export const StyledButtonBoxMobile: React.FunctionComponent<StyledButtonProps> = (props) => (

    <Container className="styledButtonBoxLgMobile">
        <Container className="styledButtonBoxMdMobile">
            <Container className="styledButtonBoxSmMobile">
                {props.children}
            </Container>
        </Container>
    </Container>
);