import React from 'react';
import illustration from '../../../images/undraw_responsive.svg';
import './css/index.css';

export default () => (
    <div>
        
        <div className="m-auto w-6/12 mt-10 mb-3">
            <p className="font text-center p-3">
                Soy Conrado y vivo en Oaxaca-México y
                actualmente soy estudiante en el ITO.
                En mi tiempo libre me gusta aprender música, ver series y
                leer distintas fuentes de información con la intención de mantenerme siempre actualizado.
            </p>
        </div>

        <div className="flex justify-center items-center py-6">
            <img src={illustration} alt="Computadora de escritorio" style={{ height: "230px" }}></img>
        </div>

    </div>
);