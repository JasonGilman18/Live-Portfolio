import * as React from "react";
import "../../styles/global.css";
import "../../styles/mobile/styledIconBox_mobile.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

type StyledIconProps = {};
export const StyledIconBoxMobile: React.FunctionComponent<StyledIconProps> = (props) => (

    <Container fluid className="styledIconBoxLgMobile">
        <Container fluid className="styledIconBoxMdMobile">
            <Container fluid className="styledIconBoxSmMobile">
                {props.children}
            </Container>
        </Container>
    </Container>
);