const express = require ("express")
const app = express()
const exphbs  = require('express-handlebars');
const hbs = require ("hbs")
const fs = require ("fs")
const { error } = require("console")
const router = express.Router();							
//const db = require('../db');		




// Configurar el motor de plantillas
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
    partialsDir: "views/partials/",
  
  })
);


hbs.registerPartials(__dirname +"/views/partials")




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

  const resultado = await fetch("http://localhost:4000/api/v1/ramos");
  const data = await resultado.json();
  //const results = await pool.query('SELECT * FROM ramo where stock >0 order by precio asc');
  const ramos = {ramo:data} 
  res.render("index.hbs",ramos) 
  //console.table(results.rows);
});

//boton para ver stock en ramo

				
router.get('/', (req, res) => {	

  
    pool.query('SELECT * FROM ramos INNER JOIN categorias on categorias.id = ramos.id_categoria WHERE stock > 0 and es_activa = TRUE	ORDER BY precio ASC', (err, results) => {							
        if (err) {							
            console.log(err);							
            res.status(500).send('Error al obtener los datos');							
        } else {	
       
          
            res.render('index.hbs', {ramos: results});							
        }							
    });							
});		

app.get('/carrito', (req, res) => {	
  res.render("carrito.hbs")
});
		
app.get('/historias', (req, res) => {	
  res.render("historias.hbs")
});


module.exports = router;							




//app.get ('/datos', function(req, res){
 // fetch("C:\Javascript\tareas-pasadas\Proyecto-Feria-de-Flores\ramo.json",{ 
 //   headers: { 'Content-Type': "application/json"},
 // })
 // .then(data => data.json()) 
 // .then(result => console.log(result) )
 // res.send("corriendo")
//})
//})

/*Construyendo carrito de compras

const	formRamos	=	document.querySelector('#form-ramos');			
const	carrito	=	document.querySelector('#carrito');			
const	total	=	document.querySelector('#total');			
const	botonComprar	=	document.querySelector('#boton-comprar');			
						
let	ramos	=	[];			
let	totalCompra	=	0;			
						
formRamos.addEventListener('submit',	agregarRamos);					
botonComprar.addEventListener('click',	comprarRamos);					

//function agregarProducto(evento) {							
  evento.preventDefault();							
							
  const ramo = document.querySelector('#ramos').value;							
  const precio = parseFloat(document.querySelector('#precio').value);							
  const cantidad = parseInt(document.querySelector('#cantidad').value);							
							
  const item = {							
    ramos: ramos,							
    precio: precio,							
    cantidad: cantidad							
  };							
							
  ramos.push(item);							
							
  mostrarRamos();							
						
function agregarRamos(evento) {							
  evento.preventDefault();							
							
  const ramos = document.querySelector('#ramos').value;							
  const precio = parseFloat(document.querySelector('#precio').value);							
  const cantidad = parseInt(document.querySelector('#cantidad').value);							
							
  const item = {							
    ramos: ramo,							
    precio: precio,							
    cantidad: cantidad							
  };							
							
  ramos.push(item);							
							
  mostrarRamos();							
}							
							
function mostrarRamos() {							
  carrito.innerHTML = '';							
							
  ramos.forEach(function(item) {							
    const li = document.createElement('li');							
    li.textContent = `${item.ramos} - Precio: ${item.precio} - Cantidad: ${item.cantidad}`;							
    carrito.appendChild(li);							
  });							
							
  actualizarTotal();							
}							
							
function actualizarTotal() {							
  totalCompra = 0;							
							
  ramos.forEach(function(item) {							
    totalCompra += item.precio * item.cantidad;							
  });							
							
  total.textContent = totalCompra.toFixed(2);							
}							
							
function comprarRamos() {							
  alert(`Has comprado ${ramos.length} productos por un total de ${totalCompra.toFixed(2)} pesos.`);							
  ramos = [];							
  mostrarRamos();							
}		*/					

app.listen(port, () => {
  console.log  (`servidor en puerto ${port}`)
})
