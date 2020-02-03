import React from "react";

export default (props) => {
    return (
        <div className="w-1/2 xl:w-1/4 lg:w-1/3 md:w-1/3 sm:w-1/2 all p-5">
            <a href= {props.repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer">
                <div className="p-4 mx-2 flex-row text-center border-solid border-2 border-gray-300 rounded-lg hover:border-blue-600 tarjet-shadow">
                    <h4 className="text-blue-700 font-bold truncate mb-2">
                        {props.repo.name}
                    </h4>
                    <div className="text-sm overflow-y-hidden truncate"
                        style={{ height: "1.5em" }}>
                        {props.repo.description}
                        {<p>Sin descripción</p>}
                    </div>
                </div>
            </a>
            <style>
                {`
            .tarjet-shadow{
                box-shadow: 2px 2px 3px 0px rgb(226, 226, 246);
            }
        `}
            </style>
        </div>
    );
};



