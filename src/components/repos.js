import React from "react";
import Repo from './repo';
import icongit from '../images/icons/icons-git.svg';
import repos from '../data/datas';

export default () => {
    
    return  (
    <div className="xl:px-40 lg:px-40 md:px-16 sm:px-16 px-6">
        <div className="box-shadow rounded-lg my-8 pb-4">
             <img src={icongit} alt ="icono de git"
                style={{height: "64px" ,float:"right"}}>
             </img>
             <header className="text-center">
                <h2 className="text-3xl font-bold pt-4 ml-16">
                    Mi trabajo en Open Source
                </h2>   
                <p className="my-3">
                    Colaboración y contribución de código  
                </p>
            </header>
    
            <div className="flex flex-wrap min-h-full ">
                { repos.map(
                    (repo) => {
                    return <Repo repo= {repo} key = {repo.id}/>
                })}
            </div>

            
            <div className="flex justify-end text-center mt-6 mb-2 mr-5">
                    <a className="text-blue-700 tarjet-shadow font-bold pb-2 pt-1 w-32 rounded text-sm hover:bg-blue-600 hover:text-white" 
                        href="https://github.com/conradRC" 
                        tab="_blank" rel="noopener noreferrer">
                            Ver mas ({6})
                    </a>
            </div>
        </div>
    </div>  
    );
};

/*    const [repos,setRepos]= useState([]);
    const [reposCount, setReposCount] = useState([]);

    useEffect( () => {
        const data = sessionStorage.getItem("repos");
        let myRepos;
        if(data){
            myRepos = JSON.parse(data);
            setReposCount(myRepos.length);
            myRepos = myRepos.slice(1,9);
            setRepos(myRepos);
        }

        async function fetchRepos(){
            const response = await fetch("https://api.github.com/users/conradRC/repos");
            myRepos = await response.json();
            setReposCount(myRepos.length);
            myRepos = myRepos.slice(1,7);
            sessionStorage.setItem("repos",JSON.stringify(myRepos));
            setRepos(myRepos);
        }
        fetchRepos();
        
    },[]);

*/