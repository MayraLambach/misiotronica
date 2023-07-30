import './contact.css'
function Contact () {
    return (
        <div className="contact">
            <h1>Formulario de contacto</h1>
            <form method="POST">
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" name="nombre" placeholder="Ingresa tu nombre"/>
                </div>
                <div className="form-group">
                    <label>Email </label>
                    <input type="text" name="email" placeholder="Ingresa tu mail"/>
                </div>
                <div className="form-group">
                    <label>Mensaje </label>
                    <textarea name="mensaje" placeholder="Escribí tu mensaje"></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    )
}

export default Contact