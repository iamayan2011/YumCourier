import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from "react-redux";

export default function NavBar() {

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    navigate("/login")
  }


    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    })

    

  return (
    <div>
      <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <div className="container-fluid">
        <img src="logo-no-background.png" alt="YumCourier"  className="btn mx-2 active" style={{height:"45px",objectFit: "fill"}} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-6"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-6"
                    aria-current="page"
                    to="/order"
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="btn bg-white btntxt1 mx-1 my-1" to="/login">
                  Login
                </Link>

                <Link
                  className="btn bg-white btntxt1 mx-1 my-1"
                  to="/createuser"
                >
                  SignUp
                </Link>
              </div>
            ) : (
              <div className="d-flex">
                <Link className="mx-3" to="/cart">
                <img src="myCart.jpg" alt="My Cart"  className="btn active btncart" style={{height:"45px",objectFit: "fill"}} /><span>
                <Badge pill style={{"backgroundColor": "white"}}>{totalQuantity}</Badge>
                </span>
                
                </Link>
                
                
                <div className="btn bg-white btntxt1 mx-1 my-1" onClick={handleLogout}>
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </Navbar>
    </div>
  );
}
