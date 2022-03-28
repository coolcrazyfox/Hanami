import React from 'react';
import terminal from '../assets/321.png'

import hanami from '../assets/hanami.png'

const Developers = () => {
  return (
    <div className='w-full text-white bg-black'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 md:flex'>
        <div>
          <h1>Cherry blossom forecast for 2022.</h1>
          <p>
            <span className="blue">-&nbsp;</span>&nbsp;Kagoshima: <span className="blue">&nbsp;March 23 </span>
          </p>
          <p>
            <span className="blue">-&nbsp;</span>&nbsp;Fukuoka: <span className="blue">&nbsp;March 16 </span>
          </p>
          <p>
            <span className="blue">-&nbsp;</span>&nbsp;Kochi: <span className="blue">&nbsp;March 21 </span>
          </p>
          <p>
            <span className="blue">-&nbsp;</span>&nbsp;Hiroshima: <span className="blue">&nbsp;March 15 </span>
          </p>
          <p>
            <span className="blue">-&nbsp;</span>&nbsp;Osaka: <span className="blue">&nbsp;March 22 </span>
          </p>
          <p>
            <span className="blue">-&nbsp;</span>&nbsp;Nagoya: <span className="blue">&nbsp;March 18 </span>
          </p>
          <p>
            <span className="blue">-&nbsp;</span>&nbsp;Kanazawa: <span className="blue">&nbsp;March 25 </span>
          </p>
          <p>
            <span className="blue">-&nbsp;</span>&nbsp;Tokyo: <span className="blue">&nbsp;March 18 </span>
          </p>
          <p>
            <span className="blue">-&nbsp;</span>&nbsp;Nagano: <span className="blue">&nbsp;April 1 </span>
          </p>
          <p>
            <span className="blue">-&nbsp;</span>&nbsp;Niigata: <span className="blue">&nbsp;April 1 </span>
          </p>
          <p>
            <span className="blue">-&nbsp;</span>&nbsp;Sendai: <span className="blue">&nbsp;March 31 </span>
          </p>
          <p>
            <span className="blue">-&nbsp;</span>&nbsp;Akita: <span className="blue">&nbsp;April 8 </span>
          </p>
          <p>
            <span className="blue">-&nbsp;</span>&nbsp;Aomori: <span className="blue">&nbsp;April 15 </span>
          </p>
          <p>
            <span className="blue">-&nbsp;</span>&nbsp;Sapporo: <span className="blue">&nbsp;April 23 </span>
          </p>
          <p>
            <span className="blue">-&nbsp;</span>&nbsp;Kushiro: <span className="blue">&nbsp;May 8 </span>
          </p>

        </div>
        <div className='flex justify-center w-full py-16'>
            <img className='max-w-[550px] shadow-lg shadow-white/50' src={terminal} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Developers;
