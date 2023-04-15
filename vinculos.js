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
app.get ('/', async function(req, res){

  
  const results = await pool.query('SELECT * FROM ramo where stock >0 order by precio asc');
  const ramos = {ramo:results.rows} 
  res.render("index.hbs",ramos) 
  
});


app.listen(port, () => {
  console.log  (`servidor en puerto ${port}`)
})

