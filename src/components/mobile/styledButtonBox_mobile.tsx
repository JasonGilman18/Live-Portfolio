import * as React from "react";
import "../../styles/global.css";
import "../../styles/mobile/styledButtonBox_mobile.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

type StyledButtonProps = {menu: boolean};
export const StyledButtonBoxMobile: React.FunctionComponent<StyledButtonProps> = (props) => (

    <Container fluid className={"styledButtonBoxLgMobile " + (props.menu ? "styledMenuLg" : "")}>
        <Container fluid className={"styledButtonBoxMdMobile " + (props.menu ? "styledMenuMd" : "")}>
            <Container fluid className={"styledButtonBoxSmMobile " + (props.menu ? "styledMenuSm" : "")}>
                {props.children}
            </Container>
        </Container>
    </Container>
);