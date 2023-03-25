const express = require ("express")
const hbs = require ("hbs")

hbs.registerPartials(__dirname +"/views/partials")

const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'))
app.set('views engine','hbs')



//iniciar express y handlebars
app.get ('/', function(req, res){
  res.render("index.hbs")
})

app.get ('/datos', function(req, res){
  fetch("ramo.json").then(data => data.json()) .then(result => res.render (result) )})

  app.listen(port, () => {
console.log  (`servidor en puerto ${port}`)
}
)

