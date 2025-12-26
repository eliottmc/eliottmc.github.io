import React from "react";
import {Container} from 'react-bootstrap';

const Contact = () => {
  return (
    <>
    <head>
        <title>David Macé - Éducateur comportementaliste canin</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <div className={"banner"}>
        <div>
          <Container data-scroll-index='1' style={{textAlign:'center'}}>
            <h1>Contact</h1>
            <h3></h3>
          </Container>
        </div>
      </div>
      <Container data-scroll-index='2' style={{marginTop:'6rem', textAlign:'center', paddingBottom:'4rem'}}>
        <h3>Prendre rendez-vous</h3>
        <p>Si vous souhaitez prendre rendez-vous, ou si vous avez simplement des questions sur ma méthode ou mes services, n{"'"}hésitez pas à prendre un rendez-vous via le
            calendrier ci-dessous. Je serai ravi de vous aider vous et votre compagnon à quatre pattes !
        </p>
        <div className="calendly-inline-widget" data-url="https://calendly.com/tandoobot/30min" style={{minWidth:'320px', height:'700px'}}></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>

        <h3>Envoyer un message</h3>
        <p>Vous pouvez également me contacter en remplissant le formulaire ci-dessous. Je vous répondrai dans les plus brefs délais !</p>
        <form
          action="https://formspree.io/f/xgoevykr"
          method="POST"
          style={{ maxWidth: "600px", margin: "2rem auto", textAlign: "left" }}
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

          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              style={{
                padding: "0.6rem 1.5rem",
                borderRadius: "4px",
                border: "none",
                backgroundColor: "#000",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Envoyer
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};


export default Contact;