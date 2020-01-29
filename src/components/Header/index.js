import React from 'react';
import illustration from '../../images/undraw_absorbed.svg';

export default () => (
    <header className= "bg-blue-500">
        <div className= "container mx-auto p-4 max-w-4xl text-center">
                <div className="flex-1 ">
                    <h1 className="font-bold text-white text-5xl">
                            
                    </h1>
                    <p className= "text-xl text-blue-100 my-1 mb-2 ">Desarrollo aplicaciones web</p>
                </div>
            <div className= "flex justify-center items-center">
                <img src={illustration} alt ="Persona leyendo mientras camina" style={{height: "300px"}}></img>
            </div>
            <div>
            <label htmlFor="contact-content" 
                   className="block text-blue-100 text-xl py-4">
                    Construyo y diseño sitios web compatibles con los distintos dispositivos.
            </label>
        </div>
         </div>
    </header>
);