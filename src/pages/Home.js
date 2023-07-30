import './home.css'
import banner from '../assets/banner.jpg'
const Home = () => {
    return (
        <div className="home">
            <h1>Misiotrónica</h1>
            <p>Bienvenidos a la tienda online</p>
            <img src={banner} alt="banner" className='banner' />
        </div>
    )
}

export default Home