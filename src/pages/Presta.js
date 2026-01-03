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
              <p>Le bilan est une étape essentielle pour comprendre votre chien et poser des bases solides.
              Pendant environ deux heures, à votre domicile, nous faisons un point complet sur votre
              situation. Je vous pose de nombreuses questions afin de mieux comprendre votre chien, son histoire,
              son environnement et votre quotidien. Une promenade sera proposée afin d’observer son
              comportement en extérieur et d’identifier les axes d’amélioration possibles. 
              À l’issue de cette rencontre, je rédige un <b>compte rendu détaillé</b>, incluant les axes de travail
              éducatifs et/ou comportementaux, ainsi que des recommandations adaptées à votre chien et à
              votre mode de vie à Paris.</p>
              <p>Ce bilan ne constitue <b>en aucun cas un diagnostic médical</b>.
              Aucun éducateur n’est habilité à émettre un avis médical. Si je suspecte un problème d’ordre
              pathologique, je vous orienterai vers un·e vétérinaire comportementaliste, mais en aucun cas
              je ne vous donnerai un avis sur une question médicale. C’est déontologiquement interdit et
              éthiquement douteux.</p>
            </div>
            <div style={{marginTop:'3rem'}}>
              <h3>Séance éducative - 1 heure - première séance à domicile</h3>
              <p>Les séances éducatives permettent de travailler un ou deux apprentissages précis, en fonction
              de vos besoins et de ceux de votre chien.Elles peuvent concerner la marche en laisse, le rappel, les positions (assis, couché, statique),
              l’accueil des visiteurs, les croisements (chiens, humains), les règles du quotidien et autres.</p>
              <p>Les séances ont lieu <b>à domicile ou en extérieur</b>, selon l’apprentissage à mettre en place.</p>
              <p>À l’issue de la séance, vous disposez des <b>outils nécessaires pour poursuivre l’apprentissage en autonomie</b>.</p>
            </div>
            <div style={{marginTop:'3rem'}}>
              <h3>Séance comportementale - 1 heure</h3>
              <p>Les séances comportementales s’adressent aux problématiques telles que les aboiements
              excessifs, peurs ou phobies, difficultés de gestion émotionnelle, comportements gênants ou
              incompris et autres soucis rencontrés. La première séance permet de comprendre la situation, d’identifier les déclencheurs et le
              contexte, puis de définir une stratégie de travail adaptée.</p>
              <p>Un compte rendu est transmis, accompagné, si nécessaire, d’une <b>proposition de séances de suivi</b>.
              Chaque situation est évaluée individuellement : certains problèmes peuvent se résoudre
              rapidement, parfois en une séance, d’autres nécessitent un accompagnement progressif.</p>
            </div>
            <div style={{marginTop:'3rem'}}>
              <h3>Préparation à l{"'"}adoption - 1h30 - à domicile ou en visioconférence</h3>
              <p>La préparation à l’adoption permet d’anticiper l’arrivée d’un chien et de construire un projet
              cohérent, en amont. Suivant vos envies et vos besoins, nous aborderons le choix du chien, votre environnement et
              mode de vie, les besoins fondamentaux du chien, les habitudes à mettre en place, et toutes les
              problématiques liés à l’arrivée d’un chiot à Paris. Je vous rédigerai un compte rendu à l’issue
              de la séance</p>
              <p>Un accompagnement plus poussé peut être proposé <b>sur devis</b>.</p>
            </div>
            <div style={{marginTop:'3rem'}}>
              <h3>Séance en visioconférence - entre 30 et 45 minutes</h3>
              <p>Les séances en visioconférence permettent un travail ciblé, notamment pour le suivi éducatif
              ou comportemental, certaines problématiques spécifiques et les situations ne nécessitant pas
              de présence physique. La pertinence de la visioconférence est <b>confirmée lors de la prise de contact</b>, afin de
              garantir un accompagnement adapté.</p>
              <p>Les séances en visioconférence font l’objet d’un <b>paiement à l{"'"}avance</b>.</p>
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