import React from 'react';
import Navigation from '../component/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
        <div className="contactContent">
          <div className="header"></div>
          <div className="contactBox">
            <h1>Contactez-moi</h1>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Paris</span>
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                <CopyToClipboard text="0664001824">
                  <span 
                  className="clickInput" 
                  onClick={() => { alert('Téléphone copié !');}} >
                    0642844284
                  </span>
                </CopyToClipboard>
              </li>
              <li>
                <i className="far fa-envelope"></i>
                <CopyToClipboard text="dominique-leroy1@hotmail.fr">
                  <span 
                  className="clickInput" 
                  onClick={() => { alert('Email copié !');}} >
                    dominique-leroy1@hotmail.fr
                  </span>
                </CopyToClipboard>
              </li>
            </ul>
          </div>
          <div className="socialNetwork">
            <ul>
              <a href="http://www.google.com" target="_blank" rel="nooepener noreferrer">
                <h4>LinkedIn</h4>
                <i className="fab fa-linkedin"></i>
              </a>
            </ul>
            <ul>
              <a href="http://www.google.com" target="_blank" rel="nooepener noreferrer">
                <h4>Github</h4>
                <i className="fab fa-github"></i>
              </a>
            </ul>
            <ul>
              <a href="http://www.google.com" target="_blank" rel="nooepener noreferrer">
                <h4>Twitter</h4>
                <i className="fab fa-twitter"></i>
              </a>
            </ul>
            <ul>
              <a href="http://www.google.com" target="_blank" rel="nooepener noreferrer">
                <h4>CodePen</h4>
                <i className="fab fa-codepen"></i>
              </a>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default Contact;