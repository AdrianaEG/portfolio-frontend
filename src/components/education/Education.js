import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './Education.css';

function Education() {
    const [education, setEducation] = useState({});
    useEffect(()=>{
        axios.get('https://backendportfolio-adri.herokuapp.com/education')
        .then(
            res=>setEducation(res.data)
        )
    }, [setEducation])
    return(
        <div className="card" id="education">
            <div className="content-title">
                <h1 className="title">Educación</h1>
                <img src="https://www.flaticon.com/svg/static/icons/svg/2987/2987867.svg" className="icon" alt="education"></img>
            </div>
            <div className="content-education">
                {education.length && education.map((edu, index)=>
                    <div className="card-education">
                        <div className="content-title-img">
                            <div>
                                <h2>{edu.title}</h2>
                                <p>{edu.description_title}</p>
                            </div>
                            <img src={edu.logo} alt="logo de la institución educativa"/>
                        </div>
                        <h4>{edu.state}</h4>
                        <p>{edu.date}</p>
                        <p className="description-education">{edu.description}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Education;