import React from 'react'
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  return (
    <section className=' max-w-7xl mx-3 lg:mx-auto my-3 p-4 mb-10' >
    <h1 className="max-w-7xl mx-3 lg:mx-auto border-b-4 border-b-indigo-600 text-4xl font-bold mb-8">Featured Projects</h1>
        <div className="grid grid-cols-1">
            
            <div className='bg-white grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-2xl p-5 mb-6 gap-2'>
                <Image className='rounded-lg block mb-4 md:mb-0' src={'https://res.cloudinary.com/dcostp8ak/image/upload/v1762724069/Captura_de_pantalla_2025-11-09_153416_f0hcim.png'} height={400} width={800} alt="Portfolio Project 1" />
                <div className='p-4 flex flex-col justify-center'>
                    <h2 className='text-2xl font-bold text-blue-600 mb-3 hover:text-blue-800 transition-colors duration-300'>
                        Favorite Accommodations 
                    </h2>
                    <p className='text-gray-600 mb-4 leading-relaxed'>
                        A web application for managing favorite accommodations with user authentication (sign-in/sign-up/sign-out). Features two user roles: admins can add new accommodations, while normal users can add/remove favorites from existing listings.
                    </p>
                    <div className='flex flex-wrap gap-2 mb-4'>
                        {['PHP', 'CSS', 'HTML', 'Mysql'].map((tech) => (
                            <span 
                                key={tech}
                                className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium'
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className='flex flex-wrap gap-3 mt-auto'>
                        <a href="https://github.com/AlfaroCalderon/accommodations_managment" target="_blank" rel="noopener noreferrer" className='px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer inline-flex items-center'>
                            <FaGithub className='inline-block mr-1' /> View Code
                        </a>
                        <a href="https://accommodationsmanagment-production.up.railway.app/index.php" target="_blank" rel="noopener noreferrer" className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer inline-flex items-center'>
                            View Live
                        </a>
                        <a href="https://drive.google.com/file/d/1lftL5mSiD23wRn1X96iZ-BDUnIDey82c/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 cursor-pointer inline-flex items-center'>
                            View PDF
                        </a>
                    </div>
                </div>
            </div>


            <div className='bg-white grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-2xl p-5 mb-6 gap-2'>
                <Image className='rounded-lg block mb-4 md:mb-0' src={'https://res.cloudinary.com/dcostp8ak/image/upload/v1762702667/Captura_de_pantalla_2025-11-09_093657_igtru5.png'} height={400} width={800} alt="Portfolio Project 1" />
                <div className='p-4 flex flex-col justify-center'>
                    <h2 className='text-2xl font-bold text-blue-600 mb-3 hover:text-blue-800 transition-colors duration-300'>
                       Shoe store
                    </h2>
                    <p className='text-gray-600 mb-4 leading-relaxed'>
                        A responsive shoe store website design built with HTML and CSS, featuring Flexbox and CSS Grid for optimal layout across all devices. This is a design-only project focusing on UI/UX implementation.
                    </p>
                    <div className='flex flex-wrap gap-2 mb-4'>
                        {['CSS', 'HTML'].map((tech) => (
                            <span 
                                key={tech}
                                className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium'
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className='flex flex-wrap gap-3 mt-auto'>
                        <a href="https://github.com/AlfaroCalderon/storedisign.github.io" target="_blank" rel="noopener noreferrer" className='px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer inline-flex items-center'>
                            <FaGithub className='inline-block mr-1' /> View Code
                        </a>
                        <a href="https://alfarocalderon.github.io/storedisign.github.io/" target="_blank" rel="noopener noreferrer" className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer inline-flex items-center'>
                            View Live
                        </a>
                    </div>
                </div>
            </div>

            <div className='bg-white grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-2xl p-5 mb-6 gap-2'>
                <Image className='rounded-lg block mb-4 md:mb-0' src={'https://res.cloudinary.com/dcostp8ak/image/upload/v1762719431/Captura_de_pantalla_2025-11-09_141636_dh0bhb.png'} height={400} width={800} alt="Portfolio Project 1" />
                <div className='p-4 flex flex-col justify-center'>
                    <h2 className='text-2xl font-bold text-blue-600 mb-3 hover:text-blue-800 transition-colors duration-300'>
                        Juice WRLD Playlist
                    </h2>
                    <p className='text-gray-600 mb-4 leading-relaxed'>
                        Kodigo Music is a Next.js web application that displays information about Juice WRLD&apos;s last album using the Spotify Web API.
                    </p>
                    <div className='flex flex-wrap gap-2 mb-4'>
                        {['Next.js', 'React', 'TanStack Query', 'Tailwind CSS', 'Zustand', 'Spotify API'].map((tech) => (
                            <span 
                                key={tech}
                                className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium'
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className='flex flex-wrap gap-3 mt-auto'>
                        <a href="https://github.com/AlfaroCalderon/juice-wrld-playlist" target="_blank" rel="noopener noreferrer" className='px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer inline-flex items-center'>
                            <FaGithub className='inline-block mr-1' /> View Code
                        </a>
                        <a href="https://juice-wrld-playlist-production.up.railway.app/" target="_blank" rel="noopener noreferrer" className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer inline-flex items-center'>
                            View Live
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

