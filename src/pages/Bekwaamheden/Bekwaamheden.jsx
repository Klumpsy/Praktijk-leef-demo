import React from 'react';
import "./bekwaamheden.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { opleidingen } from "../../components/opleidingen";

import { FaGraduationCap } from "react-icons/fa";

const Bekwaamheden = () => {
    return (
        <div className="bekwaamheden-page-container">
            <h2>Opleidingen en Trainingen</h2>
            <div className="bekwaamheden-text-container">
                <VerticalTimeline
                    lineColor={"#DECAD5"}
                >
                    {
                        opleidingen.map(opleiding => (
                            <VerticalTimelineElement
                                key={opleiding.opleiding}
                                className="vertical-timeline-element-opleidingen"
                                contentStyle={{ background: '#E3DEDD', color: '#000' }}
                                contentArrowStyle={{ borderRight: '7px solid  #000' }}
                                date={opleiding.date}
                                iconStyle={{ background: '#DECAD5', color: '#000' }}
                                icon={<FaGraduationCap />}
                            >
                                {opleiding.opleiding}
                            </VerticalTimelineElement>
                        ))
                    }
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Bekwaamheden
