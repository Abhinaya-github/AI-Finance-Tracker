const express=require("express")

const app=express()
app.use(express.json())
const expenseRoutes= require("./src/Routes/expenseRoutes")
app.use((req,res,next)=>{
    console.log("A")
     next();
    

})

app.get("/",(req,res)=>{
    console.log("home page")
    res.send("AI finance backend running")
})


app.use("/expense",expenseRoutes)
app.listen(8000,()=>{
    console.log("server running on port 8000")
})