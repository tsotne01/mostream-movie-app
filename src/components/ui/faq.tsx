import React, { ReactNode } from 'react'
import FaqItem from './faq-item'

const FAQ = ({ children }: { children: ReactNode }) => {
    return (
        <div className='max-w-7xl mx-auto'>
            {children}
        </div>
    )
}

export default FAQ