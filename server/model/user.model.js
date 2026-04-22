import mongoose, { Mongoose } from 'mongoose' ;


const UserSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : [true , 'Name is required'],
        trim : true ,
    } ,
    email : {
        type : String ,
        trim : true,
        required : [true , "Email is required"]
    },
    password : {
        type : String ,
        trim :  true ,
        required : [true , "Password is required"]
    },
     role   : {
        type : String ,
        enum : ['admin', 'resident','security_guard'] ,        default : 'admin'
     },
     isActive : {
        type : Boolean ,
        default : true
     },
     profilePhoto : {
        type : String ,

     } ,
     flat : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Flat'
     }
})

const User = mongoose.model('User' , UserSchema) ;

export default User ;
// client validate => req validate  => mongoose validate;