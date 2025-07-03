import Link from 'next/link'
import React from 'react'
import NavBarLink from './nav-bar-link'

const NavBar = () => {
  return (
    <nav className='px-28 '>
        <ul className='gap-8 hidden md:flex'>
            <li>
                <NavBarLink href={"/"}>Home</NavBarLink>
            </li>
            <li>
                <NavBarLink href={"/live"}>LIVE</NavBarLink>
            </li>
            <li>
                <NavBarLink href={"/tv-show"}>Tv Show</NavBarLink>
            </li>
            <li>
                <NavBarLink href={"/movies"}>MOVIES</NavBarLink>
            </li>
            <li>
                <NavBarLink href={"/more"}>MORE</NavBarLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar