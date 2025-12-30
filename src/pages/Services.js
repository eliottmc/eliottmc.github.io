import React from "react";
import {Container, Row} from 'react-bootstrap';

const Services = () => {
  return (
    <>
    <head>
        <title>David Macé - Éducateur comportementaliste canin</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <div className={"banner"}>
        <div>
          <Container data-scroll-index='1' style={{textAlign:'center'}}>
            <h1>Services</h1>
            <h3>Outre les problèmes comportementaux habituels, je propose également des services particuliers</h3>
          </Container>
        </div>
      </div>
      <Container data-scroll-index='2' style={{marginTop:'6rem', textAlign:'center', paddingBottom:'4rem'}}>
        <div>
          <div style={{marginTop:'3rem'}}>
            <div style={{marginTop:'1rem'}}>
              <h4>Aide au choix de la race du chiot et à la préparation de son accueil</h4>
              <p>Description du service</p>
            </div>
            <div style={{marginTop:'1rem'}}>
              <h4>Aide spécifique aux chiens venus de refuge</h4>
              <p>Description du service</p>
            </div>
            <div style={{marginTop:'1rem'}}>
              <h4>Adaptation des séniors</h4>
              <p>Description du service</p>
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

export default Services;