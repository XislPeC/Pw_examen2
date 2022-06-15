import React from "react";



const ProyectType=()=> {
    const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
    return(
        <div className="tipo">
            
            <p>Tipo de proyecto</p>
            <form> 
                <label>
                    <input type= "button" name="FrontEnd"> </input> 
                    <input type= "button" name ="Backend"> </input> 
                </label>
                <p> Tecnologías</p>
                <div><input type="checkbox" checked={checked}
          onChange={handleChange}> HTML</input>  </div>
                <div><input type="checkbox" checked={checked}
          onChange={handleChange}> CSS</input>  </div>
                <div><input type="checkbox" checked={checked}
          onChange={handleChange}> JAVASCRIPT</input>  </div>
            </form>
            
        </div>
    )
}


export default ProyectType