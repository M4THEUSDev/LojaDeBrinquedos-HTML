const express = require("express")
const app = express()
app.get("/",(req,res)=>{

    res.sendFile(__dirname+"/html/index.html")

})

app.get("/editar",(req,res)=>{

    res.sendFile(__dirname+"/html/editarBrinquedo.html")

})

app.get("/meninas",(req,res)=>{

    res.sendFile(__dirname+"/html/meninas.html")

})

app.get("/meninos",(req,res)=>{

    res.sendFile(__dirname+"/html/meninos.html")

})

app.get("/categorias",(req,res)=>{

    res.sendFile(__dirname+"/html/categorias.html")

})

app.get("/bebes",(req,res)=>{

    res.sendFile(__dirname+"/html/bebes.html")

})

app.get("/adicionar",(req,res)=>{

    res.sendFile(__dirname+"/html/adicionarBrinquedo.html")

})

app.get("/administracao",(req,res)=>{

    res.sendFile(__dirname+"/html/administracao.html")

})

app.get("/catalogo",(req,res)=>{

    res.sendFile(__dirname+"/html/Catalogo.html")

})



app.use("/css",express.static(__dirname+"/css"))
app.use("/assets",express.static(__dirname+"/assets"))


app.listen(8081,()=>{
    console.log("Servidor inicializado")
})