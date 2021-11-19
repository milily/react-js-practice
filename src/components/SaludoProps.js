import React, {Fragment} from 'react';
import Avatar from './Avatar'

const Comentario = ({sujeto}) => {
    console.log(sujeto)
    return(
        <Fragment>
            <h2>Comentario</h2>
            <hr />
            <div className="media">
                <Avatar imagen={sujeto.urlImagen}/>
                <div className="media-body">
                    <h5 className="mt-0">{sujeto.nombre}</h5>
                    {sujeto.texto}
                </div>
            </div>
        </Fragment>
    )
}

export default Comentario