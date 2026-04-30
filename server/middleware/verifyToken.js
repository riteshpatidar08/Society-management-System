
import jwt from 'jsonwebtoken'
const verifyToken = (req,res,next) => {
try {
const token =   req.cookies.token
const decoded =  jwt.verify(token , process.env.JWT_SECRET_STRING)
console.log(decoded)
} catch (error) {
    
}
}

export default verifyToken
