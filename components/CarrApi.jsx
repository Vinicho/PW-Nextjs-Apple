"use client"
import React, {useEffect, useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

export default function CarrApi() {
    const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photosData = await data.json();
        console.log(photosData);
        setPhotos(photosData.slice(0, 3).map((photo) => photo.url));
    };
    obtenerDatos();
  }, []);
   
    return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={photos[0]} class="d-block w-100" alt="Ayuda" id="id1"></img>
          </div>
          <div class="carousel-item">
            <img src={photos[1]} class="d-block w-100" alt="..." id="id2"></img>
          </div>
          <div class="carousel-item">
            <img src={photos[2]} class="d-block w-100" alt="..." id="id3"></img>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
