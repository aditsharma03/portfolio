
const Topbar = () => {
    const label = "[ azeng: portfolio]#";

    const number = 19551;
    const hex_number = number.toString(16);
    
    return <>
        <div className="p-5 h-7 tracking-widest bg-transparent flex ">
            <div className="flex flex-col justify-center text-zinc-500 basis-11/12">{label}</div> 
            <div className="flex flex-col justify-center text-zinc-500 basis-1/12">{hex_number}</div>
        </div>
        <hr className="mx-12 border-2 border-solid border-b-transparent border-zinc-300"/>
    </>
}


export default Topbar;
