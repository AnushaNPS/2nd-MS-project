const express=require('express');
const RunServer = require('./database/connection');
const signupRouter = require('./Routes/userRoutes');
const cors=require('cors');




const app=express();
const port=5000;

app.use(express.json())
app.use(cors())

RunServer()

// app.use():This function is used in express.js to mount middleware functions at  a specific path.Middleware function can preform a variety of tasks,such as modifying requests and responses or ending the request-response cycle.
app.use('/api/user',signupRouter)
app.listen(port,()=>{
    console.log(`server is running on ${port} port`)
})