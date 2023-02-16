import React,{memo} from 'react';
import { Link } from 'react-router-dom';

const Button = ({text, bgColor, textColor,icon,onClick,fullWidth,link}) => {
    console.log(onClick)
    return (
        <button type="button" 
            className={`py-2 px-4 ${bgColor} ${fullWidth && "w-full"} ${textColor} outline-none rounded-md hover:underline justify-center flex items-center gap-1`} 
            onClick={onClick}
            >
            <Link to={link}>{text}</Link> 
            {
                icon ?  <span className='mt-0.5'>{icon}</span> :""
            }
        </button>
    );
};

export default memo(Button);