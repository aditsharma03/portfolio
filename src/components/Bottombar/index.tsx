import { Link, useLocation } from "react-router-dom";

const Bottombar = () => {

    const { pathname } = useLocation();


    return (
        <div className="p-6 h-7 flex  bg-zinc-700 text-zinc-300">
            <div className=" text-xl text-sky-100 w-full flex flex-col justify-center basis-1/2">
                {pathname==='/' ? '/home': pathname }                            
            </div>

            <div className="md:mr-12 w-full flex justify-end">
                <div className="mx-2 flex flex-col justify-center">
                    <Link to={`/`}>Home</Link>
                </div>
                <div className="mx-2 flex flex-col justify-center">
                    <Link to={`/`}>Home</Link>
                </div>
                <div className="mx-2 flex flex-col justify-center">
                    <Link to={`/`}>Home</Link>
                </div>
                <div className="mx-2 flex flex-col justify-center">
                    <Link to={`/`}>Home</Link>
                </div>
            </div>

        </div>
    )
}

export default Bottombar;
