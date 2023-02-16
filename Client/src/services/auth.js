import axiosConfig from '../utils/axiosConfig'
export const apiRegister =  (data) => 
    new Promise(async(resolve, reject)=>{
        try {
            const res = await axiosConfig({
                method:"post",
                url:'/api/v1/auth/register',
                data:data
            })
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })
