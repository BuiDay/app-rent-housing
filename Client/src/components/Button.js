import React,{memo} from 'react';

const Button = ({text, bgColor, textColor,icon,onClick,fullWidth}) => {
    console.log(onClick)
    return (
        <button type="button" 
            className={`py-2 px-4 ${bgColor} ${fullWidth && "w-full"} ${textColor} outline-none rounded-md hover:underline justify-center flex items-center gap-1`} 
            onClick={onClick}
            >
            <span>{text}</span> 
            {
                icon ?  <span className='mt-0.5'>{icon}</span> :""
            }
        </button>
    );
};

export default memo(Button);