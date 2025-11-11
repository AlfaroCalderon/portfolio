'use client'
import React from 'react'
import {Message} from '@/types/firebase.type';
import {useForm} from 'react-hook-form';
import { addFirebase } from '@/services/firebase.service';

type Inputs = {
    name: string
    email: string
    message: string
}
export const ConnectForm = () => {

    const {register, handleSubmit, watch, reset, formState: {errors}} = useForm<Inputs>();

    const formvalidation = (data:Inputs) => {

        const messageBox = document.getElementById('sendingmessage');

        const message:Message = {
            name: data.name,
            email: data.email,
            message: data.message,
            timestamp: new Date().toISOString()        
        }

        const messageSent = addFirebase({message});

        messageBox!.classList.remove('opacity-0', 'hidden');
        messageBox!.classList.add('bg-gradient-to-r', 'from-blue-500', 'to-blue-600', 'text-white', 'shadow-lg', 'border', 'border-blue-300', 'animate-pulse');
        messageBox!.innerHTML = 'Sending message... Please wait.';

        setTimeout(()=>{
            if(!messageSent){
                console.log('The message has not been sent');
                messageBox!.classList.remove('bg-gradient-to-r', 'from-blue-500', 'to-blue-600', 'text-white', 'shadow-lg', 'border', 'border-blue-300', 'animate-pulse');
                messageBox!.classList.add('bg-red-900/50', 'text-red-300');
                messageBox!.innerHTML = '❌ Error sending message. Please try again or email me directly.';
            }else{
                reset();
                console.log('The message has been sent');
                messageBox!.classList.remove('bg-gradient-to-r', 'from-blue-500', 'to-blue-600', 'text-white', 'shadow-lg', 'border', 'border-blue-300', 'animate-pulse');
                messageBox!.classList.add('bg-green-900/50', 'text-green-300');
                messageBox!.innerHTML = '✨ Message sent successfully! I will respond soon.';
            }

            setTimeout(()=> {
                 messageBox!.classList.remove('bg-red-900/50', 'text-red-300','bg-green-900/50', 'text-green-300');
                 messageBox!.classList.add('opacity-0', 'transition-all', 'duration-1000', 'ease-in-out');
                 
                 setTimeout(() => {
                     messageBox!.classList.add('hidden');
                      messageBox!.classList.remove('transition-all', 'duration-1000', 'ease-in-out');
                    messageBox!.innerHTML = '';
                 },1500)
            },5000);


        },2000);
        
    }


  return (
    <section className='flex flex-col items-center max-w-7xl mx-3 lg:mx-auto my-3 p-4 mb-10' >
        <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            I&apos;d love to hear from you. Whether you have a project in mind, a question about my work, 
            or just want to say hello, send me a message and I&apos;ll respond as soon as possible.
            </p>
        </div>
        <form action="#" method='post' onSubmit={handleSubmit(formvalidation)} className='bg-white inline-block w-full max-w-lg rounded-2xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 p-4'>
            <div className='flex flex-col  m-4'>
                <label className='text-gray-500 font-bold mb-2' htmlFor="">Name</label>
                <input type="text" className='border border-gray-600 rounded-md p-2' {...register('name', {required: 'Name field is required', maxLength: {value: 100, message: 'Name can not be longer than 100 characters'}, minLength: {value: 3, message:'Name can not be shorter than 3 characters'} })} id='name'/>
                {errors.name && (
                    <p className='text-red-600'>{errors.name.message}</p>
                )}
            </div>
            <div className='flex flex-col  m-4'>
                <label className='text-gray-500 font-bold mb-2' htmlFor="">Email</label>
                <input type="text" className='border border-gray-600 rounded-md p-2' {...register('email', {required: 'Email field is required', pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Please enter a valid email address'}})} id='email'/>
                {errors.email && (
                   <p className='text-red-600'>{errors.email.message}</p> 
                )}
            </div>
            <div className='flex flex-col  m-4 box-content'>
                <label className='text-gray-500 font-bold mb-2' htmlFor="">Message</label>
                <textarea className='border border-gray-600 p-2 rounded-md min-h-24 resize-y focus:m-0' {...register('message', {required: 'Message field is required', maxLength: {value: 500, message: 'Message cannot be longer than 500 characters'}, minLength: {value: 10, message: 'Message must be at least 10 characters long'}})} id='message'></textarea>
                {errors.message && (
                    <p className='text-red-600'>{errors.message.message}</p> 
                )}
            </div>
            <div className='flex flex-col space-y-3 justify-center m-4'>
                <button type='submit' className='bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer'>
                    Send Message
                </button>

                <div id='sendingmessage' className='opacity-0 hidden p-4 rounded-lg'>

                </div>
            </div>
        </form>
    </section>
  )
}
