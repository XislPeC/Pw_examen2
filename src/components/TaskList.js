import React from "react";

const TaskList = ()=>{
    
    return(
        <div className="card mt-3">
            <div className="card-header">
                
            </div>
            
            <div className="card-body">
                <h4> Project List</h4>
               
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Indicador Terminado</th>
                            <th>Id proyecto</th>
                         
                        </tr>
                    </thead>
                    
                   
                       
                </table>
                 </div> 
            <div className="card-footer text-muted">

            </div>
        </div>
    )
}


export default TaskList;