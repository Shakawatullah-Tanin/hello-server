const express = require ("express")

const app = express()

const port = 5002;

app.get("/", (req,res)=>{


    res.send("Hello Server !")

})
app.get("/info",(req,res)=>{


    const info = {


        name : "Hayet",

        Roll : 676988,

        Depertment : "CST"

        
    }

    res.send(info)

})
app.listen(port,()=>{

    console.log(`first code running on port :${port}`)
})

