'use client'
import React from 'react'

const styles: { [key: string]: string } = {
    primary: 'rounded-sm bg-[#F14141] text-white font-semibold px-4 py-2 cursor-pointer hover:bg-[#F14141]/70 transition-colors',
    secondary: 'rounded-sm text-white font-semibold px-4 py-2 cursor-pointer hover:bg-[#242323]/70 transition-colors',
    outlined: 'border-1 border-[#F14141] hover:border-[#F14141]/70 hover:text-white/80 rounded-sm text-white font-semibold px-4 py-2 cursor-pointer bg-transparent transition-colors',
}

type ButtonProps = {
    variant: string,
    children: React.ReactNode,
    beforeIcon?: React.ReactNode,
    afterIcon?: React.ReactNode,
    className?: string,
    isActive?: boolean,
    disabled?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    type?: 'button' | 'submit' | 'reset',
    rest?: React.ButtonHTMLAttributes<HTMLButtonElement>,
}

const Button = ({ variant, type, children, onClick, className, beforeIcon, afterIcon, isActive, ...rest }: ButtonProps) => {

    return (
        <button onClick={onClick} className={`disabled:bg-slate-500/40 ${styles[variant]} ${className} ${isActive && variant == 'secondary' && 'bg-[#242323] border-1 border-[#383838]'} flex
        active:scale-[0.99] hover:scale-[1.03] 
        `} type={type} {...rest}>
            {beforeIcon && <span className="mr-2">{beforeIcon}</span>}
            {children}
            {afterIcon && <span className="ml-2">{afterIcon}</span>}
        </button>
    )
}

export default Button