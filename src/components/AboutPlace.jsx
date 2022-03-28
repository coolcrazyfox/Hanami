import React from 'react'

const AboutPlace = (props) => {

  return (
    <div className='flex flex-col border-black text-left rounded-2xl py-12 px-8'>
    <div>
      <div className='flex justify-center w-full'>
        {/*{props.img}*/}
        <img  className=' max-w-[550px] h-[350px] shadow-lg shadow-white/50' src={props.src} alt="/" />
      </div>
      <h3 className='text-xl font-bold py-4'>{props.heading}</h3>
      <p>
        {props.text}
      </p>
      <a href={props.href}><button  className='py-3 px-auto my-3 text-l'>Flight + Hotel</button></a>
    </div>
  </div>
  )
}

export default AboutPlace