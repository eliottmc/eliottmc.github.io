import React from "react";

const Footer = () => {
    return (
        <footer style={{textAlign: 'center', padding: '1rem', backgroundColor: '#6F8F7E', color: '#ffffff'}}>
            <p>&copy; {new Date().getFullYear()} Mon Site de Dressage Canin. Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;