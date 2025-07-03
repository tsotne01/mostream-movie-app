import React from 'react'
import NavBar from './nav-bar'
import Logo from './logo'
import HeaderCTA from './header-cta'

const Header = () => {
    return (
        <header className='flex items-center justify-between mx-6 sm:mx-auto py-10 bg-transparent text-white max-w-7xl'>
            <Logo />
            <NavBar />
            <HeaderCTA />
        </header>
    )
}

export default Header