import Data from '@/Shared/Data'
import React from 'react'

function Category() {
  return (
    <div className='mt-40'>
        <h2 className='font-bold text-3xl text-center mb-6'>Пошук за типом</h2>

        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20'>
            {Data.Category.map((category, index) => (
                <div className='border rounded-xl p-3 items-center flex flex-col
                hover:shadow-lg transition duration-300 ease-in-out cursor-pointer
                '>
                    <img src={category.icon} width={40} height={40} alt="" />
                    <h2 className='mt-2'>{category.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category