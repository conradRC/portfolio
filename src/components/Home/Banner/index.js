import React from 'react';
import illustration from '../../../images/undraw_responsive.svg';
import './css/index.css';

export default () => (
    <div>
        
        <div className="m-auto xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-2/3 w-full mt-10 mb-3">
            <p className="font text-center px-8 py-3 text-sm sm:text-lg ">
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