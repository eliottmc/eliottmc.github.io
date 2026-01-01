import React from "react";
import {Container} from 'react-bootstrap';

import '../styles/Tarifs.css';

const Tarifs = () => {
  return (
    <>
    <head>
        <title>David Macé - Éducateur comportementaliste canin</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <div className={"banner"}>
        <div>
          <Container data-scroll-index='1' style={{textAlign:'center'}}>
            <h1>Tarifs</h1>
          </Container>
        </div>
      </div>
      <Container data-scroll-index='2' style={{marginTop:'6rem', paddingBottom:'4rem'}} className="presta-container">
        <div>
          <div style={{marginTop:'3rem'}}>
            <div style={{marginBottom:'3rem'}}>
              <h4><b>Bilan éducatif et/ou comportemental* - 2 heures : 150€</b></h4>
              <ul>
                <li>À domicile</li>
                <li>180€ après 20h, week-end et jours fériés</li>
              </ul>
            </div>
            <div style={{marginTop:'3rem'}}>
              <h4><b>Séance éducative ou comportementale* - 1 heure : 60€</b></h4>
              <ul>
                <li>Première séance à domicile</li>
                <li>80€ après 20h, week-end et jours fériés</li>
              </ul>
            </div>
            <div style={{marginTop:'3rem'}}>
              <h4><b>Préparation à l{"'"}adoption* - 1h30 : 100€</b></h4>
              <ul>
                <li>À domicile ou en visioconférence</li>
                <li>120€ après 20h, week-end et jours fériés</li>
                <li>Devis sur demande si besoin d{"'"}un accompagnent plus poussé</li>
                <li>-20% pour les adoptions en refuge</li>
              </ul>
            </div>
            <div style={{marginTop:'3rem'}}>
              <h4><b>Séance en visioconférence : 30min : 45€ / 45min : 65€</b></h4>
              <ul>
                <li>Confirmer lors de la prise de contact que la problématique se prête à la visioconférence</li>
                <li>60/80€ après 20h, week-end et jours fériés</li>
              </ul>
            </div>
            <div style={{marginTop:'3rem'}}>
              <p>*Inclus :
                <ul>
                  <li>Compte rendu détaillé</li>
                  <li>2 appels de 10 minutes si besoin</li>
                  <li>Frais de déplacement</li>
                </ul>
              </p>
              <p><b>Les séances en visioconférence et les créneaux en horaires décalés font l{"'"}objet d{"'"}un paiement à l{"'"}avance.</b></p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Tarifs;