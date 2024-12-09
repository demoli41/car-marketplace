import React from 'react'
import { UserButton, useUser } from '@clerk/clerk-react'
import { Button } from './ui/button';
import logo from '../assets/logo.svg';

function Header() {
  const {user,isSignedIn} = useUser();
  return (
    <div className='flex justify-between items-center shadow-sm p-5'>
        <img src={logo} alt="Logo" width={150} height={100} />
        <ul className='hidden md:flex gap-16'>
          <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Головна</li>
          <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Пошук</li>
          <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Нові</li>
          <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Вживані</li>
        </ul>

        {isSignedIn ? 
            <div className='flex gap-5'>
             <UserButton/> 
             <Button>Підтвердити</Button>
            </div>
            :
            <Button>Підтвердити</Button>
        }
    </div>
  )
}

export default Header