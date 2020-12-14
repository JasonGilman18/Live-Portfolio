import * as React from "react";
import "../../styles/global.css";
import "../../styles/mobile/styledIconBox_mobile.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

type StyledIconProps = {};
export const StyledIconBoxMobile: React.FunctionComponent<StyledIconProps> = (props) => (

    <Container className="styledIconBoxLgMobile">
        <Container className="styledIconBoxMdMobile">
            <Container className="styledIconBoxSmMobile">
                {props.children}
            </Container>
        </Container>
    </Container>
);