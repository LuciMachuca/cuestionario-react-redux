import React from 'react';
import { Link } from 'react-router-dom';

export default function Inicio() {
    return (

        <div class="landing d-flex flex-column justify-content-center align-content-center flex-wrap">

            <div class="text-center p-5">
                <h2>16 Personalidades</h2>
                <h3 class="mt-2">Test de Personalidades</h3>
                <h6 class="mt-3">Toma menos de 12 minutos.</h6>
                <h6 class="mt-3">Responde honestamente (aun si no te gusta la respuesta).</h6>
                <h6 class="mt-3">Trata de no dejar ninguna respuesta como “neutral”.</h6>

                <Link to='/home'>
                    <button class="btn mt-3" type="button">Comenzar</button></Link></div>


        </div>

    )
}