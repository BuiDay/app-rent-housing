import React from 'react';
import {InputForm,Button} from "../../components"
import { path } from '../../utils/constant';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-white w-[600px] mt-10 p-[30px] pb-[100px] rounded-md shadow-sm'>
            <h3 className='font-semibold text-2xl mb-3'>Tạo tài khoản</h3>
            <div className='flex flex-col gap-3 w-full'>
                <InputForm label={"Họ tên"} type={"text"}/>
                <InputForm label={"Số điện thoại"} type={"password"}/>
                <InputForm label={"Mật khẩu"} type={"password"}/>
                <Button 
                text={"Tạo tài khoản"}
                bgColor='bg-secondary'
                textColor='text-white'
                fullWidth
            />
            
            </div>
           <div className='mt-5'>
            <p className='text-sm'>
                Bấm vào nút đăng kí tức là bạn đã đồng ý với 
                <span className='text-[blue] cursor-pointer hover:text-[red]'> quy định sử dụng </span>của chúng tôi
            </p>
            <p className='text-sm'>Bạn đã có tài khoản? <span className='text-[blue] cursor-pointer hover:text-[red]'><Link to={`/`+path.LOGIN}>Đăng nhập ngay</Link></span></p>
           </div>
        </div>
    );
};

export default Login;