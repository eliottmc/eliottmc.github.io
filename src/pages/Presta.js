import React from "react";
import {Container, Row} from 'react-bootstrap';

import '../styles/Presta.css';

import icon from '../assets/niche.png';

const Presta = () => {
  return (
    <>
    <head>
        <title>David Macé - Éducateur comportementaliste canin</title>
        <meta name="description" content="Bilan comportemental, séances éducatives et accompagnement 
        à l’adoption à Paris. Éducation canine positive, personnalisée et sans contrainte."></meta>
        <link rel="icon" href={icon} />
      </head>
      <div className={"banner"}>
        <div>
          <Container data-scroll-index='1' style={{textAlign:'center'}}>
            <h1>Prestations</h1>
          </Container>
        </div>
      </div>
      <Container data-scroll-index='2' className="presta-container">
        <div>
          <div >
            <div style={{marginBottom:'3rem', textAlign:'justify'}}>
              <p style={{marginBottom:'0'}}>Chaque séance dure environ une heure.</p>
              <p style={{marginBottom:'0'}}>Au-delà, les chiens perdent en concentration et en disponibilité.</p>
              <p>Ce n’est pas une séance de dressage mais un moment de plaisir, d’apprentissage et de complicité entre lui et son humain.</p>
              <p>Mon but en temps qu’éducateur canin étant de consolider le lien entre le chien et son maître, votre présence est souhaitable. </p>
              <p>Les séances ont lieu <b>à domicile ou en extérieur</b>, selon l’apprentissage à mettre en place.</p>
              <p>Je me déplace à Paris ainsi qu’en proche banlieue.</p>
              <p>Des séances en visioconférence sont possibles, lorsque la problématique le permet.</p>
              <p>Un compte rendu écrit, reprenant les points travaillés et les axes à poursuivre, vous sera transmis dans les jours suivant la séance.</p>
              <p>Je reste ensuite joignable pour toute précision ou question complémentaire.</p>
            </div>
            <div style={{marginBottom:'3rem'}}>
              <h3><span className="highlight">Séance éducative</span></h3>
              <p>
                Les séances éducatives permettent de travailler un ou deux apprentissages précis, en fonction de vos besoins et de ceux de votre chien.</p>
              <p>
                Elles peuvent concerner de nombreux domaines : la marche en laisse, le rappel, les positions (assis, couché, statique), 
                l’accueil des visiteurs, les croisements (chiens, humains), les règles du quotidien, ainsi que des exercises ludiques (rapporter, chercher, faire le beau).
              </p>
              <p>Les possibilités sont vastes et s’adaptent à votre quotidien et à vos envies.</p>
              <p>À l’issue de la séance, vous disposez des <b>outils nécessaires pour poursuivre l’apprentissage en autonomie</b>.</p>
            </div>
            <div style={{marginBottom:'3rem'}}>
              <h3><span className="highlight">Séance comportementale</span></h3>
              <p>
                Les séances comportementales s’adressent aux problématiques telles que les aboiements
                excessifs, les peurs ou phobies, les difficultés de gestion émotionnelle, tout comportement
                gênant ou incompris.</p>
              <p>Elles peuvent également concerner des comportements faisant suite à des changements dans
                votre environnement aussi variés que l’arrivée d’un bébé, une séparation, un déménagement,
                ou toute autre modification susceptible de perturber l’équilibre de votre chien.</p>
              <p>La première séance permet de comprendre la situation, d’identifier les déclencheurs et le contexte, puis de définir une stratégie de travail adaptée.</p>
              <p>Chaque situation est évaluée individuellement : certains problèmes peuvent se résoudre rapidement,
                parfois en une séance, d’autres nécessitent un accompagnement progressif.</p>
            </div>
            <div style={{marginBottom:'3rem'}}>
              <h3><span className="highlight">Préparation à l{"'"}adoption</span></h3>
              <p>
                La préparation à l’adoption permet d’anticiper l’arrivée d’un chien et de construire un projet
                cohérent, avant et/ou après son arrivée au sein du foyer.</p>
              <p>Selon vos envies et vos besoins, nous aborderons le choix du chien, votre environnement et
                mode de vie, les besoins fondamentaux du chien, les habitudes à mettre en place, ainsi que
                toutes les problématiques liées à l’arrivée d’un chiot à Paris.</p>
              <p>Un accompagnement plus poussé peut être proposé <b>sur devis</b>.</p>
            </div>
            <div style={{marginBottom:'3rem'}}>
              <h3><span className="highlight">Séance en visioconférence</span></h3>
              <p>
                Les séances en visioconférence permettent un travail ciblé, notamment pour le suivi éducatif
                ou comportemental, certaines problématiques spécifiques et les situations ne nécessitant pas
                de présence physique.</p>
              <p>La pertinence de la visioconférence est <b>confirmée lors de la prise de contact</b>, afin de garantir un accompagnement adapté.</p>
              <p style={{marginBottom:'0'}}>Les séances en visioconférence durent environ <b>30 à 45 minutes</b>.</p>
              <p style={{marginBottom:'0'}}>Elles sont plus courtes car la méthode est différente : en amont du rendez-vous, je vous
                demanderai des vidéos des comportements qui vous posent question, que j’analyse préalablement.</p>
              <p>Cette préparation me permet de cibler le travail lors de la séance et de vous transmettre, à l’issue, un compte rendu adapté à votre situation.</p>
              <p>Les séances en visioconférence font l’objet d’un <b>paiement à l’avance</b>.</p>
            </div>
          </div>
        </div>
        <Row className="align-items-center text-center" style={{marginTop:'4rem', paddingBottom:'4rem'}}>
          <div style={{maxWidth:'400px', margin:'0 auto'}}> 
            <button className="button" onClick={() => window.location.href='/contact'}>
              Des questions ?
            </button>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Presta;