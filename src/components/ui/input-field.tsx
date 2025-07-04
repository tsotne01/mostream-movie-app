import React from 'react'


type InputFieldProps = {
    id: string;
    label: string;
    name?: string;
    type?: string;
    required?: boolean;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    disabled?: boolean;
    rest?: React.InputHTMLAttributes<HTMLInputElement>;
}


const InputField = ({ id, label, name, type = "text", required, placeholder, value, onChange, className, disabled, ...rest }: InputFieldProps) => {
    return (
        <div className='flex flex-col gap-3 shadow-sm'>
            <label className='text-base font-medium leading-6' htmlFor={id}>{label} {required && <span className='text-red-500'>*</span>}</label>
            <input
                type={type}
                id={id}
                required={required}
                disabled={disabled}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`border-1 border-[#383838] rounded-md text-[#878787] bg-[#101010] leading-6 font-medium text-base p-4 w-full ${className}`}
                {...rest}
            />
        </div>
    )
}

export default InputField