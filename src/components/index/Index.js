import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './Index.css';
import Loguito from '../Loguito';

function Index(){
    const [information, setInformation] = useState({});
    const [loading, setLoading] = useState(false);

    const informationFunction = async()=>{
        try{
            const data = await axios
            .get('https://backendportfolio-adri.herokuapp.com/index')
            .then(res=>{
                setInformation(res.data[0])
            });
            setLoading(true)
        } catch(e){
            console.log(e)
        }
    };
    useEffect(()=>{
        informationFunction();
    }, [])
   
    return(
        <div className="card" id="index">
            <div className="title-image">
                <img src="https://i.ibb.co/5R8GMvJ/Dise-o-sin-t-tulo-1.gif" className="img-profile" alt="Foto de perfil"></img>
                <div>
                    <div className="description-desktop">
                        <div className="line"></div>
                        {loading ? <div className="datos">
                            <h3 className="name">{information.name}</h3>
                            <h5 className="job">{information.job}</h5>
                            <div className="location">
                                <img src="https://www.flaticon.com/svg/static/icons/svg/3732/3732142.svg" alt="icono ubicación"></img>
                                <p>{information.location}</p>
                            </div>
                            <div className="skills">
                            
                                {information.skills && information.skills.map((skill, index)=>
                                <p key={index}>{skill}</p>
                                )}
                            
                            </div>

                        </div>
                        : (
                            <Loguito />
                        )}
                   </div>

                </div>   
            </div>
            
            
            <div className="description">
            {loading ? <div className="description-mobile">
            <div className="line"></div>
                <div className="datos">
                    <h3 className="name">{information.name}</h3>
                    <h5 className="job">{information.job}</h5>
                    <div className="location">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/3732/3732142.svg" alt="icono ubicación"></img>
                        <p>{information.location}</p>
                    </div>
                </div>
                </div>
            : <Loguito />}
                
            </div>

            
            
            <div className="skills oculto-desktop">
            
                {information.skills && information.skills.map((skill, index)=>
                    <p key={index}>{skill}</p>
                )}
                
            </div>

            <button><a href="https://drive.google.com/file/d/1vNRXVmuidmuwU5pApOvgcbw9ZwVegnsM/view?usp=sharing" target="_blank" rel="noopener" download><i className="fas fa-download"></i>Descargar CV</a></button>
            
            <div className="redes">
                <div>
                    <a href={information.github} target="_blank" rel="noopener">Ver perfil en GitHub</a>
                    <img src="https://img.icons8.com/dusk/64/000000/github.png" alt="Ir a Github"/>
                </div>
                <div>
                    <a href={information.linkedin} target="_blank" rel="noopener">Ver perfil en Linkedin</a>
                    <img src="https://img.icons8.com/dusk/64/000000/linkedin.png" alt="Ir a Linkedin"/>
                </div>
            </div>
            

        </div>
    )
}

export default Index;