import React from 'react';

import heroVideo from '../assets/Sakura.mp4';

const Hero = () => {
  return (
    <div className='w-full h-[100vh] top-[90px]'>
      <video className='object-cover h-full w-full absolute -z-10' src={heroVideo} autoPlay loop muted/>
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <h1 className='blue'>Hanami as a Japanese philosophy</h1>
        <h1 className='py-4'>Literally,&nbsp;
          <span className='blue'>&nbsp;"hanami"</span>&nbsp;is translated as <span className='blue'>&nbsp;"admiring the flowers."</span>
        </h1>
        <p className='text-xl py-4'>
            The tradition of admiring flowering trees dates back to the 3rd century. But at that time, the Japanese admired not sakura, but plum blossoms. Only in the 9th century sakura took its place. This tradition was started by one of the emperors, who liked to have picnics under flowering trees.
        </p>

        <div>
          <button className='m-2'>Send to MAV</button>
          <button className='m-2'>FAQ</button>
        </div>
      </div>
      <div>
        <p className='text-center text-white text-2xl font-bold'>Hanami traditions. 126&nbsp;368&nbsp;572 Japanese plan to watch cherry blossom</p>
      </div>
    </div>
  );
};

export default Hero;
