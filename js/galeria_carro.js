const ramos = [
  {    "id": "mb1",
      "nombre":"Mini Bouquet",
      "descripcion":"Colorido mix de flores",
      "precio": 9900,
      "imagen":"imagenes/mini-bouquet.jpg",
      "id_categoria":"1",
      "es_destacada":true ,
      "precio_oferta":8000,
      "stock":20,
      "mas_vendida": false
    },
    {
      "id": "ci1",
      "nombre":"Cucurucho Ilusión",
      "descripcion":"Hermosos botones Rosas amarillas",
      "precio": 11900,
      "imagen": "imagenes/cucurucho-ilusion.jpg",
      "id_categoria":"1",
      "es_destacada": false,
      "precio_oferta":0,
      "stock":7,
      "mas_vendida": false
    },
    {
      "id": "rr1",
      "nombre":"Ramo Rosas rojas",
      "descripcion":"Seis bellas Rosas rojas",
      "precio": 12900,
      "imagen":"imagenes/rosas-rojas.jpg",
      "id_categoria":"2",
      "es_destacada":false,
      "precio_oferta":0,
      "stock":11,
      "mas_vendida": false
    },
    {
      "id": "cmf1",
      "nombre":"Centro de Mesa Flores Mixtas",
      "descripcion":"Centro de mesa y mix de flores",
      "precio": 14900,
      "imagen":"imagenes/flores-mixtas.jpeg",
      "id_categoria":"3",
      "es_destacada":false,
      "precio_oferta":0,
      "stock":8,
      "mas_vendida": false
    },
    {
      "id": "cm1",
      "nombre":"Cucurucho Maravillas",
      "descripcion":"Seis luminosas Maravillas y hojas",
      "precio": 12900,
      "imagen":"imagenes/girasoles-acostados.jpg",
      "id_categoria":"1",
      "es_destacada":true,
      "precio_oferta":9000,
      "stock":4,
      "mas_vendida": false
    },
    {
      "id": "rc1",
      "nombre":"Ramo colores Liliums",
      "descripcion":"Alegre ramo colores Liliums",
      "precio": 15900,
      "imagen":"imagenes/ramo-variado-liliums.jpg",
      "id_categoria":"1",
      "es_destacada":false,
      "precio_oferta":0,
      "stock":12,
      "mas_vendida": false
    },
    {
      "id": "ca1",
      "nombre":"Cucurucho Alstromerias",
      "descripcion":"Colorido cucurucho mix Alstromerias",
      "precio": 11900,
      "imagen":"imagenes/cucurucho-alstromerias.jpg",
      "id_categoria":1,
      "es_destacada":false,
      "precio_oferta":0,
      "stock":9,
      "mas_vendida": false
    },
    {
      "id": "ctr1",
      "nombre":"Cucurucho Tulipanes Rojos",
      "descripcion":"Cucurucho Tulipanes color a elección",
      "precio": 18900,
      "imagen":"imagenes/cucurucho-tulipanes-rojos.jpg",
      "id_categoria":"1",
      "es_destacada":false,
      "precio_oferta":0,
      "stock":18,
      "mas_vendida": false
    },
    {
      "id": "rl1",
      "nombre":"Ramo Lisianthus",
      "descripcion":"Ramo Lisianthus primaveral",
      "precio": 14900,
      "imagen":"imagenes/lisianthus-primaveral.jpg",
      "id_categoria":"2",
      "es_destacada":false,
      "precio_oferta":0,
      "stock":14,
      "mas_vendida": false
    },
    {
      "id": "rg1",
      "nombre":"Ramo Gerberas",
      "descripcion":"Ramo Gerberas mixtas",
      "precio": 12900,
      "imagen":"imagenes/ramo-gerberas.jpg",
      "id_categoria":"2",
      "es_destacada":false,
      "precio_oferta":0,
      "stock":11,
      "mas_vendida": false
    },
    {
      "id": "afb1",
      "nombre":"Arreglo Flores Blancas",
      "descripcion":"Arreglo en florero de flores blancas",
      "precio": 22900,
      "imagen":"imagenes/arreglo-florero-blanco.jpg",
      "id_categoria":"3",
      "es_destacada":false,
      "precio_oferta":0,
      "stock":22,
      "mas_vendida": false
    },
    {
      "id": "afr1",
      "nombre":"Arreglo Flores Rosadas",
      "descripcion":"Arreglo en florero de flores rosadas",
      "precio": 22900,
      "imagen":"imagenes/arreglo-florero-rosado.jpg",
      "id_categoria":"3",
      "es_destacada":true,
      "precio_oferta":16000,
      "stock":9,
      "mas_vendida": false
    },
    {
      "id": "amc1",
      "nombre":"Arreglo Mini Claveles",
      "descripcion":"Colorida cesta de claveles amarillos",
      "precio": 29900,
      "imagen":"imagenes/arreglo-mini-clavel.jpg",
      "id_categoria":"3",
      "es_destacada":false,
      "precio_oferta":0,
      "stock":20,
      "mas_vendida": false
    },
    {
      "id": "aa1",
      "nombre":"Arreglo Aniversario",
      "descripcion":"Hermosa caja cintas y rosas",
      "precio": 32900,
      "imagen":"imagenes/arreglo-aniversario.jpg",
      "id_categoria":"5",
      "es_destacada":false,
      "precio_oferta":0,
      "stock":12,
      "mas_vendida": false
    },
    {
      "id": "an1",
      "nombre":"Arreglo Nacimiento",
      "descripcion":"Arreglo flores mixtas y peluche",
      "precio": 39900,
      "imagen":"imagenes/arreglo-nacimiento.jpg",
      "id_categoria":"4",
      "es_destacada":false,
      "precio_oferta":0,
      "stock":6,
      "mas_vendida": true
    },
    {
      "id": "cg1",
      "nombre":"Caja Girasoles",
      "descripcion":"Elegante caja con seis girasoles",
      "precio": 35000,
      "imagen":"imagenes/caja-girasoles.jpg",
      "id_categoria":"5",
      "es_destacada":true,
      "precio_oferta":28000,
      "stock":7,
      "mas_vendida": false
    },
    {
      "id": "ce1",
      "nombre":"Canasto Enamorados",
      "descripcion":"Florido Canasto cintas y globo",
      "precio": 45900,
      "imagen":"imagenes/canasto-enamorados-globo.jpg",
      "id_categoria":"5",
      "es_destacada":false,
      "precio_oferta":0,
      "stock":13,
      "mas_vendida": false
    },
    {
      "id": "arb1",
      "nombre":"Arreglo Rosas Blancas",
      "descripcion":"Pequeña cesta rosas blancas",
      "precio": 29900,
      "imagen":"imagenes/arreglo-rosas-blancas.jpg",
      "id_categoria":"5",
      "es_destacada":false,
      "precio_oferta":0,
      "stock":17,
      "mas_vendida": false
    },
    {
      "id": "rrc1",
      "nombre":"Ramo Rosas Circular",
      "descripcion":"Elegante ramo rosas rojas",
      "precio": 42900,
      "imagen":"imagenes/ramo-rosas-circular.jpg",
      "id_categoria":"5",
      "es_destacada":false,
      "precio_oferta":0,
      "stock":15,
      "mas_vendida": false
    }
  ]
