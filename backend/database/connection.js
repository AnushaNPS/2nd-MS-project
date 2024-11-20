//Yv4YTiLWkyGbcHTu
// (anu1234 ->login-form password)
// mongodb+srv://anushasheety67:anu1234@cluster0.m2exi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//mongodb+srv://anushasheety67:Yv4YTiLWkyGbcHTu@cluster0.gqpv8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


const mongoose=require('mongoose')

function RunServer(){
    try {
        mongoose.connect('mongodb+srv://anushasheety67:Yv4YTiLWkyGbcHTu@cluster0.gqpv8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('MongoDB connected')
    } catch (error) {
        console.log('Not connected')
    }
}
module.exports=RunServer;