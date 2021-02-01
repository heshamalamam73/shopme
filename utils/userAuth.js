import jwt from 'jsonwebtoken';
const getToken = (user)=> {
    let {email,name,isAdmin,_id } = user;
    return jwt.sign(
        {
            email,
            name,
            isAdmin,
            _id,
        },process.env. JWT_SECRET_KEY,
        {
            expiresIn: "48h",

        }
    )
}
export {getToken}