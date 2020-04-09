import React from 'react';
import illustration from '../../../images/undraw_responsive.svg';
import './css/index.css';

export default () => (
    <div>
        <div className="m-auto xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-2/3 w-full mt-10 mb-3">
            <h3 className="font text-left px-4 py-3 sm:text-base">
            Ofrezco todo un diseño profesional para tu sitio web y una forma fácil y sencilla 
            para que puedas administrarla, del mismo modo todo podrá ser visto en cualquier dispositivo 
            sin ningún problema, adicionalmente puedo conseguirte de forma gráfica, como es que tu
            negocio se comporta con este servicio, y definitivamente incorporar y adaptar cualquier idea que tengas.
            </h3>
        </div>

        <div className="flex justify-center items-center py-6">
            <img src={illustration} draggable="false" alt="Computadora de escritorio" style={{ height: "230px" }}></img>
        </div>
    </div>
);