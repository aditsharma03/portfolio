import { Link } from 'react-router-dom'
import images from './images.ts'
import { BsArrowLeft } from 'react-icons/bs'


const Art = () => {


    return (
        <div className=' h-full w-full flex flex-col gap-10 items-center overflow-auto'>

        <div className='p-8 pb-0 flex justify-start w-full'>
        <Link to={'/projects'} className='p-2 text-2xl bg-zinc-300 rounded-lg' ><BsArrowLeft /></Link>
        </div>

        <div className='mb-20 text-4xl font-bold text-zinc-800 tracking-widest underline'>
        My Artworks
        </div>


        <div className='w-5/6 md:columns-3 max-sm:columns-1'>
        {
            images.map( (image, index) => {
                return (
                    <div key={index} className='p-5'>
                    <img src={image.src} className='w-full bg-rose-100 border-8 border-solid border-zinc-900 shadow-md shadow-black
                     hover:border-zinc-900 hover:scale-110 hover:shadow-2xl hover:shadow-black  duration-700 delay-75' />
                    </div>
                )
            } )
        }
        </div>
        
        </div>
    )
}

export default Art;
