import Link from 'next/link'
import React from 'react'

const Logo = ({className}:{className?:string}) => {
  return (
    <Link href={"/"}  className={`uppercase text-2xl font-bold leading-10 tracking-0 italic cursor-pointer ${className}`}>Mostream</Link>
  )
}
export default Logo