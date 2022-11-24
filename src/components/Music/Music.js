import { servicioCanciones } from '../../services/servicioCanciones.js'
import './Music.scss'

// usar el hook usestate para almacenar la respuesta del servicio de forma global
import { useState, useEffect } from 'react';

export function Music () {
    // creando mi primer useState
    const [canciones, setCanciones] = useState(null)
    const [estamosCargando, setEstamosCargando] = useState(true)

    useEffect(function () {
        servicioCanciones()
        .then(function (respuesta) {
            setCanciones(respuesta)
            setEstamosCargando(false)
        })
    }, [])
    
    if (estamosCargando) {
        return (
            <>
                <h1>CARGANDO...</h1>
            </>
        )
    } else {
        return (
            <>
                <h1 className="titleMusic mt-5">Top Tracks</h1>
                <div className="row row-cols-1 row-cols-md-5 g-2 mt-1 p-5">
                    {
                        canciones.tracks.map(function (cancion) {
                            return (
                                <>
                                 <div className="col mt-3">
                                    <div className="card h-100">
                                        <img src={ cancion.album.images[0].url } alt={ cancion.album.name } className="img-fluid w-100" />
                                        <div className="p-2">
                                            <h6>{ cancion.name }</h6>
                                            <audio controls className='w-100'>
                                                <source src={ cancion.preview_url } />
                                            </audio>
                                        </div>
                                    </div>
                                </div>
                                    
                                </>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}