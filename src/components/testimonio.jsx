import React from 'react'
import '../style-sheets/Testimonio.css'
import '../App.js'

const testimonio = () => {
    return (
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require('../images/Image20240227183528.png')} alt="imagen" />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
                <p className='cargo-testimonio'>Ingeniera de Software en Spotify</p>
                <p className='texto-cargo'>Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero la clase de programación web I fue donde aprendí. Estudiar JavaScript, así como estructuras de datos y algoritmos en la clase me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.</p>
            </div>
        </div>
    )
}

export default testimonio
