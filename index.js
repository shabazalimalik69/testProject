const express = require("express")
const cors = require("cors");

const app = express();

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Home Page")
});

app.listen(7000,()=>{
    console.log("Server Running on http://localhost:7000")
})