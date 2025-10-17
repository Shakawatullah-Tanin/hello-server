const express = require ("express")

const app = express()
const port = 5004;


const phones = require("./phone.json");



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

app.get("/phones", (req,res)=>{

    res.send(phones)

})






app.get("/phones/:id", (req,res)=>{


    const id = parseInt(req.params.id);

    const phone = phones.find(phone=>phone.id===id)

 

    console.log("i need data for:",id)
       res.send(phone)

   


})















app.listen(port,()=>{

    console.log(`first code running on port :${port}`)
})

