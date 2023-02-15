import React from 'react';

const InputForm = ({label,type}) => {
    return (
        <div>
            <label htmlFor="phone" className='text-xs'>{label}</label>
            <input type={type} 
                    className='outline-none bg-[#e8f0fe] p-2 rounded-md w-full'
            />
        </div>
    );
};

export default InputForm;