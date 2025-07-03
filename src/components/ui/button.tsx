import React from 'react'

const styles :{[key:string]:string} = {
    primary: 'rounded-sm bg-[#F14141] text-white font-semibold px-4 py-2 cursor-pointer hover:bg-[#F14141]/70 transition-colors',
    secondary: 'bg-[#242323] border-1 border-[#383838] rounded-sm text-white font-semibold px-4 py-2 cursor-pointer hover:bg-[#242323]/70 transition-colors',
    outlined: 'border-1 border-[#F14141] rounded-sm text-white font-semibold px-4 py-2 cursor-pointer bg-transparent transition-colors',
}

const Button = ({variant,children,beforeIcon,afterIcon}:{variant:string,children:React.ReactNode,beforeIcon?:React.ReactNode,afterIcon?:React.ReactNode}) => {
  return (
    <button className={`btn ${styles[variant]}`}>
      {beforeIcon && <span className="mr-2">{beforeIcon}</span>}
      {children}
      {afterIcon && <span className="ml-2">{afterIcon}</span>}
    </button>
  )
}

export default Button