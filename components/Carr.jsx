"use client";
import React, { useEffect, useState } from "react";
import "./carr.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Carr() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="6"
          aria-label="Slide 7"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://images6.fanpop.com/image/photos/35800000/-Wallpapers-Full-HD-random-35881403-2560-1440.jpg" class="d-block w-100" alt="..."></img>
        </div>
        <div class="carousel-item">
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-1-202209?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1660753619946" class="d-block w-100" alt="..."></img>
        </div>
        <div class="carousel-item">
          <img src="https://images7.alphacoders.com/442/442140.jpg" class="d-block w-100" alt="..."></img>
        </div>
        <div class="carousel-item active">
          <img src="https://www.economistjurist.es/wp-content/uploads/sites/2/2022/09/Apple-scaled.jpg" class="d-block w-100" alt="..."></img>
        </div>
        <div class="carousel-item active">
          <img src="https://www.soundguys.com/wp-content/uploads/2022/09/Apple-AirPods-Pro-2nd-generation-true-wireless-earbuds-scaled.jpg" class="d-block w-100" alt="..."></img>
        </div>
        <div class="carousel-item active">
          <img src="https://www.wallpaperflare.com/static/524/985/235/apples-knife-humor-red-wallpaper.jpg" class="d-block w-100" alt="..."></img>
        </div>
        <div class="carousel-item active">
          <img src="https://photofocus.com/wp-content/uploads/2022/03/MacStudio-021-arw_DxO_DeepPRIME.jpg" class="d-block w-100" alt="..."></img>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
