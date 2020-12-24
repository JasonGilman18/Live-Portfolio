import * as React from "react";
import "../../styles/global.css";
import "../../styles/desktop/styledBubbleContent_desktop.css";
import 'bootstrap/dist/css/bootstrap.min.css';


type StyledBubbleContentProps = {header: string}
export const StyledBubbleContentDesktop: React.FunctionComponent<StyledBubbleContentProps> = (props) => (

    <div className="bubbleContentContainer">
        <div className="firstBubbleBoxHeaderContainer">
            <div className="firstBubbleBoxHeader">
                  <h1>{props.header}</h1>
            </div>
            <div className="firstBubbleBox">
                {props.children}
            </div>
        </div>
    </div>
);