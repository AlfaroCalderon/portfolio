'use client'
import { MdContactMail } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";


const Navbar = () => {
    return (
        <>
        <nav className="bg-gradient-to-r from-white via-blue-50 to-white sticky top-0 sm:flex justify-between items-center z-50 shadow-2xl backdrop-blur-sm border-b border-blue-100 px-8 py-5">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-3xl cursor-pointer hover:scale-105 duration-300">
            Rodrigo Alfaro
            </h2>
            <ul className="block sm:flex text-gray-700 font-semibold sm:space-x-8">
            <li className="flex gap-3 items-center hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-md">
                <FaLaptopCode size={22} className="text-blue-500" />
                <span>Projects</span>
            </li>
            <li className="flex gap-3 items-center hover:text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-md">
                <FaStar size={22} className="text-purple-500" />
                <span>Skills</span>
            </li>
            <li className="flex gap-3 items-center hover:text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer  hover:scale-105 hover:shadow-md">
                <MdOutlineWork size={22} className="text-green-500" />
                <span>Experiences</span>
            </li>
            <li className="flex gap-3 items-center hover:text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer  hover:scale-105 hover:shadow-md">
                <MdContactMail size={22} className="text-orange-500" />
                <span>Contacts</span>
            </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;