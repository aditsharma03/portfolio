import Typewriter from 'typewriter-effect';

import computer from '../../assets/computer.svg'

const Home = () => {

    const name = "{ Adit Sharma}";

    return <div className="cursor-crosshair h-full bg-transparent flex flex-col justify-center">

            <div className="py-16 text-6xl max-sm:text-3xl font-bold text-zinc-600 tracking-wider subpixel-antialiased flex flex-row justify-center ">
                {name}
            </div>
            <div id="typewrite" className=" p-2 text-lg bg-gray-50 text-gray-500 tracking-widest flex flex-row justify-center">
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

            <img src={computer} className='h-48 animate-pulse'></img>

        
        </div>
    
}

export default Home;
