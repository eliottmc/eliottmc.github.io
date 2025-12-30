import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';

import '../styles/HomePage.css';

import placeholder_img from '../assets/placeholderimage.png';
import dog_with_woman from '../assets/dog_with_woman.jpg';

const HomePage = () => {
  return (
    <>
      <head>
        <title>David Mace - Éducateur comportementaliste canin</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <div className={"banner"}>
          <div>
            <Container data-scroll-index='1' style={{textAlign:'center'}}>
              <h1>David Macé</h1>
              <p>Éducateur comportementaliste canin</p>
            </Container>
          </div>
      </div>
      <Container data-scroll-index='2' style={{marginTop:'6rem', textAlign:'center', paddingBottom:'4rem'}}>
        <Row className="align-items-center text-center">
          <Col md={6}>
            <h2>Présentation</h2>
            <p>Le chien, comme chaque animal, a son propre langage et son propre univers. 
              Cela mène ainsi à des problèmes de communication entre l{"'"}homme et le chien. 
              C’est donc mon rôle d’aider les maitres et leurs chiens à établir cette communication.</p>
          </Col>
          <Col md={6}>
            <img src={placeholder_img} alt="dog" className="presentation-img" />
          </Col>
        </Row>
        <Row className="align-items-center text-center" style={{marginTop:'4rem'}}>
          <h2>
            Le comportementaliste
          </h2>
          <p>
            Le comportementaliste canin est un professionnel diplômé qui fait le lien entre le maitre et son chien.
            Il aide à mettre en place une communication saine et efficace entre les deux.
          </p>
        </Row>
        <Row className="align-items-center justify-content-center text-center" style={{marginTop:'2rem'}}>
          <Col md={3} style={{marginLeft:'1rem', marginRight:'1rem'}}>
            <img src={placeholder_img} alt="dog" className="presentation-img" />
          </Col>
          <Col md={3} style={{marginLeft:'1rem', marginRight:'1rem'}}>
            <img src={dog_with_woman} alt="dog" className="presentation-img" />
          </Col>
          <Col md={3} style={{marginLeft:'1rem', marginRight:'1rem'}}>
            <img src={placeholder_img} alt="dog" className="presentation-img" />
          </Col>
        </Row>
        <Row className="align-items-center text-center" style={{marginTop:'4rem'}}>
          <div style={{maxWidth:'400px', margin:'0 auto'}}> 
            <button className="button" onClick={() => window.location.href='/services'}>
              Découvrir mes services
            </button>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;