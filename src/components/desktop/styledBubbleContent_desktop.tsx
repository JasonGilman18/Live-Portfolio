import * as React from "react";
import "../../styles/global.css";
import "../../styles/desktop/styledBubbleContent_desktop.css";
import 'bootstrap/dist/css/bootstrap.min.css';


type StyledBubbleContentProps = {header: string}
export const StyledBubbleContentDesktop: React.FunctionComponent<StyledBubbleContentProps> = (props) => (

        <div className="bubbleBoxHeaderContainer">
            <div className="bubbleBoxHeader">
                  <h1>{props.header}</h1>
            </div>
            <div className="bubbleBox">
                <div className="bubbleBoxContent">
                    {props.children}
                </div>
            </div>
        </div>
);