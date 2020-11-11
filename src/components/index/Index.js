import React from 'react';
import './Index.css';
function Index(){
    return(
        <div className="content-index">
            <div className="title-image">
                <img src="https://i.ibb.co/rcr5ZXy/myAvatar.png" alt="imagen de perfil" className="img-profile"></img>
                <h1>Hello World!</h1>
            </div>
            <div className="description">
                <div className="separator"></div>
                <p>Mi nombre es Adriana Gonzalez soy Desarrolladora Web Full Stack</p>
            </div>
            

            <button>Descargar CV</button>
            <p>Icono de linkedin</p>
            <p>Icono de GitHub</p>
        </div>
    )
}

export default Index;