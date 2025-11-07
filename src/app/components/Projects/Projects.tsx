import React from 'react'
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  return (
    <section className=' max-w-7xl mx-3 lg:mx-auto my-3 p-4 mb-10'>
    <h1 className="max-w-7xl mx-3 lg:mx-auto border-b-4 border-b-blue-600 text-4xl font-bold mb-8">Featured Projects</h1>
        <div className="grid grid-cols-1">
            
            <div className='bg-white grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-2xl p-5 mb-6 gap-2'>
                <Image className='rounded-lg block mb-4 md:mb-0' src={'https://res.cloudinary.com/dxuntrrfo/image/upload/v1753107012/cld-sample-3.jpg'} height={400} width={800} alt="Portfolio Project 1" />
                <div className='p-4 flex flex-col justify-center'>
                    <h2 className='text-2xl font-bold text-blue-600 mb-3 hover:text-blue-800 transition-colors duration-300'>
                        Book Lending System
                    </h2>
                    <p className='text-gray-600 mb-4 leading-relaxed'>
                        A web application that allows users to borrow and lend books within their community.
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
                    <div className='flex gap-3 mt-auto'>
                        <button className='px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer'>
                           <FaGithub className='inline-block mr-1' /> View Code
                        </button>
                    </div>
                </div>
            </div>


            <div className='bg-white grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-2xl p-5 mb-6 gap-2'>
                <Image className='rounded-lg block mb-4 md:mb-0' src={'https://res.cloudinary.com/dxuntrrfo/image/upload/v1753107012/cld-sample-3.jpg'} height={400} width={800} alt="Portfolio Project 1" />
                <div className='p-4 flex flex-col justify-center'>
                    <h2 className='text-2xl font-bold text-blue-600 mb-3 hover:text-blue-800 transition-colors duration-300'>
                        Book Lending System
                    </h2>
                    <p className='text-gray-600 mb-4 leading-relaxed'>
                        A web application that allows users to borrow and lend books within their community.
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
                    <div className='flex gap-3 mt-auto'>
                        <button className='px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer'>
                           <FaGithub className='inline-block mr-1' /> View Code
                        </button>
                    </div>
                </div>
            </div>

            <div className='bg-white grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-2xl p-5 mb-6 gap-2'>
                <Image className='rounded-lg block mb-4 md:mb-0' src={'https://res.cloudinary.com/dxuntrrfo/image/upload/v1753107012/cld-sample-3.jpg'} height={400} width={800} alt="Portfolio Project 1" />
                <div className='p-4 flex flex-col justify-center'>
                    <h2 className='text-2xl font-bold text-blue-600 mb-3 hover:text-blue-800 transition-colors duration-300'>
                        Book Lending System
                    </h2>
                    <p className='text-gray-600 mb-4 leading-relaxed'>
                        A web application that allows users to borrow and lend books within their community.
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
                    <div className='flex gap-3 mt-auto'>
                        <button className='px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer'>
                           <FaGithub className='inline-block mr-1' /> View Code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

