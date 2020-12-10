import * as React from "react";
import "../styles/global.css";
import "../styles/linkTable.css";


type LinkTableProps = {links: Array<string>};
export const LinkTable: React.FunctionComponent<LinkTableProps> = ({links}) => (

    <table className="linkTable">
        <tbody>
            <tr>
                <td className="linkTableTopLeft"><h5>{links[0]}</h5></td>
                <td><h5>{links[1]}</h5></td>
            </tr>
            <tr>
                <td><h5>{links[2]}</h5></td>
                <td className="linkTableBottomRight"><h5>{links[3]}</h5></td>
            </tr>
        </tbody>
    </table>
);