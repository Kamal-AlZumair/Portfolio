/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {PhoneIcon , MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

type Props = {};
const Contact = ({}: Props) => {

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:kamalzumair@gmail.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className=' h-screen  flex relative flex-col  md:text-left md:flex-row max-w-7xl md:px-10 justify-evenly mx-auto items-center'>
      <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
      
      <div className=' flex flex-col mt-20  space-y-5 items-center justify-center '>
        <h4 className='text-sm md:text-4xl font-semibold text-center'>
          I have got just what you need.{' '}
          <span className=' decoration-[#f7ab0a]/50 underline'>Lets Talk.</span>
        </h4>

        <div className=' space-y-2 md:space-y-5 flex flex-col items-start'>
          <div className=' flex items-center space-x-5 justify-center'>
            <PhoneIcon className=' text-[#f7ab0a] h-5 w-7 md:h-7 md:w-7 animate-pulse'/>
            <p className=' md:text-2xl'>+967 770600218</p>
          </div>
          <div className=' flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className=' text-[#f7ab0a] h-5 w-7 md:h-7 md:w-7 animate-pulse'/>
            <p className=' md:text-2xl'>kamalzumair@gmail.com</p>
          </div>
          <div className=' flex items-center space-x-5 justify-center'>
            <MapPinIcon className=' text-[#f7ab0a] h-5 w-7 md:h-7 md:w-7 animate-pulse'/>
            <p className=' md:text-2xl'>Ta'izz, Yemen</p>
          </div>
        </div>

        
        <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} className='contactInput max-w-[170px] ' placeholder='Name' type="text" />
            <input {...register('email')} className='contactInput max-w-[170px]' placeholder='Email' type="email" />
          </div>
          <input {...register('subject')} className='contactInput ' placeholder='subject' type="text" />
          <textarea {...register('message')} className='contactInput ' placeholder='Message'></textarea>
          <button type='submit' className=' bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg focus:outline-none'>Submit</button>
        </form>
        </div>
      </div>
    
  )
}

export default Contact
