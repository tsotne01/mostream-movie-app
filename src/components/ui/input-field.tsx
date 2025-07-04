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
        <div className='flex flex-col gap-3'>
            <label htmlFor={id}>{label} {required && <span className='text-red-500'>*</span>}</label>
            <input
                type={type}
                id={id}
                required={required}
                disabled={disabled}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`border-1 border-[#383838] text-[#878787] text-base p-4 w-full ${className}`}
                {...rest}
            />
        </div>
    )
}

export default InputField