import { Link } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import projects from "./projects";

const Tech = ()=>{

    return (
        <div className=" h-full w-full flex flex-col items-center overflow-auto">

        <div className='pl-8 pt-4 flex justify-start w-full'>
        <Link to={'/projects'} className='p-2 text-2xl bg-zinc-300 rounded-lg' ><BsArrowLeft /></Link>
        </div>
            
        <div className='p-8 mt-4 text-4xl    font-bold text-zinc-800 tracking-widest underline'>
        My Technical projects
        </div>


        <div className="flex flex-col items-center">

            {
                projects.map( (project, index) => {
                    return (
                        <div key={index} className=" w-5/6 m-8 p-4 flex flex-col 
                        bg-zinc-300 text-zinc-700 rounded-md shadow-zinc-800 
                        border-solid border-2 border-zinc-400
                        hover:shadow-2xl hover:scale-105 hover:text-zinc-900 duration-300">

                            <div className=" px-2 text-2xl tracking-widest underline">
                            {project.title}
                            </div>


                            <div className="text-justify py-2 px-4 tracking-tight">
                            {project.description}
                            </div>


                            <div className="px-4 text-zinc-500">
                            {
                                project.tags.map( (tag, index) => {
                                    return (
                                        <span key={index}>#{tag} </span>
                                    )
                                } )
                            }
                            </div>

                            <Link to={project.link} className="flex justify-end" >
                            <div className="py-2 px-4 mx-4 text-zinc-200 bg-zinc-600 w-fit 
                            rounded-md flex gap-2 items-center
                            hover:bg-zinc-800 hover:text-zinc-100 duration-200">
                            <span>visit</span>
                            <BsArrowRight />
                            </div>
                            </Link>
                        
                        
                            

                        </div>
                    )
                } )
            }

        </div>


        

        </div>
    )

}


export default Tech;
