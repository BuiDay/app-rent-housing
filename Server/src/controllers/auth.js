
export const register = (req, res)=>{
    const {name, phone, password} = req.body;
    try {
        if(!name || !phone || !password){
            return res.status(400).json({
                 code:1,
                 msg:"Missing input!"
             })
         }
    } catch (error) {
        return res.status(500).json({
            code:-1,
            msg:"Fail at auth controller!"
        })
    }
    
}
