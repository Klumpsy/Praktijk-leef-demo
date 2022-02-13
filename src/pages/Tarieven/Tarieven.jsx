import React from 'react';
import "./tarieven.css";
import PriceCard from '../../components/PriceCard/PriceCard';
import { tarieven } from '../../components/tarieven';

const Tarieven = () => {
    return (
        <div className="tarieven-container">
            <h2>Tarieven</h2>
            <p>
                Kosten worden berekend op basis van vermelde tarieven.
                Vanaf 1 januari 2020 ben ik vrijgesteld van BTW.
                De tarieven zijn inclusief materiaal, voorbereiding en verwerking.
                De rekening ontvangt u per mail. Kijk uw verzekeringspolis na of neem
                contact op met uw verzekeraar voor een eventuele vergoeding.
                Ook diverse regelingen zoals het Persoons Gebonden Budget (PGB) en
                belastingaftrek kunnen mogelijkheden bieden voor tegemoetkoming in de kosten.
            </p>
            <div className="tarieven-box">
                {
                    tarieven.map(tarief => (
                        <PriceCard
                            price={tarief.price}
                            title={tarief.name}
                            information={tarief.info}
                            link={tarief.link}
                            linkText={tarief.linkText}
                            link2={tarief.link2}
                            link2Text={tarief.link2Text}
                            icon={tarief.icon}
                            key={tarief.name}
                        />
                    ))
                }
            </div>
            <p>
                Reiskosten 19 cent per kilometer
            </p>
        </div>
    )
}

export default Tarieven