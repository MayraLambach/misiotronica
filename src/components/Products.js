import Card from './card/Card'
import './products.css'

import product1 from '../assets/cable hdmi.jpg' 
import product2 from '../assets/cable usb tipo C.jpg' 
import product3 from '../assets/extensor wifi.jpg' 
import product4 from '../assets/luz led wifi.jpg' 
import product5 from '../assets/placa de sonido.jpg' 
import product6 from '../assets/placa sonido externa.jpg' 

/*
const products = [{
    image:{product1},
    title:"Cable HDMI",
    description:"Este cable es ideal para conectar tus dispositivos de manera fácil y sencilla. Podrás transferir tu audio y video."
    },{
    image:{product2},
    title:"Cable USB tipo C",
    description:"Compatible con carga rápida, lo que posibilita usarlo con la mayoría de los cargadores rápidos del mercado."
    },{
    image:{product3},
    title:"Extensor wifi",
    description:"Amplifica la señal de tu Internet inalámbrico por hasta 40m."
    },{
    image:{product4},
    title:"Foco inteligente",
    description:"Este foco compatible con Wi-Fi puede ser una excelente opción si buscás automatizar el encendido y apagado desde aplicaciones del teléfono y desde un asistente virtual."
    },{
    image:{product5},
    title:"Placa de sonido PCI",
    description:"La placa de sonido te te asegura trasladar a tu puerto PCI EXPRESS la mejor calidad de audio con sonido envolvente."
    },{
    image:{product6},
    title:"Placa de sonido externa",
    description:"Con esta placa externa tendrás audio Surround y 3D mediante tu puerto USB, es Plug and Play por lo que no necesitarás instalar drivers adicionales una vez conectado. "
    }
]

*/

function Products() {
    return (
        <div className='products'>
            <div className='product' id='product-1'>
                <Card
                    image={product1}
                    title="Cable HDMI"
                    description="Este cable es ideal para conectar tus dispositivos de manera fácil y sencilla. Podrás transferir tu audio y video."
                />
            </div>
            <div className='arrows'>
                <a href="#product-6">
                    <i className="fa-sharp fa-solid fa-arrow-left fa-beat-fade fa-2xs"></i>
                </a>
                <a href="#product-2">
                    <i className="fa-sharp fa-solid fa-arrow-right fa-beat-fade fa-2xs"></i>
                </a>
            </div>
            <div className='product' id='product-2'>
                <Card
                    image={product2}
                    title="Cable USB tipo C"
                    description="Compatible con carga rápida, lo que posibilita usarlo con la mayoría de los cargadores rápidos del mercado."
                />
            </div>
            <div className='arrows'>
                <a href="#product-1">
                    <i className="fa-sharp fa-solid fa-arrow-left fa-beat-fade fa-2xs"></i>
                </a>
                <a href="#product-3">
                    <i className="fa-sharp fa-solid fa-arrow-right fa-beat-fade fa-2xs"></i>
                </a>
            </div>
            <div className='product' id='product-3'>
                <Card
                    image={product3}
                    title="Extensor wifi"
                    description="Amplifica la señal de tu Internet inalámbrico por hasta 40m."
                />
            </div>
            <div className='arrows'>
                <a href="#product-2">
                    <i className="fa-sharp fa-solid fa-arrow-left fa-beat-fade fa-2xs"></i>
                </a>
                <a href="#product-4">
                    <i className="fa-sharp fa-solid fa-arrow-right fa-beat-fade fa-2xs"></i>
                </a>
            </div>
            <div className='product' id='product-4'>
                <Card
                    image={product4}
                    title="Foco inteligente"
                    description="Este foco compatible con Wi-Fi puede ser una excelente opción si buscás automatizar el encendido y apagado desde aplicaciones del teléfono y desde un asistente virtual."
                />
            </div>
            <div className='arrows'>
                <a href="#product-3">
                    <i className="fa-sharp fa-solid fa-arrow-left fa-beat-fade fa-2xs"></i>
                </a>
                <a href="#product-5">
                    <i className="fa-sharp fa-solid fa-arrow-right fa-beat-fade fa-2xs"></i>
                </a>
            </div>
            <div className='product' id='product-5'>           
                <Card
                    image={product5}
                    title="Placa de sonido PCI"
                    description="La placa de sonido te te asegura trasladar a tu puerto PCI EXPRESS la mejor calidad de audio con sonido envolvente."
                />
            </div>
            <div className='arrows'>
                <a href="#product-4">
                    <i className="fa-sharp fa-solid fa-arrow-left fa-beat-fade fa-2xs"></i>
                </a>
                <a href="#product-6">
                    <i className="fa-sharp fa-solid fa-arrow-right fa-beat-fade fa-2xs"></i>
                </a>
            </div>
            <div className='product' id='product-6'>
                <Card
                    image={product6}
                    title="Placa de sonido externa"
                    description="Con esta placa externa tendrás audio Surround y 3D mediante tu puerto USB, es Plug and Play por lo que no necesitarás instalar drivers adicionales una vez conectado. "
                />
            </div>
            <div className='arrows'>
                <a href="#product-5">
                    <i className="fa-sharp fa-solid fa-arrow-left fa-beat-fade fa-2xs"></i>
                </a>
                <a href="#product-1">
                    <i className="fa-sharp fa-solid fa-arrow-right fa-beat-fade fa-2xs"></i>
                </a>
            </div>
        </div>
    )
}


export default Products