
import React from 'react'
import AuthLinks from './AuthLinks'
import Logo from '../Logo'
import ThemeButton from '../Buttons/ThemeButton'

const Navbar = () => {
  return (
    <header className='flex w-full items-center justify-between p-4 px-8 h-[60px]'>
        <div className="flex items-center justify-between w-full">
            <Logo /> 
            <div className=' flex gap-4 items-center'>
                <ThemeButton />
                <AuthLinks />
            </div>
        </div>
    </header>
  )
}

export default Navbar