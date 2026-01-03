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
            <h1>Prestations</h1>
          </Container>
        </div>
      </div>
      <Container data-scroll-index='2' style={{marginTop:'2rem', textAlign:'justify', paddingBottom:'4rem'}} className="presta-container">
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
              <h3>Bilan éducatif et/ou comportemental</h3>
              <h5>Durée : 2 heures – à domicile</h5>
              <p>
                Afin de comprendre la situation dans son ensemble, je vous poserai de nombreuses questions
                sur votre chien, son environnement ainsi que les difficultés que vous rencontrez.</p>
              <p>
                Une promenade en extérieur est proposée afin d’observer le comportement de votre chien en
                extérieur (marche en laisse, croisements, environnement urbain).
              </p>
              <p>À l{"'"}issue du bilan, je rédige un <b>compte rendu détaillé</b>, incluant :</p>
              <ul>
                <li>les axes de travai éducatifs et/ou comportementaux </li>
                <li>des recommandations concrètes</li>
                <li>une stratégie adaptée à votre chien et à votre mode de vie à Paris</li>
              </ul>
                <p>Ce bilan ne constitue <b>en aucun cas un diagnostic médical</b>.
              Aucun éducateur n’est habilité à émettre un avis médical. Si je suspecte un problème d’ordre
              pathologique, je vous orienterai vers un·e vétérinaire comportementaliste, mais en aucun cas
              je ne vous donnerai un avis sur une question médicale. C’est déontologiquement interdit et
              éthiquement douteux.</p>
            </div>
            <div style={{marginBottom:'3rem'}}>
              <h3>Séance éducative</h3>
              <h5>Durée : 1 heure</h5>
              <h5>Première séance à domicile recommandée</h5>
              <p>
                Les séances éducatives permettent de travailler un ou deux apprentissages précis, selon vos
                objectifs et les besoins de votre chien, à domicile ou en extérieur, comme :</p>
              <ul>
                <li>la marche en laisse</li>
                <li>le rappel</li>
                <li>les positions (assis, couché, statique)</li>
                <li>l’accueil des visiteurs</li>
                <li>les croisements chiens et humains</li>
                <li>les règles du quotidien en appartement</li>
              </ul>
                <p>À l’issue de la séance, vous disposez d’outils clairs pour poursuivre le travail en autonomie et
                renforcer la relation avec votre chien.</p>
            </div>
            <div style={{marginBottom:'3rem'}}>
              <h3>Séance comportementale</h3>
              <h5>Durée : 1 heure</h5>
              <p>
                Les séances comportementales s’adressent à des problématiques telles que :</p>
              <ul>
                <li>les aboiements excessifs</li>
                <li>les peurs ou phobies</li>
                <li>les difficultés de gestion émotionnelle</li>
                <li>les comportements gênants ou incompris</li>
              </ul>
                <p>La première séance permet de comprendre la problématique et de définir les déclencheurs,
                dans le contexte de vie du chien.</p>
                <p>Un <b>compte rendu écrit</b> est transmis, accompagné si nécessaire d’une proposition de séances
                  de suivi.</p>
                <p>Certains problèmes peuvent se résoudre rapidement, d’autres nécessitent un accompagnement
                  progressif.</p>
            </div>
            <div style={{marginBottom:'3rem'}}>
              <h3>Préparation à l{"'"}adoption</h3>
              <h5>Durée : 1h30</h5>
              <h5>À domicile ou en visioconférence</h5>
              <p>
                Nous abordons ensemble :</p>
              <ul>
                <li>le choix du chien (âge, tempérament, race ou type)</li>
                <li>votre environnement (appartement, quartier, disponibilité)</li>
                <li>les besoins fondamentaux du chien</li>
                <li>les habitudes à mettre en place dès l’arrivée</li>
                <li>les spécificités selon le type d’adoption (refuge, élevage, particulier)</li>
              </ul>
                <p>Un <b>compte rendu personnalisé</b> est rédigé à l’issue de la séance.</p>
                <p>Un accompagnement plus poussé peut être proposé.</p>
            </div>
            <div style={{marginBottom:'3rem'}}>
              <h3>Séance en visioconférence</h3>
              <h5>Durée : entre 30 et 45 minutes</h5>
              <p>
                Les séances en visioconférence permettent un travail ciblé pour :</p>
              <ul>
                <li>le suivi éducatif ou comportemental</li>
                <li>certaines problématiques spécifiques</li>
                <li>les situations ne nécessitant pas de présence physique</li>
              </ul>
                <p>La pertinence de la visioconférence est évaluée lors de la prise de contact, afin de garantir un
                  accompagnement efficace et adapté.</p>
                <p>Les séances en visioconférence font l’objet d’un paiement à l’avance.</p>
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