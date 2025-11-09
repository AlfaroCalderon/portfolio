'use client'
import { MdContactMail, MdOutlineWork } from "react-icons/md";
import { FaLaptopCode, FaStar } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


export const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        const menuElement = document.getElementById("menu");
        if(menu){
            setMenu(false);
                menuElement!.classList.remove("block");
                menuElement!.classList.add("hidden");
        }else{
            setMenu(true); 
                menuElement!.classList.remove("hidden");
                menuElement!.classList.add("block");
        }
    }

     const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80; // Adjust based on your navbar height
            const elementPosition = element.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        // Close mobile menu after clicking
        if (menu) {
            toggleMenu();
        }
    }
    return (
        <>
        <nav className="bg-gradient-to-r from-white via-blue-50 to-white sticky top-0 md:flex justify-between items-center z-50 shadow-2xl backdrop-blur-sm border-b border-blue-100 px-8 py-5 ">
            <span className="flex space-x-4 items-center">
            <GiHamburgerMenu  size={30} className="inline-block md:hidden cursor-pointer" onClick={toggleMenu}/>
            <h2 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-3xl cursor-pointer hover:scale-105 duration-300"
                onClick={() => scrollToSection('home')}
            >
            Rodrigo Alfaro
            </h2>
            </span>
            <ul id="menu" className="hidden md:flex text-gray-700 font-semibold md:space-x-8 md:bg-transparent bg-white md:static absolute top-full left-0 w-full md:w-auto md:shadow-none shadow-lg md:flex-row flex-col md:p-0 p-4">
            <li 
                className="flex gap-3 items-center hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-md"
                onClick={() => scrollToSection('projects')}
            >
                <FaLaptopCode size={22} className="text-blue-500" />
                <span>Projects</span>
            </li>
            <li 
                className="flex gap-3 items-center hover:text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-md"
                onClick={() => scrollToSection('skills')}
            >
                <FaStar size={22} className="text-purple-500" />
                <span>Skills</span>
            </li>
            <li 
                className="flex gap-3 items-center hover:text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer  hover:scale-105 hover:shadow-md"
                onClick={() => scrollToSection('experiences')}
            >
                <MdOutlineWork size={22} className="text-green-500" />
                <span>Experiences</span>
            </li>
            {/* <li 
                className="flex gap-3 items-center hover:text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer  hover:scale-105 hover:shadow-md"
                onClick={() => scrollToSection('contacts')}
            >
                <MdContactMail size={22} className="text-orange-500" />
                <span>Contacts</span>
            </li> */}
            </ul>
        </nav>
        </>
    )
}