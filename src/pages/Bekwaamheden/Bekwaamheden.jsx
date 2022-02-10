import React from 'react';
import "./bekwaamheden.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaGraduationCap } from "react-icons/fa";

const opleidingen = [
    {
        opleiding: "CIOS Heerenveen",
        date: "2003"
    },
    {
        opleiding: "PABO Windesheim Zwolle",
        date: "2007"
    },
    {
        opleiding: "Ben Furman Kids Skills",
        date: "2011"
    },
    {
        opleiding: "Master Special Educational Needs Windesheim",
        date: "2012"
    },
    {
        opleiding: "Positief opvoeden Triple P",
        date: "2013"
    },
    {
        opleiding: "NTI instituutsdiploma Opvoedingsondersteuning",
        date: "2013"
    },
    {
        opleiding: "Rots en Watertrainer Gadaku Instituut",
        date: "2017"
    },
    {
        opleiding: "Expertise dag 'Bewegen, Gedrag en Leren",
        date: "2019"
    },
    {
        opleiding: "Synergos haptonomie haptonoom",
        date: "2019"
    },
    {
        opleiding: "Synergos haptotherapeut in opleiding",
        date: "Afstudeerfase"
    }
]

const Bekwaamheden = () => {
    return (
        <div className="bekwaamheden-page-container">
            <h2>Opleidingen en Trainingen</h2>
            <div className="bekwaamheden-text-container">
                <VerticalTimeline>
                    {
                        opleidingen.map(opleiding => (
                            <VerticalTimelineElement
                                contentStyle={{ background: '#EAFFE9', color: '#000' }}
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
