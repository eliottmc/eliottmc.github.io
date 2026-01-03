import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';

import '../styles/HomePage.css';

import david_gaston_bridge from '../assets/pictures_gaston_david/david_gaston_bridge.JPG';
import gaston_head from '../assets/pictures_gaston_david/gaston_vertical.JPG';
import icon from '../assets/gaston_head.avif';
import david_gaston_reading from '../assets/pictures_gaston_david/david_gaston_reading.JPG';

const HomePage = () => {
  return (
    <>
      <head>
        <title>David Macé - Éducateur comportementaliste canin</title>
        <link rel="icon" href={icon} />
      </head>
      <div className={"banner"}>
          <div>
            <Container data-scroll-index='1' style={{textAlign:'center'}}>
              <h1>David Macé</h1>
              <h3>Éducateur canin comportementaliste à Paris et proche banlieue</h3>
              <div className="img-cropper">
                <img src={gaston_head} alt="dog" className="banner-img" />
              </div>
              <p>Titulaire ACACED</p>
              <p>Formation d{"'"}éducation, de rééducation comportementale et d{"'"}intégration sociale canines</p>
              <p>Certifié RSCH n°6621</p>
            </Container>
          </div>
      </div>
      <Container data-scroll-index='2' style={{marginTop:'6rem', textAlign:'justify', paddingBottom:'4rem'}}>
        <Row className="align-items-center" style={{marginBottom:'4rem'}}>
          <Col md={6}>
            <p>Éducateur canin spécialisé dans les problématiques éducatives et comportementales,
            j’interviens principalement à <b>Paris et en proche banlieue</b>.</p>
            <p>Je vous accompagne de manière individualisée, pour un bilan comportemental, des séances
            d’éducation ou de suivi, une préparation à l’adoption. Ponctuellement ou régulièrement.
            Suivant vos disponibilités et vos besoins. Avec comme seul objectif de vous aider à mieux
            comprendre votre chien et construire une relation sereine.</p>
            <p>Formé à l’éducation positive au centre Entre Chiens, auprès de Gaston Mellet, Yann Forêt et
            du docteur vétérinaire Sylvia Masson, je propose une approche non coercitive, respectueuse,
            et adaptée au quotidien des chiens vivant en milieu urbain.</p>
          </Col>
          <Col md={6}>
            <img src={david_gaston_bridge} alt="dog" className="presentation-img" />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={4}>
            <img src={david_gaston_reading} alt="dog" style={{maxHeight: '600px'}} className='presentation-img'/>
          </Col>
          <Col md={8}>
            <p>Éducateur canin spécialisé dans les problématiques éducatives et comportementales,
            j’interviens principalement à <b>Paris et en proche banlieue</b>.</p>
            <p>Je vous accompagne de manière individualisée, pour un bilan comportemental, des séances
            d’éducation ou de suivi, une préparation à l’adoption. Ponctuellement ou régulièrement.
            Suivant vos disponibilités et vos besoins. Avec comme seul objectif de vous aider à mieux
            comprendre votre chien et construire une relation sereine.</p>
            <p>Formé à l’éducation positive au centre Entre Chiens, auprès de Gaston Mellet, Yann Forêt et
            du docteur vétérinaire Sylvia Masson, je propose une approche non coercitive, respectueuse,
            et adaptée au quotidien des chiens vivant en milieu urbain.</p>
          </Col>
        </Row>
        
        <Row className="align-items-center text-center" style={{marginTop:'4rem'}}>
          <div style={{maxWidth:'400px', margin:'0 auto'}}> 
            <button className="button" onClick={() => window.location.href='/prestations'}>
              Découvrir mes prestations
            </button>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;