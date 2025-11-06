'use client'
import React from 'react'
import Image from "next/image";

const Experience = () => {
  return (
    <section className=' bg-white rounded-2xl shadow-2xl max-w-7xl mx-4 lg:mx-auto my-3 p-4'>
        <h1 className="max-w-7xl mx-3 lg:mx-auto border-b-4 border-b-blue-600 text-4xl font-bold mt-8">Professional Experience</h1>
        
            <div className='timeline my-8'>
                <div className='container left'>
                    <Image className='container-logo' src={'https://res.cloudinary.com/dxuntrrfo/image/upload/v1762442903/6FRE5kSt_400x400_y8vgpx.jpg'} height={200} width={200} alt="Rodrigo Alfaro" />
                    <div className='text-box'>
                        <h2>Ministerio de Salud</h2>
                        <small>2018-2019</small>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum veniam ad minus reprehenderit, harum consectetur similique magnam quod illum distinctio impedit quas repellat aut ex, ullam odit deserunt exercitationem est.</p>
                    <span className='right-arrow'></span>
                    </div>
                </div>

                <div className='container right'>
                    <Image className='container-logo' src={'https://res.cloudinary.com/dxuntrrfo/image/upload/v1762442903/6FRE5kSt_400x400_y8vgpx.jpg'} height={200} width={200} alt="Rodrigo Alfaro" />
                    <div className='text-box'>
                        <h2>Ministerio de Salud</h2>
                        <small>2018-2019</small>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum veniam ad minus reprehenderit, harum consectetur similique magnam quod illum distinctio impedit quas repellat aut ex, ullam odit deserunt exercitationem est.</p>
                    <span className='left-arrow'></span>
                    </div>
                </div>

                <div className='container left'>
                    <Image className='container-logo' src={'https://res.cloudinary.com/dxuntrrfo/image/upload/v1762442903/6FRE5kSt_400x400_y8vgpx.jpg'} height={200} width={200} alt="Rodrigo Alfaro" />
                    <div className='text-box'>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Ministry of Public Health From El Salvador</h2>
                        <h3 className="text-lg font-semibold text-blue-600 mb-1">IT Technician</h3>
                        <small className="text-sm text-gray-500 font-medium">2021-2022</small>
                        <div className="mt-3 text-gray-700 leading-relaxed">
                            <p className="mb-2">Main job functions:</p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Installation of network infrastructure, including cabling, network points and access points</li>
                                <li>IT support and computer equipment configuration</li>
                                <li>Training end users on medical information systems</li>
                            </ul>
                        </div>

                    <span className='right-arrow'></span>
                    </div>
                </div>

                <div className='container right'>
                    <Image className='container-logo' src={'https://res.cloudinary.com/dxuntrrfo/image/upload/v1762442903/6FRE5kSt_400x400_y8vgpx.jpg'} height={200} width={200} alt="Student Computer Science Technician" />
                    <div className='text-box'>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">ITCA Fepade</h2>
                        <h3 className="text-lg font-semibold text-blue-600 mb-1">Student Computer Science Technician</h3>
                        <small className="text-sm text-gray-500 font-medium">2020-2021</small>
                        <p className="mt-3 text-gray-700 leading-relaxed">Completed comprehensive technical education program focusing on software development fundamentals, programming languages, database management, and system analysis. Gained hands-on experience with modern development tools and methodologies while building a strong foundation in computer science principles.</p>
                    <span className='left-arrow'></span>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Experience