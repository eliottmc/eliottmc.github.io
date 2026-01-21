import React from "react";
import {Container} from 'react-bootstrap';

import icon from '../assets/niche.png';

import '../styles/Contact.css';

const Contact = () => {
  return (
    <>
    <head>
        <title>David Macé - Éducateur comportementaliste canin</title>
        <meta name="description" content="Contactez David Macé, éducateur canin comportementaliste à Paris. 
        Prise de rendez-vous rapide pour bilan, éducation ou accompagnement."></meta>
        <link rel="icon" href={icon} />
      </head>
      <div className={"banner"}>
        <div>
          <Container data-scroll-index='1' style={{textAlign:'center'}}>
            <h1>Contact</h1>
            <h3></h3>
          </Container>
        </div>
      </div>
      <Container data-scroll-index='2'>
        <div className="contact-container">
        <h3>Mes coordonnées</h3>
        <p style={{marginBottom:'0'}}>Adresse email : <b><a href="mailto:contact@davidmace.fr" style={{"color":"#8A5A3C"}}>contact@davidmace.fr</a></b></p>
        <p>Numéro de téléphone : <b>06 84 24 28 29</b></p>
        <br></br>
        <h3>Prise de contact</h3>
        <p>Vous pouvez me contacter par téléphone ou par email si vous avez une question, un doute, ou si vous souhaitez un premier échange.</p>
        <p style={{marginBottom:'0'}}>Si vous préférez, vous pouvez également prendre directement rendez-vous pour un premier échange téléphonique gratuit via le calendrier ci-dessous.</p>
        <p>Ce temps d’échange permet de faire un premier point sur votre situation et de voir comment je peux vous accompagner.</p>
        <div className="calendly-inline-widget" data-url="https://calendly.com/davidmace73/10min" style={{minWidth:'320px', height:'700px', marginBottom:'2rem'}}></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>

        <h3>Envoyer un message</h3>
        <p>Vous pouvez également me contacter en remplissant le formulaire ci-dessous. Je vous répondrai dans les plus brefs délais !</p>
        <form
          action="https://formspree.io/f/xaqnllqd"
          method="POST"
          className="presta-container"
        >
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div style={{ flex: 1 }}>
              <label htmlFor="firstName" style={{ display: "block", fontWeight: "600" }}>
                Prénom
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                required
                placeholder="Votre prénom"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <label htmlFor="lastName" style={{ display: "block", fontWeight: "600" }}>
                Nom
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                required
                placeholder="Votre nom"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="email" style={{ display: "block", fontWeight: "600" }}>
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Votre adresse email"
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="message" style={{ display: "block", fontWeight: "600" }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Décrivez votre situation ou vos questions"
              rows={5}
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                resize: "vertical",
              }}
            />
          </div>

          <div style={{ textAlign: "center", paddingBottom: "4rem" }}>
            <button
            className="button"
              type="submit"
            >
              Envoyer
            </button>
          </div>
        </form>
        </div>
      </Container>
    </>
  );
};


export default Contact;