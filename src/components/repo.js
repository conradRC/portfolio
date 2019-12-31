import React from "react";


export default (props) => {
  return(
    <div class="w-1/2 xl:w-1/4 lg:w-1/3 md:w-1/3 sm:w-1/2 all p-5 effects">
        <div class="p-4 mx-2 flex-row tarjet-shadow bg-white rounded-lg relative">
            <div className="text-center ">
                <h4 className="text-blue-700 font-bold truncate mb-2">
                    {props.repo.name}
                </h4>
                <div className="text-sm overflow-y-hidden truncate" 
                    style={{height:"1.5em"}}>
                    {props.repo.description}
                    {<p>Sin descripción</p>}
                 </div>
            </div> 
                <a href= {props.repo.html_url} 
                    className="absolute inset-0 pt-1 rounded-lg bg-white tarjet-shadow " 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <div className="bg-blue-600 mt-6 py-1 mx-16 rounded text-white text-center ">
                        Ver    
                    </div>
                </a>
        </div>
    </div>
  );
};



