import React from 'react';
import './Contact.css';

function Contact(){
    return(
        <div className="card" id="contact">
            <div className="content-title">
                <h1 className="title">Datos de contacto</h1>
                <img src="https://www.flaticon.com/svg/static/icons/svg/3062/3062634.svg" className="icon" alt="Datos de contacto"></img>
            </div>
            <div className="form-contact">
                <a href="mailto:adriana.ngc438@gmail.com"><img src="https://img.icons8.com/doodle/48/000000/gmail.png" alt="contactar via mail"/></a>
                <a href="https://www.linkedin.com/in/adriana-gonzalez-elizabeth/" target="_blank" rel="noopener"><img src="https://img.icons8.com/doodle/48/000000/linkedin--v2.png" alt="Ir a Linkedin"/></a>
                <a href="https://github.com/adrianaEG" target="_blank" rel="noopener"><img src="https://img.icons8.com/doodle/48/000000/github--v1.png" alt="Ir a Github"/></a>
            </div>
        </div>
    )
}
export default Contact;