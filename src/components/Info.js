import React from "react"

const Info= _ => {
    return(
        <div className="info">
            <div className="paso1">
                <h3>Paso 1: Registre su proyecto</h3>
                <div className="nombre"> Nombre : <input type="text"> </input>   </div> 
                <div className="fechaIni">Fecha Inicio:</div> <input type="date"> </input>
                <div className="fechaFin">Fecha Fin:</div> <input type="date"> </input>
                <div className="prioridad" >Prioridad: <input type="number" id="quantity" name="quantity" min="1" max="99"></input> </div>
            </div>
        </div>
    )
}
export default Info;
