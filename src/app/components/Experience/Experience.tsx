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
            </div>
    </section>
  )
}

export default Experience