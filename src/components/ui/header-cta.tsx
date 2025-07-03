import React from 'react'
import Button from './button'

const HeaderCTA = () => {
  return (
    <div className='gap-4 hidden md:flex'>
        <Button variant='primary'>Subscribe</Button>
        <Button variant='outlined'>Sign In</Button>
    </div>
  )
}

export default HeaderCTA