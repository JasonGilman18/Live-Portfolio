import * as React from "react";
import "../../styles/global.css";
import "../../styles/desktop/styledBubble_desktop.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";


export const StyledBubbleDesktop: React.FunctionComponent = (props) => (
    <div className="centerBubble">
        <div className="outsideBubble">
            <div className="middleBubble">
                <div className="insideBubble">

                </div>
            </div>
        </div>
    </div>
);