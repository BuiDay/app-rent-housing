import React, { useCallback } from 'react';
import logo from '../../asset/images/logo-removebg-preview.png'
import Button from '../../components/Button';
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import {path} from '../../utils/constant'

const Header = () => {
    const navigate = useNavigate()
    const goLogin = useCallback(()=>{
        navigate(path.LOGIN)
    },[])

    return (
        <div className='w-1100 m-auto flex items-center justify-between'>
            <div>
                <img src={logo} alt="logo" className='w-[240px] h-[70px] object-contain'/>
            </div>
            <div className='flex items-center gap-2'>
                <small>Xin chào, buivanduynhat</small>
                <Button text="Đăng nhập" textColor="text-white" bgColor = "bg-[#3961fb]" onClick={goLogin}/>
                <Button text="Đăng ký" textColor="text-white" bgColor = "bg-[#3961fb]" />
                <Button text="Đăng tin mới" textColor="text-white" bgColor = "bg-secondary2" icon={<AiOutlinePlusCircle/>}/>
            </div>
        </div>
    );
};

export default Header;