import Typewriter from 'typewriter-effect';

const Home = () => {

    const name = "{ Adit Sharma}";

    return <div className="font-mono h-full bg-transparent flex flex-col justify-center">

            <div className=" text-6xl max-sm:text-3xl font-bold text-zinc-700 tracking-wider subpixel-antialiased flex flex-row justify-center -translate-y-10">
                {name}
            </div>
            <div id="typewrite" className="p-2 text-lg bg-gray-50 text-gray-500 tracking-widest flex flex-row justify-center">
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
        
        </div>
    
}

export default Home;
