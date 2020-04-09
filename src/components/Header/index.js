import React from 'react';
import illustration from '../../images/undraw_absorbed.svg';

export default () => (
    <header className="bg-blue-500">
        <div className="container mx-auto p-4 max-w-4xl text-center">
            <h1 className="font-bold text-white text-4xl">
                ¡Hola!
            </h1>
            <p className="text-blue-100 my-1 mb-2 font-semibold">Soy un diseñador web</p>
            <div className="flex justify-center items-center mb-4">
                <img src={illustration} draggable="false" alt="Persona leyendo mientras camina" style={{ height: "300px" }}></img>
            </div>
            <label htmlFor="contact-content" 
                   className="block text-blue-100 py-2 pb-3 ">
                    Construyo y diseño sitios web totalmente adaptables a tus dispositivos.
            </label>
        </div>
    </header>
);