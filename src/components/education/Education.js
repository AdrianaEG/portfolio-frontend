import React from 'react';
import './Education.css';

function Education() {
    return(
        <div className="card" id="education">
            <div className="content-title">
                <h1 className="title">Educación</h1>
                <img src="https://www.flaticon.com/svg/static/icons/svg/2987/2987867.svg" className="icon" alt="education"></img>
            </div>
            <div className="content-education">
                <div className="card-education">
                    <div className="content-title-img">
                        <div>
                            <h2>Digital house</h2>
                            <p>Desarrollo web Full stack</p>
                        </div>
                        <img src="https://www.digitalhouse.com/wp-content/uploads/2018/04/logo_vertical.png"></img>
                    </div>
                    <h4>Finalizado</h4>
                    <p>Mayo 2020 - Octubre 2020 </p>
                    <p className="description-education">Desarrollo de un E-commerce desde cero, trabajando en equipo, aplicando la metodológia de trabajo Scrum. Tecnologías utilizadas: NodeJs, React, Javascript, Html5, Css3, Mysql, Sequelize. Creación de Apis, consumo de Apis</p>
                </div>

                <div className="card-education">
                    <div className="content-title-img">
                        <div>
                            <h2>Unvime</h2>
                            <p>Analista en Sistemas</p>
                        </div>
                        <img src="https://i1.wp.com/www.unvime.edu.ar/wp-content/uploads/2018/04/logo-unvime-blanco-pie.png?w=1080&ssl=1"></img>
                    </div>
                    <h4>En curso</h4>
                    <p>2017 - Actualidad </p>
                    <p className="description-education">
                        Universidad Nacional de Villa Mercedes. Cursada finalizada - 20/30 materias aprobadas. Entre ellas base de datos(Mysql), algoritmos y estructura de datos, Planeamiento y Control de Gestión, entre otras. 
                    </p>
                </div>

                <div className="card-education">
                    <div className="content-title-img">
                        <div>
                            <h2>Digital house</h2>
                            <p>Desarrollo web Full stack</p>
                        </div>
                        <img src="https://www.digitalhouse.com/wp-content/uploads/2018/04/logo_vertical.png"></img>
                    </div>
                    <h4>Finalizado</h4>
                    <p>2020 - 2020 </p>
                    <p className="description-education">Desarrollo de un E-commerce desde cero, trabajando en equipo, aplicando la metodológia de trabajo Scrum. Tecnologías utilizadas: NodeJs, React, Javascript, Html5, Css3, Mysql, Sequelize. Creación de Apis, consumo de Apis</p>
                </div>

                <div className="card-education">
                    <div className="content-title-img">
                        <div>
                            <h2>Digital house</h2>
                            <p>Desarrollo web Full stack</p>
                        </div>
                        <img src="https://www.digitalhouse.com/wp-content/uploads/2018/04/logo_vertical.png"></img>
                    </div>
                    <h4>Finalizado</h4>
                    <p>2020 - 2020 </p>
                    <p className="description-education">Desarrollo de un E-commerce desde cero, trabajando en equipo, aplicando la metodológia de trabajo Scrum. Tecnologías utilizadas: NodeJs, React, Javascript, Html5, Css3, Mysql, Sequelize. Creación de Apis, consumo de Apis</p>
                </div>
            </div>
        </div>
    )
}

export default Education;