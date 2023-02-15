import React from 'react';
import {InputForm,Button} from "../../components"

const Login = () => {
    return (
        <div className='bg-white w-[600px] mt-10 p-[30px] pb-[100px] rounded-md shadow-sm'>
            <h3 className='font-semibold text-2xl mb-3'>Đăng nhập</h3>
            <div className='flex flex-col gap-3 w-full'>
                <InputForm label={"Số điện thoại"} type={"text"}/>
                <InputForm label={"Mật khẩu"} type={"password"}/>
                <Button 
                text={"Đăng nhập"}
                bgColor='bg-secondary'
                textColor='text-white'
                fullWidth
            />
            </div>
           <div className='flex justify-between items-center mt-7'>
            <span className='text-sm hover:text-[red] cursor-pointer text-[blue]'>Bạn đã quên mật khẩu?</span>
            <span className='text-sm hover:text-[red] cursor-pointer text-[blue]'>Tạo tài khoản mới</span>
           </div>
        </div>
    );
};

export default Login;