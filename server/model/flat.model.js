import mongoose from 'mongoose' ;

const flatSchema = new mongoose.Schema({
    flatNumber  : {
        type : Number ,
    },
    block : {
        type :  String
    },
    floor : {
        type : Number
    }
 
})


const Flat = mongoose.model('Flat' , flatSchema);

export default Flat ;