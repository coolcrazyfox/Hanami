import React from 'react';
import terminal from '../assets/321.png'
import meto from '../assets/325.jpeg'
import hanami from '../assets/hanami.png'

const Method = () => {
  return (
    <div className='w-full text-white bg-black'>
      {/*<div className='max-w-[1240px] mx-auto px-4 py-16 md:flex'>*/}

      <div className='w-full bg-black text-white text-center px-16'>
        <h1 className='py-4' >CHERRY BLOSSOM PREDICTION METHOD </h1>
        <p className='py-4 text-xl'>
          The Japan Meteorological Agency has developed its own cherry blossom forecasting method, which allows you to accurately determine the flowering dates in order to admire the cherry blossoms. The forecast is based on existing research on predicting the onset of flowering and peak flowering of the Somei Yoshino (Yoshino Cherry) cherry. ,
          &nbsp;
          The Japan Meteorological Center evaluates and forecasts for each region of the country, taking into account the low temperature performance during autumn and winter, the growth status of cherry blossoms, cumulative temperatures and past data for each area. The Japan Meteorological Center uses a conditional, so-called. "bloom meter" as a quantitative measure of the progress of sakura buds on the way to the final stage - the stage of flowering.
        </p>
      </div>
      <div className='flex justify-center w-full py-10'>
        <img className='max-w-[850px] shadow-lg shadow-white/50' src={meto} alt="/" />
      </div>
      <div className='w-full bg-black text-white text-left px-16'>
        <h3 className='px-4 py-4 text-left text-xl'>The flowering meter depends on three indicators:</h3>
        <p className='px-6 py-2 text-l'>
          1. awakening level. This indicator measures the level of rest. Awakening rate increases as temperature decreases (0% = bud formation, 100% = dormant disturbance)
        </p>
        <p className='px-6 py-2 text-l'>
          2. Growth level. This indicator, as its name suggests, measures the growth of the kidney. Growth rate increases as temperature rises, indicating that flowering phase is approaching (0% = dormancy, 100% = flowering)
        </p>
        <p className='px-6 py-2 text-l'>
          3. Full bloom rate. This indicator measures the amount of flowering. The full bloom rate increases as the temperature rises, indicating that the full bloom phase is approaching (0% = bloom, 100% = full bloom).
        </p>
        <p className='px-4 py-2 text-xl'>
          Thus, thanks to the meticulous work of the employees of the Japan Meteorological Center, it is possible to accurately determine the date of the hanami in order to admire the cherry blossoms during the peak of its flowering.
        </p>

      </div>

    </div>
  );
};

export default Method;
