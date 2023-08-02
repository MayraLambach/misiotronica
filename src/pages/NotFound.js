import error from '../assets/error.png'
import './notFound.css'

const NotFound = () => {
    return (
        <div className="notFound">
            <h1>Página inexistente</h1>
            <p>Todo lo que buscabas acá no está. </p>
            <img src={error} alt="Imagen de error" className='bannererror'/>
        </div>
    )
}

export default NotFound