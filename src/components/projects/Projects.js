import React from 'react';
import './Projects.css'
function Projects (){
    return(
        <div className="card" id="projects">
            <div className="content-title">
                <h1 className="title">Mis Proyectos</h1>
                <img src="https://www.flaticon.com/svg/static/icons/svg/2909/2909653.svg" className="icon" alt="projects"></img>
            </div>
            
            <div className="content-projects">
                <div className="card-project">
                    <img src="https://i.ibb.co/d6Ds62K/simon-dice.png" alt="imagen de proyecto"></img>
                    <h3>Simón dice - Juego de memoria</h3>
                    <p>Juego de memoria desarrollado en Javascript, Html5 y Sass(Scss)</p>
                    <div className="link-project">
                        <a href="https://adrianaeg.github.io/simon-says/" target="_blank"> Ver demo </a>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/2909/2909653.svg" className="icon" alt="projects"></img>
                    </div>
                    <div className="link-project">
                        <a href="https://github.com/AdrianaEG/memotest-v1" target="_blank"> Ver código en Github</a>
                        <img className="icon" src="https://img.icons8.com/dusk/64/000000/github.png"/>
                    </div>
                    
                </div>

                <div className="card-project">
                    <img src="https://i.ibb.co/ypkx0jV/clon-spotify.png" alt="imagen de proyecto"></img>
                    <h3>Clon Spotify</h3>
                    <p>Maquetado en Css</p>
                    <div className="link-project">
                        <a href="https://adrianaeg.github.io/spotify/" target="_blank"> Ver demo </a>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/2909/2909653.svg" className="icon" alt="projects"></img>
                    </div>
                    <div className="link-project">
                        <a href="https://github.com/AdrianaEG/spotify" target="_blank"> Ver código en Github</a>
                        <img className="icon" src="https://img.icons8.com/dusk/64/000000/github.png"/>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default Projects; 