import React from "react";


const ProyectType=()=> {
    return(
        <div className="tipo">
            
            <p>Tipo de proyecto</p>
            <div> 
                <input type= "button"> FrontEnd</input> 
                <input type= "button"> BackEnd</input> 
            </div>
            <p> Tecnologías</p>
            <div><input type="checkbox"> HTML</input>  </div>
            <div><input type="checkbox"> CSS</input>  </div>
            <div><input type="checkbox"> JAVASCRIPT</input>  </div>
        </div>
    )
}


export default ProyectType