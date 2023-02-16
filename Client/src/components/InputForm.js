import React from 'react';

const InputForm = ({label,type,setVaule,value,typeParams}) => {
    return (
        <div>
            <label htmlFor="phone" className='text-xs'>{label}</label>
            <input type={type} 
                    className='outline-none bg-[#e8f0fe] p-2 rounded-md w-full'
                    value={value}
                    onChange={(e)=>(setVaule((prev)=>({...prev,[typeParams]:e.target.value})))}
            />
        </div>
    );
};

export default InputForm;