//@ts-nocheck
import React, { useState, useEffect } from "react";
import "../../styles/global.css";
import "../../styles/desktop/experience_desktop.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";


export const ExperienceDesktop: React.FunctionComponent = (props) => {

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
        <Container fluid className="timelineContainerExp">
            <Row>
                <Col className="timelineColExp" xl={2} lg={2} md={2} sm={2} xs={2}>
                    <div onClick={() => handleIntervalChange(0)} className={"timelineBubbleExp " + (active==0 ? "activeExp" : "")}/>
                    <div onClick={() => handleIntervalChange(1)} className={"timelineBubbleExp " + (active==1 ? "activeExp" : "")}/>
                    <div onClick={() => handleIntervalChange(2)} className={"timelineBubbleExp " + (active==2 ? "activeExp" : "")}/>
                    <div onClick={() => handleIntervalChange(3)} className={"timelineBubbleExp " + (active==3 ? "activeExp" : "")}/>
                </Col>
                <Col xl={10} lg={10} md={10} sm={10} xs={10}>
                    <dl className={active==0 ? "" : "hidden"}>
                        <dt className="dtDesktop">Dell Technologies, Software Engineering Intern</dt>
                        <dd className="ddDesktop">- Utilized A.I. and Machine Learning tools to develop a chatbot for an externally facing website</dd>
                        <dd className="ddDesktop">- Developed a RESTful middleware service and hosted on Pivotal Cloud Foundry</dd>
                        <dd className="ddDesktop">- Designed a chatbot U.I. using HTML, CSS, and Adobe Experience Manager</dd>
                    </dl>
                    <dl className={active==1 ? "" : "hidden"}>
                        <dt className="dtDesktop">INFIRMware, Research Aide</dt>
                        <dd className="ddDesktop">- Researched and tested various network security exploits in small unmanned aerial systems</dd>
                        <dd className="ddDesktop">- Received experience in using various cybersecurity software tools</dd>
                        <dd className="ddDesktop">- Worked in unison with a government contracted company</dd>
                    </dl>
                    <dl className={active==2 ? "" : "hidden"}>
                        <dt className="dtDesktop">TAMUmake Hackathon, Director</dt>
                        <dd className="ddDesktop">- Led the development of a 24 hour engineering hackathon event</dd>
                        <dd className="ddDesktop">- Managed a committee of 10+ members</dd>
                        <dd className="ddDesktop">- Held local corporate committee position from 9/2018-5/2019</dd>
                    </dl>
                    <dl className={active==3 ? "" : "hidden"}>
                        <dt className="dtDesktop">IEEE, Texas A&M Chapter, Officer</dt>
                        <dd className="ddDesktop">- Organized extracurricular workshops to teach various industry skills</dd>
                        <dd className="ddDesktop">- Developed professional soft skills while working with various corporations</dd>
                    </dl>
                </Col>
            </Row>
        </Container>
    </>
};