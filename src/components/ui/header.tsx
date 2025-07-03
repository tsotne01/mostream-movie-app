import React from 'react'
import NavBar from './nav-bar'
import Logo from './logo'
import HeaderCTA from './header-cta'

const Header = () => {
    return (
        <header className='flex items-center justify-between py-10 bg-transparent text-white mx-auto max-w-7xl'>
            <Logo />
            <NavBar />
            <HeaderCTA />
        </header>
    )
}

export default Header