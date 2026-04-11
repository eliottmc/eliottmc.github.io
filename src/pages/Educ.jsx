import React from 'react';
import {Container, Row} from 'react-bootstrap';

import '../styles/Educ.css';

import gaston_other_dog from '../assets/pictures_gaston_david/chien_heureux_ville_paris_education_positive.webp';
import closeup_david_gaston from '../assets/pictures_gaston_david/chien_maitre_serein_education_positive.webp';
import icon from '../assets/niche.webp';

const Educ = () => {
  return (
    <>
      <head>
        <title>David Macé - Éducateur comportementaliste canin</title>
        <link rel="icon" href={icon}/>
      </head>
      <div className={"banner"}>
          <div>
            <Container data-scroll-index='1' style={{textAlign:'center'}}>
              <h1>L{"'"}éducation positive en ville</h1>
            </Container>
          </div>
      </div>
      <Container data-scroll-index='2'>
        <div className='container-educ'>
        <Row className="text-row" style={{marginBottom:'2rem'}}>
          <h3>
            Vivre avec un chien en milieu urbain
          </h3>
          <p>
            La ville impose des contraintes spécifiques aux chiens… et à leurs humains.
            Bruit, foule, promiscuité, transports, croisements fréquents, manque d’espaces naturels : le
            quotidien d’un chien à Paris est très différent de celui d’un chien vivant à la campagne.
            Pourtant, <b>un chien peut parfaitement s’épanouir en ville</b>, à condition que ses besoins
            fondamentaux soient compris et respectés, et que la relation avec son humain soit claire,
            cohérente et apaisée. C’est précisément dans ce contexte que l’éducation positive prend tout son sens.</p>
        </Row>
        <div style={{textAlign:'center', marginBottom:'2rem'}}>
          <img src={gaston_other_dog} alt="chien-heureux-ville-paris-education-positive" className="educ_img" />
        </div>
        <Row className="text-row" style={{marginBottom:'2rem'}}>
          <h3>
            Qu’est-ce que l’éducation positive ?
          </h3>
          <p>L’éducation positive repose sur des méthodes <b>non coercitives</b>, qui excluent :
            <ul>
                <li>la contrainte physique;</li>
                <li>la douleur;</li>
                <li>la peur;</li>
                <li>l{"'"}intimidation.</li>
            </ul>
            Elle vise à apprendre au chien <b>quoi faire</b>, plutôt que de le punir pour ce qu’il fait “mal”.
            On s’appuie sur la compréhension des comportements, la motivation, la répétition et la
            cohérence.
            Contrairement aux idées reçues, ce n’est <b>ni du laxisme</b>, ni une absence de règles.
            C’est une éducation structurée, exigeante, mais respectueuse. Un chien a besoin de règles pour son équilibre.
          </p>
        </Row>
        <Row className="text-row" style={{marginBottom:'2rem'}}>
          <h3>
            Une méthode pour les chiens citadins
          </h3>
          <p>En ville, le chien est déjà soumis à de nombreuses contraintes : laisse, règles strictes, espaces limités, stimulations constantes.
            Ajouter de la contrainte éducative (colliers coercitifs, réprimandes, mises en échec) augmente souvent le stress, les réactions émotionnelles
            et les comportements gênants (aboiements, réactivité, peurs). L{"'"}éducation positive permet au contraire de <b>réduire la pression</b>, 
            d{"'"}installer de la compréhension et la prévisibilité dans un environnement déjà exigeant.</p>
        <p>Beaucoup de problématiques rencontrées en ville ne sont pas des problèmes de “désobéissance”, mais :
            <ul>
                <li>des problèmes de communication;</li>
                <li>des incompréhensions mutuelles;</li>
                <li>une mauvaise lecture des signaux.</li>
            </ul>
            Proxémie, gestion des distances, accueil des visiteurs, croisements en laisse, solitude, excitation sont autant
            de situations où <b>le chien communique</b>, parfois maladroitement.</p>
        <p>L{"'"}éducation positive aide l{"'"}humain à :
            <ul>
                <li>mieux lire son chien;</li>
                <li>adapter ses réactions;</li>
                <li>envoyer des messages clairs et cohérents.</li>
            </ul>
        </p>
        <h3>Le plaisir d{"'"}apprendre</h3>
        <p>Un chien n{"'"}a pas seulement besoin de se dépenser physiquement. Il a aussi besoin de : 
            <ul>
                <li>de stimulation mentale;</li>
                <li>d{"'"}apprentissage;</li>
                <li>de résolution de problèmes;</li>
                <li>d{"'"}interactions de qualité.</li>
            </ul>
            En ville, l{"'"}apprentissage devient un <b>véritable outil d{"'"}équilibre</b> : apprendre à 
            marcher en laisse sans tension, à attendre, se poser et gérer ses émotions.
        </p>
        <p>Apprendre, pour un chien, c{"'"}est <b>comprendre le monde dans lequel il vit.</b></p>
        </Row>
        <Row className="text-row" style={{marginBottom:'2rem'}}>
          <h3>
            Renforcer le lien humain-chien
          </h3>
          <p>L’éducation positive repose sur l’implication de l’humain, elle demande du temps, de la constance et de l’investissement.
            En retour, elle permet :
            <ul>
                <li>de renforcer le lien;</li>
                <li>de créer une relation de confiance;</li>
                <li>d{"'"}installer un quotidien plus serein.</li>
            </ul>
            Les séances ne consistent pas à “dresser” un chien, mais à <b>vous rendre autonome</b>, capable de comprendre et d’accompagner votre compagnon dans la durée.
          </p>
        </Row>
        <div style={{textAlign:'center', marginBottom:'2rem'}}>
          <img src={closeup_david_gaston} alt="chien-maitre-serein-education-positive" className="educ_img" />
        </div>
        <Row className="text-row">
          <h3>
            Une approche adaptée à Paris
          </h3>
          <p>L{"'"}éducation positive que je propose n’est pas théorique, elle est pensée pour : les appartements, les trottoirs, 
            les parcs urbains, les transports, la vie réelle à Paris.
            Chaque chien, chaque humain, chaque situation est différente. Il n’existe pas de méthode universelle, 
            mais des <b>outils adaptés</b>, ajustés à votre quotidien.
          </p>
          <p>Cette approche est particulièrement adaptée si :
            <ul>
                <li>vous souhaitez comprendre votre chien plutôt que le contraindre;</li>
                <li>vous êtes prêt•e à investir dans son éducation;</li>
                <li>vous cherchez des solutions durables pas des recettes miracles.</li>
            </ul>
          </p>
        </Row>
        </div>
      </Container>
    </>
  );
};

export default Educ;