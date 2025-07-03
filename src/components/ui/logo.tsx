import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={"/"}  className='uppercase text-2xl font-bold leading-10 tracking-0 italic cursor-pointer'>Mostream</Link>
  )
}
export default Logo