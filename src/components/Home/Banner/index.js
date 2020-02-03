import React from 'react';
import illustration from '../../../images/undraw_responsive.svg';
import './css/index.css';

export default () => (
    <div>
         <div className="flex justify-center">
            <button className="button-about text-blue-600 px-8 py-4 my-10 rounded-lg font-bold bg-white text-center text-2xl hover:bg-blue-500 hover:text-white">
               Acerca de mi
            </button>
        </div>

        <div className="m-auto mb-6 w-6/12">
            <p className="text-blue-700 font-serif text-center pt-6">
                Soy Conrado y vivo en Oaxaca-México.
                Actualmente soy estudiante en el ITO.
                En mi tiempo libre me gusta aprender música, ver series y
                leer distintas fuentes de información con la intención de mantenerme siempre actualizado.
            </p>
        </div>

        <div className="flex justify-center items-center py-6">
            <img src={illustration} alt="Persona leyendo mientras camina" style={{ height: "250px" }}></img>
        </div>

    </div>
);