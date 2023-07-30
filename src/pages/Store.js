import Busqueda from '../components/Busqueda';
import Products from '../components/Products';
import './store.css'

const Store = () => {
    return (
        <div className="store">
            <h1>Productos</h1>
                <Busqueda />
                <Products />
        </div>
    )
}

export default Store