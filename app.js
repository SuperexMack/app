const http = require("http")
const express = require("express")
const path = require("path")
const app = express();
const {Server} = require("socket.io")

const  server = http.createServer(app);
const io = new Server(server)

const port = 4000;

// now we will call socket.io


// app.use(express.static(path.join(__dirname , "/public")))

app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname , "views"));


// now above we had called our socket server

io.on('connection' , (socket)=>{


socket.on("message" , (mack)=>{

// console.log("A New User Msg is : " , mack)
io.emit("message" , {message : mack , senderId : socket.id})

    
})


} )


app.get("/app",(req,res)=>{

res.render("index.ejs")


})




server.listen(port , ()=>{

console.log(`Server is Created on the port Number ${port}`)


})




