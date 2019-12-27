import React from 'react';
import illustration from '../images/undraw_absorbed.svg';

export default () => (
    <header className= "bg-gray-300">
        <div className= "container mx-auto p-12 max-w-4xl">
            <div className= "flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-purple-700 text-6xl">
                        ¡Hola, yo soy Conrado!                    
                    </h1>
                    <p className= "text-xl">Desarrollo de aplicaciones web</p>
                </div>
                <img src={illustration} alt ="Persona leyendo mientras camina" style={{height: "300px"}}></img>
            </div>
            <div>
            <label htmlFor="contact-content" className="block text-gray-700 text-sm font-bold mb-2">
                Aprendiendo día con día lo mejor, para ti.
            </label>
        </div>
         </div>
        
    </header>
);