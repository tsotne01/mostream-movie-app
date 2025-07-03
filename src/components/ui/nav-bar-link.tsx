import Link from 'next/link'
import React from 'react'

const NavBarLink = ({ href, children, className } : { href: string, children: React.ReactNode, className?: string }) => {
  return <Link className={`text-white font-semibold leading-6 tracking-[-2%] sm:text-sm lg:text-base px-2 py-1 rounded-sm transition hover:bg-[#242323] ${className}`} href={href}>{children}</Link>

}

export default NavBarLink