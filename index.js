const express = require ("express")

const hbs = require ("hbs")
const app = express()
const port = 3000
app.use(express.static(__dirname + '/public'))
app.set('views engine','hbs')
//iniciar express y handlebars
app.get ('/', function(req, res){
  res.render("index.hbs")
})

  app.listen(port, () => {
console.log  (`servidor en puerto ${port}`)
}
)

