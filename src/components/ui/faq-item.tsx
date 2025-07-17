'use client'
import React, { useState } from 'react'
import CollapseIcon from './collapse-icon';
import ExpandIcon from './expand-icon';

type FaqItemProps = {
    question: string;
    answer: string;
    componentClasses?: string;
}

const FaqItem = ({ question, answer ,componentClasses}: FaqItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div onClick={toggleOpen} className={`p-6 bg-[#242323] cursor-pointer rounded-lg shadow-md flex justify-between items-center ${componentClasses}`}>
           <div>
             <h4 className='text-2xl font-semibold text-white tracking-tight leading-8'>{question}</h4>
            {isOpen && <p className='text-[#878787] mt-4 text-lg font-medium'>{answer}</p>} 
           </div>
           <button className='cursor-pointer self-start' onClick={toggleOpen}>{isOpen ? <CollapseIcon /> : <ExpandIcon />}</button>
        </div>
    )
}

export default FaqItem