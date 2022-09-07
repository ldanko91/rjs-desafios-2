import bcp500 from '../images/500bcp.jpg'
import tcp500 from '../images/500tcp.png'
import bcp750 from '../images/750bcp.jfif'
import tcp750 from '../images/750tcp.png'
import std50 from '../images/std50.jpg'
import std60 from '../images/std60.jpg'
import mar50 from '../images/maral50.jpg'
import mar60 from '../images/maral60.jpg'





const tanquesImpor = [
    {
        id: 500,
        rubro: 'tanques',
        nombre: 'Tanque 500 lts bicapa',
        img: bcp500,
        precio: 9000,
        stock: 10,

    },

    {
        id: 501,
        rubro: 'tanques',
        nombre: 'Tanque 500 lts tricapa',
        img: tcp500,
        precio: 12000,
        stock: 14,

    },

    {
        id: 750,
        rubro: 'tanques',
        nombre: 'Tanque 750 lts bicapa',
        img: bcp750,
        precio: 14000,
        stock: 15,

    },

    {
        id: 751,
        rubro: 'tanques',
        nombre: 'Tanque 750 lts tricapa',
        img: tcp750,
        precio: 19000,
        stock: 10,

    },

    {
        id: 5050,
        rubro: 'vanitorys',
        nombre: 'Vanitory 50 cm standard',
        img: std50,
        precio: 14000,
        stock: 10,

    },

    {
        id: 6060,
        rubro: 'vanitorys',
        nombre: 'Vanitory 60 cm standard',
        img: std60,
        precio: 20000,
        stock: 14,

    },

    {
        id: 5055,
        rubro: 'vanitorys',
        nombre: 'Vanitory Maral 50 cm',
        img: mar50,
        precio: 20000,
        stock: 15,

    },

    {
        id: 6065,
        rubro: 'vanitorys',
        nombre: 'Vanitory Maral 60 cm',
        img: mar60,
        precio: 25000,
        stock: 10,

    },
]

export default tanquesImpor;