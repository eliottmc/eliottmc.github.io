import React from "react";
import {Container, Row, Col} from 'react-bootstrap';

import '../styles/Tarifs.css';

import maliboo from '../assets/pictures_gaston_david/maliboo_chien_heureux_education_positive.webp';
import icon from '../assets/niche.webp';

const Tarifs = () => {
  return (
    <>
    <head>
        <title>David Macé - Éducateur comportementaliste canin</title>
        <meta name="description" content="Tarifs clairs pour l’éducation et le comportement canin à Paris. 
        Séances à domicile ou en extérieur, adaptées à chaque chien et à son humain."></meta>
        <link rel="icon" href={icon}/>
      </head>
      <div className={"banner"}>
        <div>
          <Container data-scroll-index='1' style={{textAlign:'center'}}>
            <h1>Tarifs</h1>
          </Container>
        </div>
      </div>
      <Container data-scroll-index='2'>
        <div className="presta-container">
        <div style={{marginBottom:'3rem', textAlign:'justify'}}>
              <p style={{marginBottom:'0'}}>Je vous propose un échange téléphonique gratuit d’environ <b>dix minutes</b>, durant lequel vous
                  pourrez m’exposer votre situation, vos attentes et vos difficultés.</p>
              <p style={{marginBottom:'0'}}>Cet échange permet de faire un premier point sur votre situation.</p>
        </div>
          <Row className="">
            <Col md={8}>
            <div style={{marginBottom:'3rem'}}>
              <h4 style={{fontFamily:"abril"}}>Tarifs</h4>
                <span style={{fontFamily:"abril"}}>Séance éducative, comportementale ou préparation à l{"'"}adoption</span>
                <p><b>Durée : environ 1 heure — Tarif : 60 €</b></p>
                <span style={{fontFamily:"abril"}}>Bilan éducatif et comportemental</span>
                <p><b>Durée : environ 2 heures — Tarif : 150 €</b></p>
              <p>Les frais de déplacement ainsi qu’un compte rendu écrit de séance sont inclus dans ces tarifs.</p>
            </div>
            <div style={{marginBottom:'3rem'}}>
              <h4 style={{fontFamily:"abril"}}>Conditions particulières</h4>
              <p>Une majoration de <b>25 %</b> est appliquée pour les rendez-vous :</p>
              <ul>
                <li>après 20h,</li>
                <li>le dimanche,</li>
                <li>et les jours fériés</li>
              </ul>
              <p><b>Les séances en visioconférence et les créneaux en horaires décalés font l’objet d’un paiement à l’avance.</b></p>
            </div>
            </Col>
            <Col md={4}>
              <img src={maliboo} alt="chien-heureux-education-positive" className="tarif_img" />
            </Col>
            </Row>
            <div style={{marginBottom:'3rem'}}>
              <h4 style={{fontFamily:"abril"}}>Adoption en refuge/association</h4>
              <p>Une remise de <b>20 %</b> est proposée :</p>
              <ul>
                <li>sur le <b>bilan</b></li>
                <li>ou sur la <b>première séance</b> (éducative, comportementale ou préparation à l’adoption)</li>
              </ul>
              <p>pour les chiens adoptés en refuge ou en association, sur présentation d’un justificatif.</p>
            </div>
            <Row className="align-items-center text-center" style={{marginTop:'4rem', paddingBottom:'4rem'}}>
              <div style={{display:'flex', justifyContent:'center'}}> 
                <button className="button" onClick={() => window.location.href='/contact'}>
                  Premier échange gratuit
                </button>
              </div>
            </Row>
            </div>
      </Container>
    </>
  );
};

export default Tarifs;