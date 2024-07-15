import { GiMonkey } from "react-icons/gi";
import { SiDbeaver } from "react-icons/si";
import { Link } from "react-router-dom";

import deer from "../../assets/deer.svg";

const Projects = () => {


    const routes = [
        {
            name: "Tech Stuff",
            link: "/projects/tech",
            icon: <GiMonkey />
        },
        {
            name: "Art Stuff",
            link: "/projects/art",
            icon: <SiDbeaver />
        }
    ]




    return  <>
    <div className="size-full flex flex-col justify-center ">

    <div className="flex basis-3/4 max-sm:flex-col justify-center items-center">
    {
        routes.map( ( obj, index ) => {
            return (
                <Link to={obj.link} key={index.toString()} className="p-8 m-10
                w-3/4 
                text-zinc-700 bg-zinc-200 
                tracking-widest
                hover:-translate-y-4 hover:bg-gray-400 duration-150
                md:basis-1/2">
                <div className="text-xl flex justify-center items-center gap-6">
                {obj.name}
                <span className="text-4xl">
                {obj.icon}
                </span>
                </div>                    
                </Link>
            )
        } )
    }
    </div>   
    <div className="h-1/4  flex justify-center" >
        <img src={deer} className="h-1/2 animate-custompulse  opacity-10" /> 
    </div>
    </div>
            
    </>
}


export default Projects;
