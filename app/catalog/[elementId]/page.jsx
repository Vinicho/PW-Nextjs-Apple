"use client"
import React, {useEffect} from "react";

const ElementId = (props) =>{
    return(
       <div>
        <h1>Informacion del articulo: {props.params.elementId}</h1>
       </div> 
    );
}
export default ElementId;