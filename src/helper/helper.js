import bcp500 from '../assets/images/500bcp.jpg'
import tcp500 from '../assets/images/500tcp.png'
import bcp750 from '../assets/images/750bcp.jfif'
import tcp750 from '../assets/images/750tcp.png'

const tanquesImpor = [
    {
        id: 500,
        name: 'Tanque 500 lts bicapa',
        img: bcp500,
        price: 9000,

    },

    {
        id: 501,
        name: 'Tanque 500 lts tricapa',
        img: tcp500,
        price: 12000,

    },

    {
        id: 750,
        name: 'Tanque 750 lts bicapa',
        img: bcp750,
        price: 14000,

    },

    {
        id: 751,
        name: 'Tanque 750 lts tricapa',
        img: tcp750,
        price: 19000,

    },
]

const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(tanquesImpor)
        reject(err => console.log(err))
    }, 3000)
})

export default getFetch