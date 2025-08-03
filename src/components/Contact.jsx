import React from 'react';
import '../styles/contactstyle.css';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-info">
        <div className="contact-item phone">
          <h3>Telefon</h3>
          <p>+46 793-57 31 95</p>
        </div>
        <div className="contact-item address">
          <h3>Adress</h3>
          <p>Trollebergsvägen 24D<br />222 30 Lund</p>
        </div>
        <div className="contact-item email">
          <h3>E-post</h3>
          <p><a href="mailto:emelie046@gmail.com">emelie046@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
