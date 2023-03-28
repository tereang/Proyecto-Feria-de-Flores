const express = require ("express")
const hbs = require ("hbs")
const fs = require ("fs")

hbs.registerPartials(__dirname +"/views/partials")

const app = express()
const port = 3000


app.use(express.static(__dirname + '/public'))
app.set('views engine','hbs')



//iniciar express y handlebars
app.get ('/', function(req, res){
  fs.readFile("./ramo.json", 'utf8', function(err, data){
  const ramos = JSON.parse(data)
 res.render("index.hbs",ramos)
})

app.get ('/datos', function(req, res){
  fetch("C:\Javascript\tareas-pasadas\Proyecto-Feria-de-Flores\ramo.json",{ 
    headers: { 'Content-Type': "application/json"},
  })
  .then(data => data.json()) 
  .then(result => console.log(result) )
  res.send("corriendo")
})
})

app.listen(port, () => {
  console.log  (`servidor en puerto ${port}`)
})

