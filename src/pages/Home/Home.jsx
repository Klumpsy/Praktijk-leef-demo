import React from 'react';
import "./home.css";

import profilePicture from "../../media/images/foto-rianne-new.jpg";
import happyPicture from "../../media/images/happy.jpg";

const Home = () => {
    return (
        <div className="about-page-container">
            <div className="header-image">
                <img src={happyPicture} />
            </div>
            <header className="about-page-header">
                <div className="profile-picture-container">
                    <img className="profile-picture" src={profilePicture} />
                </div>
                <q className="about-page-header-quote">
                    Gelukkig zijn! Dat wil toch iedereen!
                </q>
            </header>
            <main>
                <p>
                    Mijn naam is Rianne Jurgens-Veldsink. Ik ben getrouwd en moeder van vier prachtige kinderen.
                    <br /><br />
                    Van jongs af aan weet ik dat ik het fijn vind om met mensen te werken.
                    Het is begonnen met het geven van zwemlessen, voetbaltraining en gymlessen aan mensen met
                    hartproblemen. Ook heb ik gewerkt op een logeerhuis voor kinderen met autisme.
                    Helaas werd het logeerhuis gesloten in het kader van bezuinigingen.
                    Door de verschillende werkzaamheden, heb ik ervaren dat verschillende doelgroepen mij aanspreken.
                    <br /><br />
                    Sinds 2007 werk ik in het primair onderwijs als leerkracht.
                    Al snel ging ik naast het werk van leerkracht werken als Intern Begeleider.
                    Dit betekent dat ik verantwoordelijk ben voor de leerlingenzorg.
                    Hierbij help ik ouders en leerkrachten met hulpvragen over het kind.
                    Vanuit mijn werk kwam ik er al snel achter dat  het sociaal emotioneel functioneren van een
                    kind bij mij voorop staat. Om hier gericht aan te werken met kinderen,
                    heb ik gezocht naar een methodiek die bij mij en het kind past.
                    Daarbij kwam ik uit op de methodiek Rots en Water.
                    Inmiddels geef ik Rots en Water trainingen op verschillende basisscholen.
                    Rots en Water is een psychofysieke training met als doel het vergroten van de communicatie,
                    sociale vaardigheden en welzijn bij kinderen en jongeren.
                    Daarnaast is het doel het voorkomen en/of verminderen van sociale problemen.
                    <br /><br />
                    In 2016 is mijn tweede zoon ernstig ziek geweest. Dit deed mij beseffen dat het in het leven
                    om andere dingen draait. Gevoel is voor mij de basis waar het allemaal mee begint.
                    Voor mij was het belangrijk om dichter bij mijzelf te komen.
                    Dit was voor mij de aanleiding om de opleiding tot haptotherapeut te gaan volgen.
                    De basisopleiding heb ik afgerond, waardoor ik mijzelf haptonoom mag noemen.
                    Dit betekent dat ik op basis van de haptonomische grondslag werk.
                    Haptonomie gaat uit van het belang en de kracht van gevoelens in de communicatie.
                    Op dit moment zit ik in het laatste leerjaar en ga ik als haptotherapeut afstuderen.
                </p>
            </main>
        </div>
    )
};

export default Home;
