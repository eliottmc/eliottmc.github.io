import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';

import '../styles/HomePage.css';

import david_gaston_bridge from '../assets/pictures_gaston_david/chien_maitre_ville_paris.jpg';
import gaston_head from '../assets/pictures_gaston_david/chien-ville-paris-vertical.JPG';
import icon from '../assets/niche.png';

const HomePage = () => {
  return (
    <>
      <head>
        <title>David Macé - Éducateur comportementaliste canin</title>
        <meta name="description" content="Éducateur canin comportementaliste à Paris. Éducation positive et 
        non coercitive pour chiens citadins et humains sereins, à domicile et en extérieur."></meta>
        <link rel="icon" href={icon} />
      </head>
      <div className={"banner-homepage"}>
          <div>
            <Container data-scroll-index='1' style={{textAlign:'center'}}>
              <h1>David Macé</h1>
              <h3 style={{marginBottom: '0px'}}>Éducateur canin comportementaliste</h3>
              <h3 style={{paddingTop: '0px'}}>Paris et proche banlieue</h3>
              <div className="img-cropper">
                <img src={gaston_head} alt="chien-ville-paris" className="banner-img" />
              </div>
              <p>Titulaire ACACED</p>
              <p>Formation d{"'"}éducation, de rééducation comportementale et d{"'"}intégration sociale canines</p>
              <p>Certifié RSCH n°6621</p>
            </Container>
          </div>
      </div>
      <Container data-scroll-index='2' style={{marginTop:'6rem', textAlign:'justify', paddingBottom:'4rem', paddingLeft:'10rem', paddingRight:'10rem'}}>
        <Row className="align-items-center" style={{marginBottom:'4rem'}}>
            <p>Éducateur canin spécialisé dans les problématiques éducatives et comportementales,
            j’interviens principalement à <b>Paris et en proche banlieue</b>.</p>
            <p>Je vous accompagne de manière individualisée, pour un bilan comportemental, des séances
            d’éducation ou de suivi, une préparation à l’adoption. Ponctuellement ou régulièrement.
            Suivant vos disponibilités et vos besoins. Avec comme seul objectif de vous aider à mieux
            comprendre votre chien et construire une relation sereine.</p>
            <p>Formé à l’<b>éducation positive</b> au centre Entre Chiens, auprès de Gaston Mellet, Yann Forêt et
            du docteur vétérinaire Sylvia Masson, je propose une approche non coercitive, respectueuse,
            et adaptée au quotidien des chiens vivant en milieu urbain.</p>
        </Row>
        <div style={{textAlign:'center'}}>
          <img src={david_gaston_bridge} alt="chien-maitre-ville-paris" className="presentation-img" />
        </div>
        
        
        <Row className="align-items-center text-center g-0" style={{marginTop:'4rem', justifyContent:'center'}}>  
          <Col style={{maxWidth:'400px'}}>
            <button className="button" onClick={() => window.location.href='/approche'}>
              Mon approche
            </button>
          </Col>
          <Col style={{maxWidth:'400px'}}>
            <button className="button" onClick={() => window.location.href='/contact'}>
              Premier échange
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;