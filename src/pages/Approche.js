import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';

import '../styles/HomePage.css';

import david_gaston_bridge from '../assets/pictures_gaston_david/chien_maitre_ville_paris.JPG';
import gaston_head from '../assets/pictures_gaston_david/chien-ville-paris-vertical.JPG';
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
          <Col md={6}>
            <p>Éducateur canin spécialisé dans les problématiques éducatives et comportementales,
            j’interviens principalement à <b>Paris et en proche banlieue</b>.</p>
            <p>Je vous accompagne de manière individualisée, pour un bilan comportemental, des séances
            d’éducation ou de suivi, une préparation à l’adoption. Ponctuellement ou régulièrement.
            Suivant vos disponibilités et vos besoins. Avec comme seul objectif de vous aider à mieux
            comprendre votre chien et construire une relation sereine.</p>
            <p>Formé à l’<b>éducation positive</b> au centre Entre Chiens, auprès de Gaston Mellet, Yann Forêt et
            du docteur vétérinaire Sylvia Masson, je propose une approche non coercitive, respectueuse,
            et adaptée au quotidien des chiens vivant en milieu urbain.</p>
          </Col>
          <Col md={6}>
            <img src={david_gaston_bridge} alt="chien-maitre-ville-paris" className="presentation-img" />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={4}>
            <img src={david_gaston_reading} alt="chien-maitre-ville-paris-education-positive" style={{maxHeight: '600px'}} className='presentation-img'/>
          </Col>
          <Col md={8}>
            <p>Mon travail consiste à vous proposer des solutions concrètes aux problèmes que vous
              rencontrez, adaptées à votre chien, et à vous accompagner dans son éducation en tenant
              compte de votre environnement et de votre mode de vie.</p>
            <p>Ce travail se fait avec votre participation. En vous impliquant, vous offrez à votre chien des
              moments de complicité et de plaisir partagés, tout en renforçant votre lien.</p>
            <p>Vous verrez qu’avec un peu de travail et de patience, un chien est capable de tout apprendre,
              tout comprendre : marche en laisse, rappel, statique, accueil des visiteurs, règles du
              quotidien… La stimulation intellectuelle fait partie de son équilibre et de ses besoins
              fondamentaux, et ceci à tout âge.</p>
            <p>Et s’il aboie, tire sur sa laisse, détruit le canapé, qu’il a du mal à gérer ses émotions, ce n’est
              certainement pas pour vous fâcher, c’est souvent juste un problème de communication. Et ça
              aussi ça s’apprend et se travaille. Tout ce qui l’intéresse (à part peut-être manger), c’est de
              vous rendre heureux. C’est vrai pour tous les chiens.</p>
          </Col>
        </Row>
        
        <Row className="align-items-center text-center g-0" style={{marginTop:'4rem', justifyContent:'center'}}>  
          <Col style={{maxWidth:'400px'}}>
            <button className="button" onClick={() => window.location.href='/prestations'}>
              Découvrir mes prestations
            </button>
          </Col>
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