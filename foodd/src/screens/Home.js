import React, { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  const loadData = async () => {
    setLoading(true); // start loading
    try {
      let response = await fetch("https://yumcourier-backend1.onrender.com/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      response = await response.json();
      setFoodItem(response[0]);
      setFoodCat(response[1]);
    } catch (err) {
      console.error("Error fetching data", err);
    }
    setLoading(false); // end loading
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
   

<>
  <div>
    <NavBar />
  </div>

  {/* Carousel - always visible */}
  <div
    id="carouselExampleControls"
    className="carousel slide"
    data-bs-ride="carousel"
    style={{ objectFit: "contain !important" }}
  >
    <div className="carousel-inner carousell">
      <div className="carousel-caption" style={{ zIndex: "100" }}>
        <div className="d-flex justify-content-center">
          <input
            className="form-control form1"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="carousel-item active">
        <img
          src="https://thumbs.dreamstime.com/b/veggie-beet-quinoa-burger-avocado-51974112.jpg"
          className="d-block w-100"
          alt="..."
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg"
          className="d-block w-100"
          alt="..."
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?semt=ais_hybrid&w=740"
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
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

  {/* Loader or Content */}
  <div className="container my-4">
    {loading ? (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "40vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    ) : (
      foodCat.map((data) => (
        <div className="row mb-3" key={data._id}>
          <div className="fs-3 m-3">{data.CategoryName}</div>
          {foodItem
            .filter(
              (item) =>
                item.CategoryName === data.CategoryName &&
                item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((filterItems) => (
              <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                <Card foodItem={filterItems} options={filterItems.options[0]} />
              </div>
            ))}
        </div>
      ))
    )}
  </div>

  <Footer />
</>

  );
}
