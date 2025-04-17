import React from 'react';
import './Footer.css';


const Footer = () => { 
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Genesys. All rights reserved. &nbsp; | &nbsp; The Genesys logo is a registered trademark &reg;</p>
    </footer>
  );
}
export default Footer;  
