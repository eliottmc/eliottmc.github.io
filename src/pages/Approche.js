import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';

import '../styles/Approche.css';

import icon from '../assets/niche.png';
import david_gaston_reading from '../assets/pictures_gaston_david/chien_maitre_ville_paris_education_positive.JPG';


const Approche = () => {
  return (
    <>
      <head>
        <title>David Macé - Éducateur comportementaliste canin</title>
        <meta name="description" content="Éducateur canin comportementaliste à Paris. Éducation positive et 
        non coercitive pour chiens citadins et humains sereins, à domicile et en extérieur."></meta>
        <link rel="icon" href={icon} />
      </head>
      <div className={"banner"}>
          <div>
            <Container data-scroll-index='1' style={{textAlign:'center'}}>
              <h1>Mon approche</h1>
            </Container>
          </div>
      </div>
      <Container data-scroll-index='2' className="approche-container">
        <Row className="align-items-stretch" style={{marginBottom:'2rem'}}>
        <h3> <span className='highlight'>Une approche individualisée et adaptée à la vie urbaine</span></h3>
        <h3>Chaque chien, comme chaque humain, est unique.</h3>
          <Col md={4} style={{display: 'flex'}}>
            <img src={david_gaston_reading} alt="chien-maitre-ville-paris-education-positive" style={{width: '100%', objectFit: 'cover'}} className='presentation-img'/>
          </Col>
          <Col md={8} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <p>Il n’existe pas de séance « type », ni de frontière rigide entre éducation et comportement.
                Mon travail est toujours un accompagnement <b>adapté à votre chien, à votre environnement
                et à votre quotidien</b>, à Paris comme en proche banlieue, <b>ainsi qu’à la problématique que
                vous m’apportez</b>.</p>
            <p>Un chien qui tire en laisse : </p>
            <ul>
              <li>Est-ce parce qu’il n’a pas appris à marcher en laisse ?</li>
              <li>Est-ce parce qu’il a beaucoup d’énergie et pas assez d’occasions de la dépenser ?</li>
              <li>Est-ce parce qu’il réagit à certains stimuli (chiens, humains, bruits, véhicules) ?</li>
            </ul>
            <p style={{marginBottom:'0'}}>Dans le premier cas, il s{"'"}agit d{"'"}éducation : <b>une séance peut suffire</b> pour vous montrer comment lui apprendre.</p>
            <p style={{marginBottom:'0'}}>Dans le second cas, il sera nécessaire de faire un point sur ses <b>besoins fondamentaux</b>.</p>
            <p>Dans le dernier cas, un <b>travail de désensibilisation</b> est indispensable.</p>
            <p style={{marginBottom:'0'}}><b>Tous les chiens n{"'"}apprennent pas au même rythme.</b></p>
            <p style={{marginBottom:'0'}}>Certains comprennent très vite, d’autres ont besoin de plus de temps.</p>
            <p style={{marginBottom:'0'}}>C’est une question d’individualité, d’histoire et de contexte.</p>
          </Col>
        </Row>
        <Row className="align-items-center">
          <p>Vous souhaitez <b>apprendre à votre chiot</b> à s’asseoir, à attendre, à ne pas bouger, à lâcher un objet, ou même à réaliser quelques tours amusants ?</p>
          <p>En <b>une séance d’une heure</b>, vous pouvez acquérir les bases nécessaires pour travailler un ou deux apprentissages techniques.</p>
          <p style={{marginBottom:'0'}}>{'"'}<b>Mon chien ne m{"'"}obéit pas</b>{'"'}</p>
          <p>C’est une phrase qu’on entend souvent.</p>
          <p style={{marginBottom:'0'}}>En réalité, la première question à se poser serait plutôt :</p>
          <p><b>Est-ce que mon chien comprend ce que je lui demande ?</b></p>
          <p>Très souvent, ce qui est perçu comme un problème d’éducation est en réalité <b>un problème de communication</b>.</p>
        </Row>
        
        <Row className="align-items-center text-center g-0" style={{marginTop:'4rem', justifyContent:'center'}}>  
          <Col style={{maxWidth:'400px'}}>
            <button className="button" onClick={() => window.location.href='/contact'}>
              Me contacter
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Approche;