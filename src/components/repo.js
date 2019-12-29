import React from "react";
export default (props) => (
    
<li className="rounded-lg mb-8 pb-7 mx-5 p-4 tarjet-shadow bg-gray-100 effects">
<div className=" text-center">
    <h4 className="text-blue-700 font-bold truncate">
        {props.repo.name}
    </h4> 
    <div className="text-sm overflow-y-hidden truncate " 
        style={{height:"1.5em"}}>
        {props.repo.description}
        {<p>Sin descripción</p>}
    </div>
    
    <a href= {props.repo.html_url} 
        className="text-white rounded bg-blue-600 block mt-2 mb-1 none" 
        target="_blank" 
        rel="noopener noreferrer">
        Ver
    </a>
</div>
</li>
);

