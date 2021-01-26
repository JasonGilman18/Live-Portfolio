//@ts-nocheck
import React, { useState, useEffect } from "react";
import "../../styles/global.css";
import "../../styles/mobile/experience_mobile.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";


export const ExperienceMobile: React.FunctionComponent = (props) => {

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
        <Container fluid className="timelineContainerExpMobile">
            <Row>
                <Col className="timelineColExpMobile" xl={2} lg={2} md={2} sm={2} xs={2}>
                    <div onClick={() => handleIntervalChange(0)} className={"timelineBubbleExpMobile " + (active==0 ? "activeExpMobile" : "")}/>
                    <div onClick={() => handleIntervalChange(1)} className={"timelineBubbleExpMobile " + (active==1 ? "activeExpMobile" : "")}/>
                    <div onClick={() => handleIntervalChange(2)} className={"timelineBubbleExpMobile " + (active==2 ? "activeExpMobile" : "")}/>
                    <div onClick={() => handleIntervalChange(3)} className={"timelineBubbleExpMobile " + (active==3 ? "activeExpMobile" : "")}/>
                </Col>
                <Col xl={10} lg={10} md={10} sm={10} xs={10}>
                    <dl className={active==0 ? "" : "hidden"}>
                        <dt>Dell Technologies, Software Engineering Intern</dt>
                        <dd>- Utilized A.I. and Machine Learning tools to develop a chatbot for an externally facing website</dd>
                        <dd>- Developed a RESTful middleware service and hosted on Pivotal Cloud Foundry</dd>
                        <dd>- Designed a chatbot U.I. using HTML, CSS, and Adobe Experience Manager</dd>
                    </dl>
                    <dl className={active==1 ? "" : "hidden"}>
                        <dt>INFIRMware, Research Aide</dt>
                        <dd>- Researched and tested various network security exploits in small unmanned aerial systems</dd>
                        <dd>- Received experience in using various cybersecurity software tools</dd>
                        <dd>- Worked in unison with a government contracted company</dd>
                    </dl>
                    <dl className={active==2 ? "" : "hidden"}>
                        <dt>TAMUmake Hackathon, Director</dt>
                        <dd>- Led the development of a 24 hour engineering hackathon event</dd>
                        <dd>- Managed a committee of 10+ members</dd>
                        <dd>- Held local corporate committee position from 9/2018-5/2019</dd>
                    </dl>
                    <dl className={active==3 ? "" : "hidden"}>
                        <dt>IEEE, Texas A&M Chapter, Officer</dt>
                        <dd>- Organized extracurricular workshops to teach various industry skills</dd>
                        <dd>- Developed professional soft skills while working with various corporations</dd>
                    </dl>
                </Col>
            </Row>
        </Container>
    </>
};