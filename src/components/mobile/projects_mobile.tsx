//@ts-nocheck
import React, { useState, useEffect } from "react";
import "../../styles/global.css";
import "../../styles/mobile/projects_mobile.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ReactComponent as Github} from '../../icons/github.svg';
import { Container, Row, Col } from "react-bootstrap";


export const ProjectsMobile: React.FunctionComponent = (props) => {

    const [active, setActive] = useState(0);
    const [intervalVal, setIntervalVal] = useState();
    const [timeoutId, setTimeoutId] = useState();
    const [timeoutInit, setTimeoutInit] = useState(false);
    
    useEffect(() => {
        
        startInterval();
    }, []);

    const handleIntervalChange = (index: number) => {

        setActive(index);
        clearInterval(intervalVal);
        if(timeoutInit)
            clearTimeout(timeoutId);
        
        setTimeoutInit(true);
        const timeout = setTimeout(() => {startInterval();setTimeoutInit(false);}, 10000);
        setTimeoutId(timeout);
    }

    const startInterval = () => {

        
        const interval = setInterval(() => {

            setActive((active) => (active==3 ? 0 : active+1));

        }, 3000);
        setIntervalVal(interval);
    }

    return <>
        <Container fluid className="timelineContainerProMobile">
            <Row>
                <Col className="timelineColProMobile" xl={2} lg={2} md={2} sm={2} xs={2}>
                    <div onClick={() => handleIntervalChange(0)} className={"timelineBubbleProMobile " + (active==0 ? "activeProMobile" : "")}/>
                    <div onClick={() => handleIntervalChange(1)} className={"timelineBubbleProMobile " + (active==1 ? "activeProMobile" : "")}/>
                    <div onClick={() => handleIntervalChange(2)} className={"timelineBubbleProMobile " + (active==2 ? "activeProMobile" : "")}/>
                    <div onClick={() => handleIntervalChange(3)} className={"timelineBubbleProMobile " + (active==3 ? "activeProMobile" : "")}/>
                </Col>
                <Col xl={10} lg={10} md={10} sm={10} xs={10}>
                    <dl className={active==0 ? "" : "hidden"}>
                        <dt>
                            <Container fluid className="noMarginsMobile">
                                <Col className="noMarginsMobile" xl={9} lg={9} md={9} sm={9} xs={9}>
                                    Aerial Pathfinding Reconnaissance System
                                </Col>
                                <Col className="noMarginsMobile projectIconColMobile"xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <a className="projectLinkMobile" href="https://github.com/JasonGilman18/Aerial-Pathfinding-Reconnaissance-System" target="_blank"><Github className="projectIconMobile"/></a>
                                </Col>
                            </Container>
                        </dt>
                        <dd>- A fully encapsulated system to map an area and provide navigation instructions to autonomous vehicles</dd>
                        <dd>- A desktop application was developed using Typescript, ElectronJS, ReactJS, Leaflet, and node-Wifi, with a Python backend</dd>
                    </dl>
                    <dl className={active==1 ? "" : "hidden"}>
                        <dt>
                            <Container fluid className="noMarginsMobile">
                                <Col className="noMarginsMobile" xl={9} lg={9} md={9} sm={9} xs={9}>
                                    Spotify Mood Search
                                </Col>
                                <Col className="noMarginsMobile projectIconColMobile"xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <a className="projectLinkMobile" href="https://github.com/JasonGilman18/Spotify-Mood-Search" target="_blank"><Github className="projectIconMobile"/></a>
                                </Col>
                            </Container>
                        </dt>                        
                        <dd>- A web application to rank a dataset of songs, artists, and albums based on the user's mood</dd>
                        <dd>- The frontend of the application was developed using ReactJS and Typescript, while python was used for the backend</dd>
                    </dl>
                    <dl className={active==2 ? "" : "hidden"}>
                        <dt>
                            <Container fluid className="noMarginsMobile">
                                <Col className="noMarginsMobile" xl={9} lg={9} md={9} sm={9} xs={9}>
                                    Human Trafficking Synopsis
                                </Col>
                                <Col className="noMarginsMobile projectIconColMobile"xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <a className="projectLinkMobile" href="https://github.com/JasonGilman18/Human-Trafficking-Synopsis" target="_blank"><Github className="projectIconMobile"/></a>
                                </Col>
                            </Container>
                        </dt>                        
                        <dd>- A desktop application to visualize a database consisting of human trafficking crime records in the United States</dd>
                        <dd>- ReactJS and Typescript were used in designing the frontend and event handling, while Leaflet and GraphJS were used to visualize data</dd>
                    </dl>
                    <dl className={active==3 ? "" : "hidden"}>
                        <dt>
                            <Container fluid className="noMarginsMobile">
                                <Col className="noMarginsMobile" xl={9} lg={9} md={9} sm={9} xs={9}>
                                    Live Portfolio
                                </Col>
                                <Col className="noMarginsMobile projectIconColMobile"xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <a className="projectLinkMobile" href="https://github.com/JasonGilman18/Live-Portfolio" target="_blank"><Github className="projectIconMobile"/></a>
                                </Col>
                            </Container>
                        </dt>                        
                        <dd>- This is the site you are currently on</dd>
                        <dd>- Developed using ReactJS and Typescript</dd>
                    </dl>
                </Col>
            </Row>
        </Container>
    </>
};