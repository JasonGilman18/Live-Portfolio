//@ts-nocheck
import * as React from "react";
import "../../styles/global.css";
import "../../styles/desktop/linkTable_desktop.css";


type LinkTableProps = {links: Array<string>, refs: Array<React.MutableRefObject<null>>};
export const LinkTable: React.FunctionComponent<LinkTableProps> = ({links, refs}) => {

    function handleScrollToElement(whichElement: number)
    {
        var element = refs[whichElement].current;
        if(element != null)
            element.scrollIntoView({behavior: 'smooth'});
    }

    return (
    <table className="linkTable">
        <tbody>
            <tr>
                <td className="linkTableTopLeft"><h5 onClick={() => handleScrollToElement(0)}>{links[0]}</h5></td>
                <td><h5 onClick={() => handleScrollToElement(1)}>{links[1]}</h5></td>
            </tr>
            <tr>
                <td><h5 onClick={() => handleScrollToElement(2)}>{links[2]}</h5></td>
                <td className="linkTableBottomRight"><h5 onClick={() => handleScrollToElement(3)}>{links[3]}</h5></td>
            </tr>
        </tbody>
    </table>
    );
};