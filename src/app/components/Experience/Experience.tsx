'use client'
import React from 'react'
import Image from "next/image";

export const Experience = () => {
  return (
    <section className=' bg-white rounded-2xl shadow-2xl max-w-7xl mx-4 lg:mx-auto my-3 p-4'>
        <h1 className="max-w-7xl mx-3 lg:mx-auto border-b-4 border-b-blue-600 text-4xl font-bold mt-8">Professional Experience</h1>
        
            <div className='timeline my-8'>
                <div className='container left'>
                    <Image className='container-logo' src={'https://res.cloudinary.com/dxuntrrfo/image/upload/v1762442903/6FRE5kSt_400x400_y8vgpx.jpg'} height={200} width={200} alt="Rodrigo Alfaro" />
                    <div className='text-box'>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Ministry of Public Health From El Salvador</h2>
                        <h3 className="text-lg font-semibold text-blue-600 mb-1">Junior Software Developer</h3>
                        <small className="text-sm text-gray-500 font-medium">April 2024 - Currently</small>
                        <div className="mt-3 text-gray-700 leading-relaxed">
                            <p className="mb-2">Main job functions:</p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Develop and maintain reporting systems using clinical data for national health strategies.</li>
                                <li>Create interactive dashboards to visualize health data for key stakeholders.</li>
                                <li>Design new system modules ensuring data accuracy for decision-making.</li>
                                <li>Collaborate with teams using Agile methodologies for timely feature delivery.</li>
                                <li>Write clean and documented code.</li>
                                <li>Debug and troubleshoot issues to ensure platform stability.</li>
                            </ul>
                        </div>
                    <span className='right-arrow'></span>
                    </div>
                </div>

                <div className='container right'>
                    <Image className='container-logo' src={'https://res.cloudinary.com/dxuntrrfo/image/upload/v1762442903/6FRE5kSt_400x400_y8vgpx.jpg'} height={200} width={200} alt="Rodrigo Alfaro" />
                    <div className='text-box'>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Ministry of Public Health From El Salvador</h2>
                        <h3 className="text-lg font-semibold text-blue-600 mb-1">Software Requirements Analyst</h3>
                        <small className="text-sm text-gray-500 font-medium"> February 2022 - March 2024</small>
                        <div className="mt-3 text-gray-700 leading-relaxed">
                            <p className="mb-2">Main job functions:</p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Gathered functional and non-functional system requirements.</li>
                                <li>Designed prototypes in Figma based on obtained requirements.</li>
                                <li>Designed system requirements documents, divided into modular components.</li>
                                <li>Used agile software development framework (SCRUM).</li>
                            </ul>
                        </div>

                    <span className='left-arrow'></span>
                    </div>
                </div>

                <div className='container left'>
                    <Image className='container-logo' src={'https://res.cloudinary.com/dxuntrrfo/image/upload/v1762442903/6FRE5kSt_400x400_y8vgpx.jpg'} height={200} width={200} alt="Rodrigo Alfaro" />
                    <div className='text-box'>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Ministry of Public Health From El Salvador</h2>
                        <h3 className="text-lg font-semibold text-blue-600 mb-1">IT Technician</h3>
                        <small className="text-sm text-gray-500 font-medium">October 2021 - January 2022</small>
                        <div className="mt-3 text-gray-700 leading-relaxed">
                            <p className="mb-2">Main job functions:</p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Installed network infrastructure, including cabling, network points and access points</li>
                                <li>Provided IT support and computer equipment configuration</li>
                                <li>Trained end users on medical information systems</li>
                            </ul>
                        </div>

                    <span className='right-arrow'></span>
                    </div>
                </div>

                <div className='container right'>
                    <Image className='container-logo border-2 border-gray-300' src={'https://res.cloudinary.com/dxuntrrfo/image/upload/v1762525628/itcaa_logo_nbqbxg.jpg'} height={200} width={200} alt="Student Computer Science Technician" />
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
