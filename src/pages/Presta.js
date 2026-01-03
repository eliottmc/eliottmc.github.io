import React from "react";
import {Container, Row} from 'react-bootstrap';

import '../styles/Presta.css';

const Presta = () => {
  return (
    <>
    <head>
        <title>David Macé - Éducateur comportementaliste canin</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <div className={"banner"}>
        <div>
          <Container data-scroll-index='1' style={{textAlign:'center'}}>
            <h1>Prestations d{"'"}éducation et de comportement canin</h1>
          </Container>
        </div>
      </div>
      <Container data-scroll-index='2' style={{marginTop:'2rem', textAlign:'center', paddingBottom:'4rem'}} className="presta-container">
        <div>
          <div >
            <div style={{marginBottom:'3rem', textAlign:'justify'}}>
              <p>
                J’accompagne les chiens et leurs humains vivant à Paris et en proche banlieue, en proposant
                des prestations d’éducation canine et de comportement adaptées au <b>milieu urbain</b>, au
                <b>quotidien en appartement</b>, et aux réalités de la vie citadine.
              </p>
              <p>
                Chaque accompagnement est individualisé, respectueux du chien et fondé sur une <b>approche
                d’éducation positive</b>, sans contrainte ni coercition.
              </p>
            </div>
            <div style={{marginBottom:'3rem'}}>
              <h3>Bilan éducatif et/ou comportemental - 2 heures - à domicile</h3>
              <ul>
                <li>Étape essentielle pour comprendre votre chien </li>
                <li>Je vous pose des questions afin de mieux comprendre votre chien, son histoire, son environnement et votre quotidien</li>
                <li>Une promenade sera proposée afin d’observer son comportement en extérieur et d’identifier les axes d’amélioration possibles</li>
                <li><b>Compte rendu détaillé</b>, incluant les axes de travail
              éducatifs et/ou comportementaux, ainsi que des recommandations adaptées à votre chien et à
              votre mode de vie à Paris.</li>
              </ul>
                <p>Ce bilan ne constitue <b>en aucun cas un diagnostic médical</b>.
              Aucun éducateur n’est habilité à émettre un avis médical. Si je suspecte un problème d’ordre
              pathologique, je vous orienterai vers un·e vétérinaire comportementaliste, mais en aucun cas
              je ne vous donnerai un avis sur une question médicale. C’est déontologiquement interdit et
              éthiquement douteux.</p>
            </div>
            <div style={{marginTop:'3rem'}}>
              <h3>Séance éducative - 1 heure - première séance à domicile</h3>
              <ul>
                <li>Travail d{"'"}un ou deux apprentissages précis</li>
                <li>À domicile ou en extérieur, selon l’apprentissage à mettre en place</li>
                <li>À l{"'"}issue de la séance, vous disposez des <b>Outils nécessaires pour poursuivre l’apprentissage en autonomie</b></li>
              </ul>
            </div>
            <div style={{marginTop:'3rem'}}>
              <h3>Séance comportementale - 1 heure</h3>
              <ul> 
                <li>Pour les problématiques telles que les aboiements excessifs, peurs ou phobies, difficultés émotionnelles, comportements gênants ou incompris, etc.</li>
                <li>Première séance pour comprendre la situation et définir une stratégie de travail</li>
                <li>Transmission d{"'"}un <b>compte rendu</b>, accompagné, si nécessaire, d’une <b>proposition de séances de suivi</b></li>
              </ul>
            </div>
            <div style={{marginTop:'3rem'}}>
              <h3>Préparation à l{"'"}adoption - 1h30 - à domicile ou en visioconférence</h3>
              <ul>
                <li>Accompagnement avant l{"'"}adoption pour choisir un chien adapté à votre mode de vie</li>
                <li>Conseils pour bien préparer l{"'"}arrivée du chien à votre domicile et les habitudes à mettre en place</li>
                <li>-20% pour les adoptions en refuge</li>
                <li>Un accompagnement plus poussé peut-être proposé <b>sur devis</b></li>
              </ul>
            </div>
            <div style={{marginTop:'3rem'}}>
              <h3>Séance en visioconférence - entre 30 et 45 minutes</h3>
              <ul>
                <li>Travail ciblé, notamment pour le suivi éducatif et comportemental</li>
                <li>La pertinence de la visioconférence est <b>confirmée lors de la prise de contact</b>, afin de garantir un accompagnement adapté</li>
                <li>Les séances en visioconférence font l{"'"}objet d{"'"}un <b>paiement à l{"'"}avance</b></li>
              </ul>
            </div>
          </div>
        </div>
        <Row className="align-items-center text-center" style={{marginTop:'4rem'}}>
          <div style={{maxWidth:'400px', margin:'0 auto'}}> 
            <button className="button" onClick={() => window.location.href='/tarifs'}>
              En savoir plus sur les tarifs
            </button>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Presta;