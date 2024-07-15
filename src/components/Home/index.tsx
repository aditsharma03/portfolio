import Typewriter from 'typewriter-effect';

import computer from '../../assets/computer.svg'

const Home = () => {

    const name = "{ Adit Sharma}";

    return <div className="cursor-default h-full bg-transparent flex flex-col justify-center overflow-auto">

            <div className="pt-28 pb-10 text-3xl  md:text-6xl  font-bold text-zinc-800 tracking-wider subpixel-antialiased flex justify-center ">
                {name}
            </div>
            <div id="typewrite" className=" mt-4 max-sm:mb-20  p-2 text-lg bg-white text-zinc-500 tracking-widest flex flex-row justify-center">
            <Typewriter
            options={{
                strings: [
                    '<span style="color:#434d45">Hello WOrld!!!</span>',
                    '<span style="color:#3f5757">Welcome to my portfolio!!</span>',
                    '<span style="color:#202072">I\'m an engineer</span>',
                    '<span style="color:#21548b">And a 3D artist.</span>',
                ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
            }}
            />
            </div>

            <img src={computer} className='w-full h-48 animate-pulse'></img>


        
        </div>
    
}

export default Home;
