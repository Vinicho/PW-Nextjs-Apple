import React from "react";
import "./header.css"

 export default function Header (){
    return(
        <header>
      <div className="barra">
        <img
          src="https://1000marcas.net/wp-content/uploads/2019/11/Apple-Logo.jpg"
          alt="Apple-Logo" width="35" height="27"></img>
        <p>Tienda</p>
        <p>Mac</p>
        <p>iPad</p>
        <p>iPhone</p>
        <p>Watch</p>
        <p>Airpods</p>
        <p>TV y Casa</p>
        <p>Entrenimiento</p>
        <p>Accesorios</p>
        </div>
    </header>
    );
 }