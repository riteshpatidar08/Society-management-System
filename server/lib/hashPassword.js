import bcrypt from 'bcrypt' ;


export const generateHash = async(password)=> {
    return await bcrypt.hash(password , 12)
}