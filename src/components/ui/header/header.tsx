import React from 'react'
import Logo from '../shared/logo'
import HeaderCTA from './header-cta'
import NavBar from '../nav/nav-bar'

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