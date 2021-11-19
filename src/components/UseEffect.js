import React, { Fragment, useEffect, useState } from "react";

const UsandoUseEffect = () => {

    const [gif, setGifs] = useState([])
    
    useEffect(() => {
        obtenerDatos()
    },[])

    const obtenerDatos = async () => {
        const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=jZAJlmxlBdnQgXUmSbC66TbjF4oYOb4k&q=gatitos&limit=25&offset=0&rating=pg&lang=en')
        const gifsResponse = await response.json()
        setGifs(gifsResponse.data)
    }

    return(
        <Fragment>
            <h1>GIPHY</h1>
            {
                gif.map(gif => {
                    return <img alt="imagen" src={gif.images.downsized.url}/>
                })
            }
        </Fragment>
    )
}

export default UsandoUseEffect