import { Link, useLocation } from "react-router-dom";

const Bottombar = () => {

    const contents = [
        {
            name: "home",
            to: "/"
        },
        {
            name: "about",
            to: "/about"
        },
        {
            name: "projects",
            to: "/projects"
        },
        {
            name: "contact",
            to: "/contact"
        }
    ];

    const { pathname } = useLocation();


    return (
        <div className="p-6 h-7 flex  bg-zinc-700 text-zinc-300">
            <div className=" text-xl font-extrabold tracking-widest text-rose-200 w-full flex flex-col justify-center basis-1/2">
                {pathname==='/' ? '/home': pathname }                            
            </div>

            <div className="md:mr-12 w-full flex justify-end">


            { contents.map( (element, index) => {
                return  <>
                <div id={index.toString()} className="mx-2 text-white flex flex-col justify-center">
                    <Link to={`${element.to}`}> {element.name}</Link>
                </div>
                </>
            } )
            }

            </div>

        </div>
    )
}

export default Bottombar;
