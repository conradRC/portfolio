import React, { useEffect, useState } from "react";
import Repo from './repo';
import icongit from '../images/icons/icons-git.svg';

export default () => {

    const [repos,setRepos]= useState([]);

    useEffect( () => {
        const data = sessionStorage.getItem("repos");
        let myRepos;
        if(data){
            myRepos = JSON.parse(data);
            myRepos = myRepos.slice(1,7);
            setRepos(myRepos);
        }

        async function fetchRepos(){
            const response = await fetch("https://api.github.com/users/conradRC/repos");
            myRepos = await response.json();
            myRepos = myRepos.slice(1,7);
            sessionStorage.setItem("repos",JSON.stringify(myRepos));

            setRepos(myRepos);
        }
        fetchRepos();
        
    },[]);

return  (<div className="max-w-4xl mx-auto rounded-t-lg shadow-box">
            <img src={icongit} alt ="icono de git"
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
};