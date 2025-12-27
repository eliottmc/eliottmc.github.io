import React from "react";
import { Container, Accordion } from 'react-bootstrap';

import '../styles/Faq.css';

const Faq = () => {
  return (
    <>
    <head>
        <title>David Macé - Éducateur comportementaliste canin</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <div className={"banner"}>
        <div>
          <Container data-scroll-index='1' style={{textAlign:'center'}}>
            <h1>FAQ</h1>
            <h3>Réponses aux questions fréquentes</h3>
            </Container>
            </div>
        </div>
        <div style={{maxWidth:'800px', margin:'auto', paddingBottom:'2rem'}}>
            <Accordion defaultActiveKey={null} style={{ textAlign: "left", marginTop: "2rem", fontSize: "1.5rem", fontWeight: "0" }}>
                <Accordion.Item eventKey="0">
                <Accordion.Header>
                    Quels types de chiens prenez-vous en charge ?
                </Accordion.Header>
                <Accordion.Body>
                    J’accompagne tous les chiens, quels que soient leur âge, leur race ou leurs problématiques
                    (agressivité, anxiété, peur, destruction, etc.).
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                <Accordion.Header>
                    Où se déroulent les séances ?
                </Accordion.Header>
                <Accordion.Body>
                    Les séances peuvent se dérouler à votre domicile, en extérieur ou dans des lieux adaptés,
                    selon les besoins du chien et les objectifs définis ensemble.
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                <Accordion.Header>
                    Combien de séances sont nécessaires ?
                </Accordion.Header>
                <Accordion.Body>
                    Le nombre de séances dépend du chien, de son environnement et de la problématique.
                    Un premier bilan permet d’estimer un accompagnement adapté.
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
        <div style={{maxWidth:'400px', margin:'auto', paddingBottom:'2rem', display: 'flex', justifyContent: 'center'}}> 
            <button className="button" onClick={() => window.location.href='/contact'}>
              Me contacter
            </button>
        </div>
    </>
  );
};

export default Faq;