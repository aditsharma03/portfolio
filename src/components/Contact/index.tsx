import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contact = () => {

    const contacts = [
        {
            name: "Github",
            url: "https://github.com/aditsharma03",
            icon: <FaGithub />
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/aditsharma03",
            icon: <FaLinkedin />
        },
        {
            name: "X/Twitter",
            url: "https://x.com/aditsharma03",
            icon: <FaSquareXTwitter />
        },
        {
            name: "Instagram",
            url: "https://instagram.com/azeng03",
            icon: <FaInstagram />
        }
    ];



    return  <div className="h-full w-full flex justify-center items-center">
            
            <div className="w-full text-zinc-700 flex flex-col justify-center md:flex-row gap-8 tracking-widest mx-36">
                { contacts.map( (contact, index) => {
                    return <Link id={index.toString()} to={contact.url} 
                    className="hover:text-zinc-900 hover:bg-zinc-300 duration-150 w-fit md:w-1/5 p-4  rounded gap-2 flex flex-row md:flex-col items-center">
                        <div className="text-5xl">{contact.icon}</div>
                        <div className="text-2xl">{contact.name}</div>
                        </Link>
                } ) }
            </div>
            
        </div>
            
}


export default Contact;
