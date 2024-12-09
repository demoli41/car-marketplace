import React from 'react'
import Search from './Search'
import tesla from '../assets/tesla.png';

function Hero() {
  return (
    <div>
        <div className='flex flex-col items-center p-10 py-20 gap-6 h-[650px] w-full bg-[#eef0fc]'>
            <h2 className='text-lg'>Машини для купівлі та оренди поруч з тобою</h2>
            <h2 className='text-[60px] font-bold'>Знайди машину своєї мрії</h2>
            <Search />
            <img src={tesla} alt="" />
        </div>
    </div>
  )
}

export default Hero