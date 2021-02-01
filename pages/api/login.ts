import {NextApiRequest , NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
const Key = "ihfsdgnsdlgnorenglkcxvnksdl"
export default function (req : NextApiRequest,res :NextApiResponse){
    if(!req.body || req.body.password ===''|| req.body.email ==='' ){
        res.statusCode=404;
        res.json({message: "error something went wrong"});
        return
    }
    const {email , password,username } = req.body;
    res.json({
        token : jwt.sign({
            username,
            email ,
            admin : email === 'admin'&& password === "admin"
        },Key)
    })

}