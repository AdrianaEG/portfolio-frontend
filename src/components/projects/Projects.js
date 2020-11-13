import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './Projects.css';

function Projects (){
    const [projects, setProjects] = useState({});
    useEffect(()=>{
        axios.get('https://backendportfolio-adri.herokuapp.com/projects')
        .then(
            res => setProjects(res.data)
        )
    }, [setProjects])
    return(
        <div className="card" id="projects">
            <div className="content-title">
                <h1 className="title">Mis Proyectos</h1>
                <img src="https://www.flaticon.com/svg/static/icons/svg/2909/2909653.svg" className="icon" alt="projects"></img>
            </div>
            
            <div className="content-projects">
                {projects.length && projects.map((project, index)=>
                    <div className="card-project">
                        <img src={project.image} alt="imagen del proyecto"/>
                        <h3>{project.name}</h3>
                        <p>{project.descripcion}</p>
                        <div className="link-project">
                            <a href={project.demo} target="_blank"> Ver demo </a>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/2909/2909653.svg" className="icon" alt="projects"></img>
                        </div>
                        <div className="link-project">
                            <a href={project.code} target="_blank"> Ver código en Github </a>
                            <img className="icon" src="https://img.icons8.com/dusk/64/000000/github.png"/>
                        </div>
                    </div>
                )}
      
            </div>
            
        </div>
    )
}

export default Projects; 