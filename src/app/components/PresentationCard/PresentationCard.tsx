'use client'
import Image from "next/image";
import { FaCode, FaLinkedin } from "react-icons/fa";

export const PresentationCard = () => {
    return(
        <>
        <section className="bg-white max-w-5xl flex mx-3 lg:mx-auto my-10 rounded-lg shadow-2xl p-8 flex-col" >
            <div className="flex w-full justify-center items-center flex-col space-y-5 text-center">
                    <div className="w-40 h-40 rounded-full bg-blue-600 overflow-hidden border-2 border-blue-600 hover:scale-105 duration-200 ease-in hover:shadow-2xl">
                        <Image src={'https://res.cloudinary.com/dxuntrrfo/image/upload/v1762353993/WhatsApp_Image_2025-11-05_at_8.46.05_AM_qyppzb.jpg'} height={200} width={200} alt="Rodrigo Alfaro" />
                    </div>
                    <p className="text-5xl text-black font-bold">Hi, I&apos;m <span className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold">Rodrigo Alfaro</span></p>
            </div>
            <div className="mt-5 text-gray-700 text-center text-lg max-w-4xl mx-auto">
                <p className="mb-8">
                    Junior Web Developer with a passion for creating dynamic and responsive web applications. I enjoy exploring new technologies and building projects that make a difference. Always eager to learn new technologies and improve my skills.
                </p>
                <span className="flex flex-wrap justify-center gap-2 sm:space-x-4">
                <a href="https://github.com/AlfaroCalderon" className="bg-blue-700 font-bold text-white px-8 py-3 rounded-lg hover:bg-blue-600 group shadow-md transition-all duration-200 ease-in-out"><FaCode size={20} className="inline-block mr-2 group-hover:animate-bounce" />View My Work</a>
                <a href="https://www.linkedin.com/in/rodrigo-javier-alfaro-calder%C3%B3n-07b97530a/" className="bg-gray-300 font-bold px-8 py-3 rounded-lg hover:bg-gray-200 group shadow-md transition-all duration-200 ease-in-out"><FaLinkedin size={20} className="inline-block mr-2 group-hover:animate-bounce" />LinkedIn Profile</a>
                </span>
            </div>
        </section>
        </>
    )
}