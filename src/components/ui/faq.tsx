import React, { ReactNode } from 'react'
import FaqItem from './FaqItem/faq-item'

const FAQ = ({ children , className }: { children: ReactNode , className?: string }) => {
    return (
        <div className={`max-w-7xl mx-auto flex flex-col ${className}`}>
            {children}
        </div>
    )
}

export default FAQ