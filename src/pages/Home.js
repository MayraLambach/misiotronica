import './home.css'
import banner from '../assets/banner.jpg'
const Home = () => {
    return (
        <div className="home">
            <p>Bienvenidos a la tienda online</p>
            <div className='banner' >
                <img src={banner} alt="banner" id='banner' />
            </div>
        </div>
    )
}

export default Home