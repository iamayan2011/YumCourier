import React from "react";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner carousell">
          <div className="carousel-caption" style={{ zIndex: "100" }}>
          <div class="row no-gutters mt-3 align-items-center">
        <div class="col col-md-4">
            <input className="form-control border-secondary rounded-pill pr-5" type="search" value="search" id="example-search-input2" />
        </div>
        <div class="col-auto">
            <button class="btn btn-outline-light text-dark border-0 rounded-pill ml-n5" type="button">
                <i class="fa fa-search"></i>
            </button>
        </div>
    </div>



          <div className="col col-md-4">
            <input className="form1" />
        </div>
        <div className="col-auto">
            <button className="btn btn-outline-light text-dark border-0 rounded-pill ml-n5" type="button">
                <i className="fa fa-search"></i>
            </button>
        </div>
          </div>

          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/900x700/?burger"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?pizza"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?pasta"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
