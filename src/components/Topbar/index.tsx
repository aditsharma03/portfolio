
const Topbar = () => {
    const label = "[ azeng: portfolio] #";
    
    return <>
        <div className="p-5 h-7  bg-transparent flex ">
            <div className="flex flex-col justify-center text-stone-400">{label}</div> 
        </div>
        <hr className="mx-7 border-2 border-solid border-b-transparent border-zinc-200"/>
    </>
}


export default Topbar;
