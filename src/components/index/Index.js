import React from 'react';
import './Index.css';
function Index(){
    return(
        <div className="content-index">
            <div className="title-image">
                <img src="https://avatars0.githubusercontent.com/u/45184284?s=460&u=9071a18c4b8368e15581a3287eab0e551aab3af6&v=4" alt="imagen de perfil" className="img-profile"></img>
                <h1 className="title">Hello World!</h1>
            </div>
            <div className="description">
                <div className="line"></div>
                <div className="datos">
                    <h3 className="name">Adriana Elizabeth Gonzalez</h3>
                    <h5 className="job">Desarrolladora Web Full Stack</h5>
                    <div className="location">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/3732/3732142.svg" alt="icono ubicación"></img>
                        <p>San Luis, Argentina</p>
                    </div>
                </div>
            </div>
            
            <div className="skills">
                <div>
                    <img src="https://img.icons8.com/dusk/64/000000/html-5.png"/>
                    <p>Html5</p>
                </div>
                <div>
                    <img src="https://img.icons8.com/dusk/64/000000/css3.png"/>
                    <p>CSS3</p>
                </div>
                <div>
                    <img src="https://img.icons8.com/dusk/64/000000/javascript.png"/>
                    <p>Javascript</p>
                </div>
                <div>
                    <img src="https://img.icons8.com/dusk/64/000000/react.png"/>
                    <p>React</p>
                </div>
                <div>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/1199/1199129.svg"></img>
                    <p>MySql</p>
                </div>
                <div>
                    <img src="https://www.shareicon.net/data/512x512/2016/06/19/603784_nodejs_512x512.png"></img>
                    <p>Node</p>
                </div>
                <div>
                    <img src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/3556671901536211770-512.png"></img>
                    <p>Cypress</p>
                </div>
                
            </div>

            <button><i class="fas fa-download"></i>Descargar CV</button>
            
            <div className="redes">
                <div>
                    <a href="https://github.com/AdrianaEG">Ver perfil en GitHub</a>
                    <img src="https://img.icons8.com/dusk/64/000000/github.png"/>
                </div>
                <div>
                    <a href="https://github.com/AdrianaEG">Ver perfil en Linkedin</a>
                    <img src="https://img.icons8.com/dusk/64/000000/linkedin.png"/>
                </div>
            </div>
        </div>
    )
}

export default Index;