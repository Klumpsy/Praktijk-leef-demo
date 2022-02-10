import React from 'react'
import "./werkwijze.css"

//Icons
import { SiTheconversation } from "react-icons/si";
import { BiBrain } from "react-icons/bi";
import { FaTheaterMasks } from "react-icons/fa";
import { GiCardExchange, GiChessRook, GiTreeDoor } from "react-icons/gi";


const Werkwijze = () => {
    return (
        <div className="werkwijze-page-container">
            <h2>Aanmelding</h2>
            <div className="werkwijze-text-container">
                Het eerste contact wat met mij gezocht wordt kan telefonisch,
                via de Whats-App of de mail.
                In het eerste contact bepalen we samen wat de beste keuze is voor de vervolgstappen:
                intakegesprek of eerste sessie. De behandeldoelen stellen we naar aanleiding van het
                eerste contact op.
                <br /><br />
                <h3>Sessies</h3>
                Naar aanleiding van de hulpvraag bekijk ik hoe de sessie het meest effectief
                vormgegeven kan worden. In een sessie beginnen we altijd met een gesprek,
                over hoe het op dat moment met je is.
                Vervolgens wordt er een werkvorm passend bij de hulpvraag ingezet.
                Hierbij kan je denken aan de volgende werkvormen:
                <br /><br />
                <ul>
                    <li>
                        <SiTheconversation style={{ marginRight: "8px", color: "#B6E0B2" }} />
                        Oplossingsgerichte gesprekken
                    </li>
                    <li>
                        <GiTreeDoor style={{ marginRight: "8px", color: "#DECAD5" }} />
                        Fysieke oefeningen zoals ademhalingsoefeningen, stevig staan, grenzen aangeven
                    </li>
                    <li>
                        <BiBrain style={{ marginRight: "8px", color: "#F0C1C1" }} />
                        Creatieve werkvormen
                    </li>
                    <li>
                        <FaTheaterMasks style={{ marginRight: "8px", color: "#F0E6C1" }} />
                        Rollenspel
                    </li>
                    <li>
                        <GiCardExchange style={{ marginRight: "8px", color: "#C9D9E9" }} />
                        Coachkaarten, (helpende gedachten, kinderkwaliteitenspel)
                    </li>
                    <li>
                        <GiChessRook style={{ marginRight: "8px", color: "#C9E9DD" }} />
                        Verschillende spellen
                    </li>
                </ul>
                <br /><br />
                Na elke sessie bespreken we wat je meeneemt en mee hebt genomen van de voorgaande sessie(s).
                Na een aantal sessies wordt er een evaluatiemoment ingelast.
                Dan kunnen we eventuele gestelde doelen bijstellen of nieuwe doelen toevoegen.
                Tevens bekijken we hoe het gaat en of we de begeleiding afbouwen of moeten intensiveren.
                Een sessie duurt 45 - 60 minuten.
                Tussen de sessies door is er altijd een mogelijkheid tot contact via de mail of telefoon.
            </div>
        </div>
    )
}

export default Werkwijze
