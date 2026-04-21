import express from 'express' ;


const app = express() ;

app.get('/health' , (req,res)=>{
    res.send('Health is ok')
})

app.listen(3000, ()=>{
    console.log('server is running')
})