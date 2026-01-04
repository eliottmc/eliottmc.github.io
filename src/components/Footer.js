import React from "react";
import {Row, Col} from 'react-bootstrap';

import './Footer.css';

const Footer = () => {
    return (
        <footer style={{textAlign: 'center', padding: '1rem', backgroundColor: '#6F8F7E', color: '#F5F3EE', fontSize: '0.9rem', lineHeight: '0.8rem'}}>
            <Row style={{alignItems: 'center'}}>
                <Col md={6}>
                    <p>J{"'"}interviens à Paris et en proche banlieue.</p>
                    <p>Mail : <a href="mailto:contact@davidmace.fr" style={{"color":"#F5F3EE"}}>contact@davidmace.fr</a></p>
                    <p>Téléphone : 06 84 24 28 29</p>
                </Col>
                <Col md={6}>
                    <p>&copy; {new Date().getFullYear()} David Macé - Tous droits réservés.</p>
                    <p><a href="/legals" style={{"color":"#F5F3EE"}}>Mentions légales</a></p>
                    <p>Icon made by yut1655 from <a href="https://www.flaticon.com/" style={{"color":"#F5F3EE"}}>www.flaticon.com</a></p>
                    <p>Photos réalisées par Sylvie Biscioni</p>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;