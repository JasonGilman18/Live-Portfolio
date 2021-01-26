//@ts-nocheck
import React, { useState, useEffect } from "react";
import "../../styles/global.css";
import "../../styles/desktop/projects_desktop.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ReactComponent as Github} from '../../icons/github.svg';
import { Container, Row, Col } from "react-bootstrap";


export const ProjectsDesktop: React.FunctionComponent = (props) => {

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
        <Container fluid className="timelineContainerPro">
            <Row>
                <Col className="timelineColPro" xl={2} lg={2} md={2} sm={2} xs={2}>
                    <div onClick={() => handleIntervalChange(0)} className={"timelineBubblePro " + (active==0 ? "activePro" : "")}/>
                    <div onClick={() => handleIntervalChange(1)} className={"timelineBubblePro " + (active==1 ? "activePro" : "")}/>
                    <div onClick={() => handleIntervalChange(2)} className={"timelineBubblePro " + (active==2 ? "activePro" : "")}/>
                    <div onClick={() => handleIntervalChange(3)} className={"timelineBubblePro " + (active==3 ? "activePro" : "")}/>
                </Col>
                <Col xl={10} lg={10} md={10} sm={10} xs={10}>
                    <dl className={active==0 ? "" : "hidden"}>
                        <dt className="dtDesktop">
                            <Container fluid className="noMargins">
                                <Col className="noMargins" xl={9} lg={9} md={9} sm={9} xs={9}>
                                    Aerial Pathfinding Reconnaissance System
                                </Col>
                                <Col className="noMargins projectIconCol"xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <a className="projectLink" href="https://github.com/JasonGilman18/Aerial-Pathfinding-Reconnaissance-System" target="_blank"><Github className="projectIcon"/></a>
                                </Col>
                            </Container>
                        </dt>
                        <dd className="ddDesktop">- A fully encapsulated system to map an area and provide navigation instructions to autonomous vehicles</dd>
                        <dd className="ddDesktop">- I designed the network architecture of the system, and created a desktop application to serve as the controller and central network node of the system</dd>
                        <dd className="ddDesktop">- The desktop application was developed using Typescript, ElectronJS, ReactJS, Leaflet, and node-Wifi, with a Python backend</dd>
                    </dl>
                    <dl className={active==1 ? "" : "hidden"}>
                        <dt className="dtDesktop">
                            <Container fluid className="noMargins">
                                <Col className="noMargins" xl={9} lg={9} md={9} sm={9} xs={9}>
                                    Spotify Mood Search
                                </Col>
                                <Col className="noMargins projectIconCol"xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <a className="projectLink" href="https://github.com/JasonGilman18/Spotify-Mood-Search" target="_blank"><Github className="projectIcon"/></a>
                                </Col>
                            </Container>
                        </dt>                        
                        <dd className="ddDesktop">- A web application to rank a dataset of songs, artists, and albums based on the user's mood</dd>
                        <dd className="ddDesktop">- The frontend of the application was developed using ReactJS and Typescript</dd>
                        <dd className="ddDesktop">- The backend and ranking algorithms of the application were developed using Python Flask</dd>
                    </dl>
                    <dl className={active==2 ? "" : "hidden"}>
                        <dt className="dtDesktop">
                            <Container fluid className="noMargins">
                                <Col className="noMargins" xl={9} lg={9} md={9} sm={9} xs={9}>
                                    Human Trafficking Synopsis
                                </Col>
                                <Col className="noMargins projectIconCol"xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <a className="projectLink" href="https://github.com/JasonGilman18/Human-Trafficking-Synopsis" target="_blank"><Github className="projectIcon"/></a>
                                </Col>
                            </Container>
                        </dt>                        
                        <dd className="ddDesktop">- A desktop application to visualize a database consisting of human trafficking crime records in the United States</dd>
                        <dd className="ddDesktop">- ReactJS and Typescript were used in designing the frontend and event handling, while Leaflet and GraphJS were used to visualize data</dd>
                        <dd className="ddDesktop">- The backend of the application consisted of an SQLite database</dd>
                    </dl>
                    <dl className={active==3 ? "" : "hidden"}>
                        <dt className="dtDesktop">
                            <Container fluid className="noMargins">
                                <Col className="noMargins" xl={9} lg={9} md={9} sm={9} xs={9}>
                                    Live Portfolio
                                </Col>
                                <Col className="noMargins projectIconCol"xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <a className="projectLink" href="https://github.com/JasonGilman18/Live-Portfolio" target="_blank"><Github className="projectIcon"/></a>
                                </Col>
                            </Container>
                        </dt>                        
                        <dd className="ddDesktop">- This is the site you are currently on</dd>
                        <dd className="ddDesktop">- Developed using ReactJS and Typescript</dd>
                    </dl>
                </Col>
            </Row>
        </Container>
    </>
};