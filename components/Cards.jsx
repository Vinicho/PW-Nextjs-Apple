'use client'
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cards.css"
import { idList } from "./CarrApi";

export default function Cards(props) {
  const [ids, setIds] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photosData = await data.json();
        setIds(photosData.slice(0, 3).map((photo) => photo.id));
    };
    obtenerDatos();
  }, []);

  return (
    <div>
      <div className="contenedor-cards">
        <div class="card bg-dark text-white" style={{width: + "48vw"}}>
          <img
            src="https://www.tuttotech.net/wp-content/uploads/2023/08/Apple-Evento-lancio-Wonderlust-iPhone-15-Hero.jpg"
            className="card-img"
            alt="..."
          ></img>
          <div className="card-img-overlay">
            <h1 class="card-title ">Evento apple</h1>
            <h4 class="card-text">
              Velo online el 12 de septiembre a las 11 a.m
            </h4>
            <h6 class="card-text">{props.title}</h6>
            <Link href={`/catalog/${ids[0]}`}>
              <button>Consultar</button>
            </Link>
          </div>
        </div>
        <div class="card bg-dark text-white" style={{width: + "48vw"}}>
          <img
            src="https://www.apple.com/v/iphone-14-pro/h/images/meta/iphone-14-pro_overview__3dn6st99cpea_og.png"
            className="card-img"
            alt="..."
          ></img>
          <div className="card-img-overlay">
            <h1 class="card-title">iPhone 14 Pro</h1>
            <h4 class="card-text">Se pasa de Pro.</h4>
            <h6 class="card-text">Más información </h6>
          </div>
        </div>
      </div>
      <div className="contenedor-cards">
        <div class="card bg-dark text-white" style={{width: + "48vw"}}>
          <img
            src="https://www.apple.com/newsroom/images/product/ipad/standard/Apple-iPad-Pro-Magic-Keyboard-M2-hero-2up-221018.jpg.og.jpg?202308281635"
            className="card-img"
            alt="..."
          ></img>
          <div className="card-img-overlay">
            <h1 class="card-title ">iPad Pro</h1>
            <h4 class="card-text">Con los superpoderes del chip M2</h4>
            <h6 class="card-text">Más información </h6>
          </div>
        </div>
        <div class="card bg-light text-dark" style={{width: + "48vw"}}>
          <img
            src="https://www.apple.com/newsroom/images/product/watch/standard/Apple-Watch-SE-8up-hero-220907_big.jpg.large.jpg"
            className="card-img"
            alt="..."
          ></img>
          <div className="card-img-overlay">
            <h1 class="card-title">Apple Watch Series 8</h1>
            <h4 class="card-text">Una evolución muy saludable.</h4>
            <h6 class="card-text">Más información </h6>
          </div>
        </div>
      </div>
      <div className="contenedor-cards">
        <div class="card bg-light text-dark" style={{width: + "48vw"}}>
          <img
            src="https://i.ytimg.com/vi/9beTMMs77bI/maxresdefault.jpg"
            className="card-img"
            alt="..."
          ></img>
        </div>
        <div class="card bg-light text-dark" style={{width: + "48vw"}}>
          <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-og-202110?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1632930650000"
            className="card-img"
            alt="..."
          ></img>
          <div className="card-img-overlay">
            <h1 class="card-title">HomePod Mini</h1>

            <h6 class="card-text">Más información </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
