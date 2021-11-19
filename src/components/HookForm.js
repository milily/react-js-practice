import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form'


const HookForm = () =>{

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <Fragment>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input
                placeholder="Ingrese Nombre"
                className="form-control my-2"
                type="text"
                name="nombre"
                {...register("message", {
                    required: "Obligatorio"
                })}
            />
            <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <span className="text-danger text-small d-block mb-2">
                {errors?.nombre?.message}
            </span>
        </Fragment>
    )
}

export default HookForm