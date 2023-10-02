import React from "react";
import "./productos.css";


function Productos() {
  return (
    <div>
      <button type="button" class="collapsible">Aviso de Mantenimiento</button>
      <div class="content">
        <p>Es posible experimentar errores</p>
      </div>
      <div className="titulos">
        <h1>Ahorra en una Mac o un</h1>
        <h1>iPad para la universidad.</h1>
      </div>
      <div class="subtitulos">
        <p>Obtén unos Airpods con la Mac y un Apple Pencil con el iPad,</p>
        <p>20% de descuento en el AppleCare+ y mucho más.</p>
      </div>
      <div className="container">
        <button class="link">Comprar</button>
      </div>
      <div class="container">
        <img
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-back-to-school-202306-seg_GEO_MX_FMT_WHH?wid=406&hei=368&fmt=png-alpha&.v=1685549114085"
          alt="iPad"
        ></img>
      </div>
      <div class="titulos">
        <h1>iPhone 14</h1>
      </div>
      <div class="subtitulos">
        <p>Estuche de monerías</p>
      </div>
      <div className="container">
        <button class="link">Comprar</button>
      </div>
      <div class="container">
        <img
          src="https://www.apple.com/v/iphone-14/i/images/meta/iphone-14_overview__50yr9pd9hfm2_og.png"
          alt="iphone-14"
          width="50%"
          height="50%"
        ></img>
      </div>
    </div>
  );
}

export default Productos;
