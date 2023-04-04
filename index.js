const express = require ("express")
const hbs = require ("hbs")
const fs = require ("fs")
const { error } = require("console")

hbs.registerPartials(__dirname +"/views/partials")



const app = express()
const port = 3000
const Pool = require('pg').Pool
const pool = new Pool({
  user:'postgres',
  host:'localhost',
  database:'feria_de_flores',
  password:'teresa',
  port: 5432,
})

app.use(express.static(__dirname + '/public'))
app.set('views engine','hbs')



//iniciar express y handlebars
//app.get ('/', function(req, res){
//  fs.readFile("./ramo.json", 'utf8', function(err, data){
//  const ramos = JSON.parse(data)
// res.render("index.hbs",ramos)
//})

app.get ('/', async function(req, res){

  
  const results = await pool.query('SELECT * FROM ramo');
  const ramos = {ramo:results.rows} 
  res.render("index.hbs",ramos)
  //console.table(results.rows);
});

//app.get ('/datos', function(req, res){
 // fetch("C:\Javascript\tareas-pasadas\Proyecto-Feria-de-Flores\ramo.json",{ 
 //   headers: { 'Content-Type': "application/json"},
 // })
 // .then(data => data.json()) 
 // .then(result => console.log(result) )
 // res.send("corriendo")
//})
//})

app.listen(port, () => {
  console.log  (`servidor en puerto ${port}`)
})

