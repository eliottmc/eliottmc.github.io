import React from "react";
import {Container, Row} from 'react-bootstrap';

import '../styles/Presta.css';

import icon from '../assets/niche.png';

const Bilan = () => {
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
            <h1>Bilan éducatif et comportemental</h1>
          </Container>
        </div>
      </div>
      <Container data-scroll-index='2'>
        <div className="presta-container">
            <div style={{marginBottom:'3rem'}}>
              <h3><b><i><span style={{color:"#1F1F1F"}}>Durée : environ 2 heures - à domicile</span></i></b></h3>
              <p>
                Le bilan est une étape essentielle pour <b>comprendre votre chien </b>et poser des bases solides.</p>
              <p>Il peut se faire à n’importe quel moment de la vie de votre chien : à l’arrivée dans son nouveau foyer, 
                à son passage à l’âge adulte ou à son entrée dans le monde des seniors.</p>
              <p>Il peut également être pertinent lors de <b>changements dans votre vie</b> : nouveaux horaires ou nouveau
                rythme de travail, modification de la composition du foyer, arrivée d’un congénère, d’un chat,
                ou tout autre événement susceptible de bouleverser, à des degrés divers, la routine de votre
                compagnon.</p>
              <p>Le bilan permet d’aborder de nombreuses questions, de retracer <b>l’histoire de votre chien</b>, et
                de comprendre <b>l’environnement et le quotidien</b> dans lesquels il évolue.</p>
              <p>C’est l’occasion de faire un point sur <b>les besoins fondamentaux et les axes comportementaux</b>.</p>
              <p>Nous prendrons le temps de faire une promenade dans votre quartier pour compléter l’observation.</p>
              <p>Je vous transmettrai les <b>bases de la communication canine</b>, les bons réflexes à mettre en place et les mauvais à éliminer.</p>
              <p>À l’issue de cette rencontre, je rédige un <b>compte rendu détaillé</b>, incluant les axes de travail
                éducatifs et/ou comportementaux, ainsi que des recommandations adaptées à votre chien et à votre mode de vie à Paris.</p>
              <p style={{marginBottom:'0'}}><b><i><span style={{color:"#1F1F1F"}}>Ce bilan ne constitue en aucun cas un diagnostic médical.</span></i></b></p>
              <p>Aucun éducateur n’est habilité à émettre un avis médical. Si je suspecte un problème d’ordre pathologique, je vous orienterai vers un·e vétérinaire comportementaliste.</p>
            </div>
        <Row className="align-items-center text-center" style={{marginTop:'4rem', paddingBottom:'4rem'}}>
          <div style={{display:'flex', justifyContent:'center'}}> 
            <button className="button" onClick={() => window.location.href='/contact'}>
              Des questions ?
            </button>
          </div>
        </Row>
        </div>
      </Container>
    </>
  );
};

export default Bilan;