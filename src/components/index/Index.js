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
                <img src="https://i.ibb.co/3WcLgK1/Dise-o-sin-t-tulo-1.gif" className="img-profile"></img>
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
                                <p>{skill}</p>
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
                    <p>{skill}</p>
                )}
                
            </div>

            <button><i class="fas fa-download"></i>Descargar CV</button>
            
            <div className="redes">
                <div>
                    <a href={information.github} target="_blank">Ver perfil en GitHub</a>
                    <img src="https://img.icons8.com/dusk/64/000000/github.png"/>
                </div>
                <div>
                    <a href={information.linkedin} target="_blank">Ver perfil en Linkedin</a>
                    <img src="https://img.icons8.com/dusk/64/000000/linkedin.png"/>
                </div>
            </div>
            

        </div>
    )
}

export default Index;