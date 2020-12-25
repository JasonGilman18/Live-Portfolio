import * as React from "react";
import "../../styles/global.css";
import "../../styles/mobile/styledBubbleContent_mobile.css";
import 'bootstrap/dist/css/bootstrap.min.css';


type StyledBubbleContentProps = {header: string}
export const StyledBubbleContentMobile: React.FunctionComponent<StyledBubbleContentProps> = (props) => (

    <div className="bubbleContentContainerMobile">
        <div className="bubbleBoxHeaderContainerMobile">
            <div className="bubbleBoxHeaderMobile">
                  <h1>{props.header}</h1>
            </div>
            <div className="bubbleBoxMobile">
                {props.children}
            </div>
        </div>
    </div>
);