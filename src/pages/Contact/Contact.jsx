import React, { useState, useEffect } from 'react'
import "./contact.css";

const Contact = () => {
    const [naam, setNaam] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [question, setQuestion] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(naam, phone, email, question);
        setSent(true);
    }

    const handleBackToForm = () => {
        setNaam("");
        setEmail("");
        setPhone("");
        setQuestion("");
        setSent(false);
    }

    return (
        <div className="contact-form-container">
            <h2>Contact</h2>
            <div className="contact-info">
                <div>
                    <p>Hardenberg</p>
                    <p>Floralaan 133</p>
                    <p>7772 NV</p>
                </div>
                <p>06-82384442</p>
                <p>KVK: 76766993</p>
                <p>BTW ID: NL003133594B89</p>
            </div>
            <div className="contact-form-wrapper">
                {
                    sent ?
                        <div className="contact-form-modal">
                            <h3>Bedankt voor je bericht {naam}!</h3>
                            <p>Ik zal je bericht zo snel mogelijk beantwoorden.</p>
                            <button onClick={handleBackToForm}>Terug naar contactformulier</button>
                        </div>
                        :
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder='Naam'
                                value={naam}
                                onChange={(e) => setNaam(e.target.value)} />
                            <input
                                type="email"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <input
                                type="tel"
                                placeholder='Telefoon nummer'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)} />
                            <textarea
                                type="text"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)} />
                            <button type="submit">Verstuur</button>
                        </form>
                }
            </div>
        </div>
    )
}

export default Contact
