import React from "react";

const Footer = () => {
    return (
        <footer style={{textAlign: 'center', padding: '1rem', backgroundColor: '#2a3281', color: '#ffffff'}}>
            <p>&copy; {new Date().getFullYear()} Mon Site de Dressage Canin. Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;