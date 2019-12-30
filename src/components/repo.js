import React from "react";


export default (props) => {
  return(
    <div class="w-1/2 xl:w-1/4 lg:w-1/3 md:w-1/3 sm:w-1/2 all p-4">
        <div class="h-24 px-6 flex-row tarjet-shadow bg-gray-100 pb-5">
            <div className="text-center">
                <h4 className="text-blue-700 font-bold pt-2 truncate">
                    {props.repo.name}
                </h4>
                <div className="text-sm overflow-y-hidden truncate " 
                     style={{height:"1.5em"}}>
                    {props.repo.description}
                    {<p>Sin descripción</p>}
                 </div>
                 <a href= {props.repo.html_url} 
                    className="text-white rounded bg-blue-600 block mt-2" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    Ver
                </a>
            </div> 

        </div>
    </div>
  );
};



