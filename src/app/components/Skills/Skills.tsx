'use client'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaLaptop, FaPhp, FaLaravel, FaGitAlt, FaNpm  } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiMysql, SiMariadb, SiSupabase, SiHttpie, SiInsomnia, SiComposer, SiPhpmyadmin, SiDbeaver  } from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";


export const Skills = () => {
  return (
    <>
    <section className=' max-w-7xl mx-3 lg:mx-auto my-3 p-4 mb-10'>
        <h1 className="max-w-7xl mx-3 lg:mx-auto border-b-4 border-b-blue-600 text-4xl font-bold mb-8">Technical Skills & Tools</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className='bg-white rounded-2xl shadow-2xl p-5'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2'>Front-End Development</h2>
            <ul className='space-y-3'>
                <li className='text-gray-700'>
                    <span className='font-semibold text-lg text-blue-600'>Core</span>
                    <ul className='list-disc ml-6 mt-2 space-y-1'>
                        <li className='text-gray-600 hover:text-blue-500 transition-colors'><FaHtml5 className='inline-block mr-2' />HTML5</li>
                        <li className='text-gray-600 hover:text-blue-500 transition-colors'><FaCss3Alt className='inline-block mr-2' />CSS3</li>
                        <li className='text-gray-600 hover:text-blue-500 transition-colors'><FaJsSquare className='inline-block mr-2' />JavaScript</li>
                        <li className='text-gray-600 hover:text-blue-500 transition-colors'><SiTypescript className='inline-block mr-2' />TypeScript</li>
                    </ul>
                </li>
                <li className='text-gray-700'>
                    <span className='font-semibold text-lg text-green-600'>Frameworks</span>
                    <ul className='list-disc ml-6 mt-2 space-y-1'>
                        <li className='text-gray-600 hover:text-green-500 transition-colors'><FaReact className='inline-block mr-2' />React</li>
                        <li className='text-gray-600 hover:text-green-500 transition-colors'><SiNextdotjs className='inline-block mr-2' />Next.js</li>
                    </ul>
                </li>
                <li className='text-gray-700'>
                    <span className='font-semibold text-lg text-purple-600'>Styling</span>
                    <ul className='list-disc ml-6 mt-2 space-y-1'>
                        <li className='text-gray-600 hover:text-purple-500 transition-colors'><RiTailwindCssFill className='inline-block mr-2' />Tailwind CSS</li>
                        <li className='text-gray-600 hover:text-purple-500 transition-colors'><FaBootstrap className='inline-block mr-2' />Bootstrap</li>
                        <li className='text-gray-600 hover:text-purple-500 transition-colors'><FaLaptop className='inline-block mr-2' />Responsive Design (Flexbox/Grid)</li>
                    </ul>
                </li>
                <li className='text-gray-700'>
                    <span className='font-semibold text-lg text-orange-600'>State</span>
                    <ul className='list-disc ml-6 mt-2 space-y-1'>
                        <li className='text-gray-600 hover:text-orange-500 transition-colors'>Zustand</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className='bg-white rounded-2xl shadow-2xl p-5'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2'>Back-End Development</h2>    
            <ul className='space-y-3'>
                <li className='text-gray-700'>
                    <span className='font-semibold text-lg text-cyan-600'>Core</span>
                    <ul className='list-disc ml-6 mt-2 space-y-1'>
                        <li className='text-gray-600 hover:text-cyan-500 transition-colors'><FaPhp className='inline-block mr-2' />PHP</li>
                    </ul>
                </li>
                <li className='text-gray-700'>
                    <span className='font-semibold text-lg text-red-600'>Frameworks</span>
                    <ul className='list-disc ml-6 mt-2 space-y-1'>
                        <li className='text-gray-600 hover:text-red-500 transition-colors'><FaLaravel className='inline-block mr-2' />Laravel</li>
                    </ul>
                </li>
                <li className='text-gray-700'>
                    <span className='font-semibold text-lg text-indigo-600'>Databases</span>
                    <ul className='list-disc ml-6 mt-2 space-y-1'>
                        <li className='text-gray-600 hover:text-indigo-500 transition-colors'><SiMysql className='inline-block mr-2' />MySQL</li>
                        <li className='text-gray-600 hover:text-indigo-500 transition-colors'><SiMariadb className='inline-block mr-2' />MariaDB</li>
                        <li className='text-gray-600 hover:text-indigo-500 transition-colors'><SiSupabase className='inline-block mr-2' />Supabase</li>
                    </ul>
                </li>
                <li className='text-gray-700'>
                    <span className='font-semibold text-lg text-yellow-600'>API</span>
                    <ul className='list-disc ml-6 mt-2 space-y-1'>
                        <li className='text-gray-600 hover:text-yellow-500 transition-colors'> REST</li>
                    </ul>
                </li>
                <li className='text-gray-700'>
                    <span className='font-semibold text-lg text-pink-600'>Version Control</span>
                    <ul className='list-disc ml-6 mt-2 space-y-1'>
                        <li className='text-gray-600 hover:text-pink-500 transition-colors'><FaGitAlt className='inline-block mr-2' />Git</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className='bg-white rounded-2xl shadow-2xl p-5'>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Tools & Practices</h2>
            <ul className='space-y-3'>
                <li className='text-gray-700'>
                   <span className='font-semibold text-lg text-blue-600'>Development Environments</span> 
                   <ul className="list-disc ml-6 mt-2 space-y-1">
                       <li className='text-gray-600 hover:text-blue-500 transition-colors'><VscVscode className='inline-block mr-2' />VS Code</li>
                       <li className='text-gray-600 hover:text-blue-500 transition-colors'><SiHttpie className='inline-block mr-2' />Httpie</li>
                       <li className='text-gray-600 hover:text-blue-500 transition-colors'><SiInsomnia className='inline-block mr-2' />Insomnia</li>
                   </ul>
                </li>
                <li className='text-gray-700'>
                   <span className='font-semibold text-lg text-green-600'>Package Managers</span>
                   <ul className="list-disc ml-6 mt-2 space-y-1">
                       <li className='text-gray-600 hover:text-green-500 transition-colors'><FaNpm className='inline-block mr-2' />npm</li>
                       <li className='text-gray-600 hover:text-green-500 transition-colors'><SiComposer className='inline-block mr-2' />Composer</li>
                   </ul>
                </li>
                <li className='text-gray-700'>
                   <span className='font-semibold text-lg text-purple-600'>Agile Methodologies</span>
                   <ul className="list-disc ml-6 mt-2 space-y-1">
                       <li className='text-gray-600 hover:text-purple-500 transition-colors'><DiScrum className='inline-block mr-2' />Scrum</li>
                   </ul>
                </li>
                <li className='text-gray-700'>
                   <span className='font-semibold text-lg text-indigo-600'>DB Management</span>
                   <ul className="list-disc ml-6 mt-2 space-y-1">
                       <li className='text-gray-600 hover:text-indigo-500 transition-colors'><SiPhpmyadmin className='inline-block mr-2' />phpMyAdmin</li>
                       <li className='text-gray-600 hover:text-indigo-500 transition-colors'><SiMysql className='inline-block mr-2' />MySQL Workbench</li>
                       <li className='text-gray-600 hover:text-indigo-500 transition-colors'><SiDbeaver className='inline-block mr-2' />DBeaver</li>
                   </ul>
                </li>
            </ul>
        </div>
        </div>
    </section>
    </>
  )
}