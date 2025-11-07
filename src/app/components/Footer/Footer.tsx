import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className='flex w-full p-5 justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex-col'>
        <p className="text-gray-400 hover:text-white transition duration-300">&copy; {new Date().getFullYear()} Rodrigo Alfaro. Built with <span className='text-primary-blue'>Tailwind CSS</span> and <span className='text-primary-blue'>Next.js</span>.</p>
        <div className="mt-3 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaGithub className='inline-block mr-2' />GitHub</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaLinkedin className='inline-block mr-2' />LinkedIn</a>
            </div>
    </footer>
  )
}
