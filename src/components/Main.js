import React, { Component } from 'react'
import style from './style.css';


class Main extends React.Component { //haga una herencia de todo lo que tenga react.componente
    render() {
        return (
            
            <div class="col-md-4">
                <div class="card profile-card-2">
                <div class="card-img-block">
                    <img src="https://4.bp.blogspot.com/-a5IPWzJRYX8/TlUpw2S-KXI/AAAAAAAAAOY/Urhe08BUjCU/s1600/FONDO+CELESTE.jpg" class=" card-img-top" width="90" height="90" />
                    <div class="col-md ">
                    <img src="https://scontent.feoh1-1.fna.fbcdn.net/v/t1.0-9/p960x960/55786328_3050066351685777_4116318144207781888_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=buDbdhAtDy8AX9BUWhK&_nc_ht=scontent.feoh1-1.fna&_nc_tp=6&oh=d21382c076fc6e910fd0e23ce5c53944&oe=5EA6175A" alt="profile-image " class="profile rounded-circle "  width="100" height="100" />
                        </div>
                    <div class="card-content ">
                        <h2>Derly Murcia</h2>
                        <p>Sábado, 28 de marzo de 2020</p>
                        </div>
                        <div class="card-text ">
                        <p>Ingeniera de sistemas, Desarrolladora Web Front-End con énfasis en React.js, HTML, CSS y JavaScript; con habilidades para planear, diseñar e implementar sistemas de información. Soy una profesional proactiva, con buenas relaciones interpersonales y alta motivación por aprender.  </p>
                        </div>
                        <div class="col ">
                            <a href="#" class="card-link">Leer más...</a>
                            <a href="#" class="card-icono">37</a>
                            
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" alt="profile-image" class="rounded-circle card-icono"  />


                        </div>
                    </div>

                </div>
                <p class="mt-3 w-100 float-left text-center"><strong>Profile Card</strong></p>
            </div>
           
            
        )
    }
}

export default Main; //exportable porque lo necesito en otro lugar 