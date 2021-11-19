import React, {Fragment, useState} from 'react';

const Formulario = () =>{

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = () => {
        Event.preventDefault();
    }

    return(
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input
                        placeholder="Ingrese Nombre"
                        className="form-control"
                        type="text"
                        name="nombre"
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className="col-md-3">
                    <input
                        placeholder="Ingrese Apellido"
                        className="form-control"
                        type="text"
                        name="apellido"
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
            <h2>{datos.nombre} - {datos.apellido}</h2>
        </Fragment>
    )
}

export default Formulario