import { FaHammer, FaHome, FaInfoCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Bottombar = () => {

    const contents = [
        {
            name: "home",
            to: "/",
            icon: <FaHome />
        },
        {
            name: "about",
            to: "/about",
            icon: <FaInfoCircle />
        },
        {
            name: "projects",
            to: "/projects",
            icon: <FaHammer />
        },
        {
            name: "contact",
            to: "/contact",
            icon: <MdAlternateEmail />
        }
    ];

    const { pathname } = useLocation();


    return (
        <div className="p-6 h-7 flex  bg-zinc-700 text-zinc-300">
            <div className=" text-xl font-extrabold tracking-widest text-rose-200 w-full flex flex-col justify-center basis-1/2">
                {pathname==='/' ? '/home': pathname }                            
            </div>

            <div className="md:mr-10 w-full flex justify-end">


            { contents.map( (element, index) => {
                return  <>
                <div id={index.toString()} className="md:mx-2 text-white flex flex-col justify-center">
                    <Link to={`${element.to}`} className="hover:text-zinc-300 hover:underline mx-4 flex justify-center items-center">
                    <div className="text-2xl md:text-sm md:mx-3">
                    {element.icon}
                    </div>
                    <div className="max-sm:hidden">
                    {element.name}
                    </div>
                    </Link>
                </div>
                </>
            } )
            }

            </div>

        </div>
    )
}

export default Bottombar;
