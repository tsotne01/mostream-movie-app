import React from 'react'

const ErrorMessage = ({ message }: { message?: string }) => {
  if (!message) return null;
  return (
    <div className='text-red-500 text-sm font-bold'>{message}</div>
  )
}

export default ErrorMessage