import {apiRegister} from '../../services/auth';
import actionTypes from './type'

export const register = (data) => async (dispatch)=>{
    try {
        const res = await apiRegister(data);
        if(res?.data.err === 1){
            dispatch({
                type:actionTypes.REGISTER_SUCCESS,
                data:res.data.token
            })
        }else{
            dispatch({
                type:actionTypes.REGISTER_FAIL,
                data:res.data.msg
            })
        }
        
    } catch (error) {
        dispatch({
            type:actionTypes.REGISTER_FAIL,
            data:null
        })
    }
}