import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';

import '../styles/HomePage.css';

import david_gaston_bridge from '../assets/pictures_gaston_david/chien_maitre_ville_paris.webp';
import gaston_head from '../assets/pictures_gaston_david/chien-ville-paris-vertical.webp';
import icon from '../assets/niche.webp';

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
          <Container data-scroll-index='1' style={{justifyContent: 'center', display: 'flex'}}>
            <div className="banner_homepage_content">
              <h1 style={{marginBottom: '0px', marginTop: '10px'}}>David Macé</h1>
              <h5 style={{marginBottom: '25px'}}>Éducateur canin comportementaliste</h5>
              <div className="img-cropper">
                <img src={gaston_head} alt="chien-ville-paris" className="banner-img" />
              </div>
              <h3 style={{marginBottom: '10px'}}>Éducation positive pour chiens citadins</h3>
              <h3 style={{paddingTop: '0px', color: "lightgray", marginBottom: '10px'}}><i>- Paris et proche banlieue -</i></h3>
              <p>Titulaire ACACED</p>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <p style = {{maxWidth: '500px'}}>Formation d{"'"}éducation, de rééducation comportementale et d{"'"}intégration sociale canines - Certifié RSCH n°6621</p>
              </div>
            </div>
          </Container>
      </div>
      <Container data-scroll-index='2'>
        <div className="homepage_content">
        <Row className="align-items-center" style={{marginBottom:'40px'}}>
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
        
        
        <div className="button-container">  
          <Col>
            <button className="button" onClick={() => window.location.href='/approche'}>
              À propos
            </button>
          </Col>
          <Col>
            <button className="button" onClick={() => window.location.href='/contact'}>
              Premier échange
            </button>
          </Col>
        </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;