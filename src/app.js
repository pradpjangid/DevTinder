const express = require('express')

const app = express()

app.use("/test",(req,res)=>{
    res.send('e')
})

app.listen(3000,()=>{
    console.log('Server is Start and Listening in Port 3000')
})