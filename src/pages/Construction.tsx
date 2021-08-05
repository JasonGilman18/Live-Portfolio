import { CSSProperties, useEffect, useState } from "react";
import "../styles/desktop/Construction.css";

export const Construction = (props: any) => {
    
    const [active, setActive] = useState<number>(0);
    const activeCone: CSSProperties = {
        backgroundColor: "#FFB347",
        height: "5vw",
        width: "5vw",
        border: "none",
        boxShadow: "box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
    };

    useEffect(() => {
        setInterval(() => {
            setActive(active => (active==2 ? 0 : active+1));
        }, 1500);
    }, []);

    return (
        <div className="background">
            <div className="cone" style={active === 0 ? activeCone : undefined}/>
            <div className="cone" style={active === 1 ? activeCone : undefined}/>
            <div className="cone" style={active === 2 ? activeCone : undefined}/>
        </div>
    );
};