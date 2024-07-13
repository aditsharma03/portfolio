import myDrawing from "../../assets/myDrawing.svg"

const About = () => {

    const greeting = 'Hello there!';
    const about = `I'm a code-slinging, tech-obsessed individual with a passion for building cool things. From tinkering with hardware to crafting innovative software, I'm always on the lookout for the next challenge. When I'm not elbow-deep in code, you might find me exploring new tech trends, fiddling with gadgets, or dreaming up the next big thing. Check out my projects to see what I've been brewing!`;
    
    return  <div className="p-8 h-full w-full flex items-center max-sm:flex-col overflow-auto">

                <div className="text-justify text-slate-800 p-4 pb-8 md:p-16 md:w-1/2 ">
                    {greeting}
                    <br />
                    {about}
                </div>

                <div className="h-5/6 w-3/4  bg-zinc-300 rounded-md flex  basis-1/2  ">
                    <img src={myDrawing} className=" mx-10 h-full w-full"></img>
                </div>


                

            </div>

}


export default About;
