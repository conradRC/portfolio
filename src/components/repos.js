import React from "react";
import repos from '../data/repos';
import Repo from './repo';
import icongit from '../images/icons/icons-git.svg';
export default  () => (
    <div className="max-w-4xl mx-auto rounded-t-lg shadow-box">
        <img src={icongit} 
            alt ="git"
            style={{height: "64px" ,float:"right"}}>
        </img>
        <header className="text-center">
            <h2 className="text-3xl font-bold mt-5 pt-2 pl-16">
                Mi trabajo en Open Source
            </h2>   
            <p className="mt-3">
                Colaboración y contribución de código  
            </p>
        </header>
        <div className="abosolute">
        <ul className="repos-list min-h-full mt-6 " style={{padding:"30px 70px 30px 70px"}}>
            {
                repos.map((repo) => {
                    return <Repo repo= {repo} key = {repo.id}/>
                })
            }
        </ul>
        </div>
    </div>
);