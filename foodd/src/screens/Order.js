import React from "react";

import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow
} from "mdb-react-ui-kit";

import { useDispatch, useSelector } from "react-redux";

import OrderCard from "../components/OrderCard";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { cartActions } from "../features/AddToCart/cartSlice";


export default function Order() {
  let dispatch = useDispatch();
 
  const category = useSelector((state) => state.cart.category);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount2);
  const handleDelivered = async ()=> {
    await dispatch(
      cartActions.delivered({
        
      })
    );
  };

  

  return (
    <>
    <img
        src="https://source.unsplash.com/random/900x700/?burger"
        className="d-block w-100"
        style={{ height: "75vh", objectFit: "cover" }}
        alt="..."
      />
      <NavBar></NavBar>
      <section className="h-80 cartcard1 d-flex" style={{ backgroundColor: "#eee"}}>
        <MDBContainer className="py-5 h-100 w-120 cartcard1" style={{maxWidth:"180%", marginBottom:"20px"}}>
          <MDBRow className="justify-content-center align-items-center w-auto" style={{marginBottom:"20px"}}>
            <MDBCol lg="8" xl="6">
              <MDBCard className="border-top border-bottom border-3 border-color-custom cartcard1">
                <MDBCardBody className="p-4">
                  <p className="lead fw-bold mb-5" style={{ color: "#FF724C" }}>
                    Purchase Reciept
                  </p>

                  <MDBRow>
                    <MDBCol className="mb-3 cartcard1">
                      <p className="small text-muted mb-1">Date</p>
                      <p>10 April 2021</p>
                    </MDBCol>
                    <MDBCol className="mb-3">
                      <p className="small text-muted mb-1">Order No.</p>
                      <p>012j1gvs356c</p>
                    </MDBCol>
                  </MDBRow>

                  <div
                    className="mx-1 px-5 py-4"
                    style={{ backgroundColor: "#f2f2f2" }}
                  >
                    
                   
                    {(cartItems.filter((item) => category === "order")
                    ).map((item) => (
                            <div>
                              <hr></hr>
                              <OrderCard item={item}></OrderCard>
                            </div>

                            // <Tr item={item} key={item.id} />
                          ))}

                    {/* {orderItems.map((item) =>(
                      
                      
                      <MDBRow key={item.newItem._id}>
                      
                    </MDBRow>
                      
                    ))} */}
                    <MDBRow>
                      <MDBCol md="8" lg="9">
                        <p>Total (Including GST)</p>
                      </MDBCol>
                      <MDBCol md="4" lg="3">
                        <p>Rs {Number(totalAmount) +
                            parseInt(totalAmount * 0.18)}</p>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="8" lg="9">
                        <p className="mb-0">Shipping</p>
                      </MDBCol>
                      <MDBCol md="4" lg="3">
                        <p className="mb-0">Rs 20</p>
                      </MDBCol>
                    </MDBRow>
                  </div>
                  <MDBRow className="my-4 mx-4">
                  <MDBCol md="8" lg="9" className="col-lg-3">
                        <p className="mb-0 lead fw-bold" style={{ color: "#f37a27" }}>Grand Total</p>
                      </MDBCol>
                    <MDBCol md="4" lg="3">
                      <p
                        className="lead fw-bold mb-0"
                        style={{ color: "#f37a27", alignItems: "right" }}
                      >
                        Rs {Number(totalAmount) +
                            parseInt(totalAmount * 0.18) +
                            Number(20)}
                      </p>
                    </MDBCol>
                  </MDBRow>

                  <p
                    className="lead fw-bold mb-4 pb-2"
                    style={{ color: "#f37a27" }}
                  >
                    Tracking Order
                  </p>

                  <MDBRow>
                    <MDBCol lg="12">
                      <div className="horizontal-timeline">
                        <ul className="list-inline items d-flex justify-content-between">
                          <li className="list-inline-item items-list">
                            <p
                              className="py-1 px-2 rounded text-white"
                              style={{ backgroundColor: "#f37a27" }}
                            >
                              Ordered
                            </p>
                          </li>
                          <li className="list-inline-item items-list">
                            <p
                              className="py-1 px-2 rounded text-white"
                              style={{ backgroundColor: "#f37a27" }}
                            >
                              Shipped
                            </p>
                          </li>
                          <li className="list-inline-item items-list">
                            <p
                              className="py-1 px-2 rounded text-white"
                              style={{ backgroundColor: "#f37a27" }}
                            >
                              On the way
                            </p>
                          </li>
                          <li
                            className="list-inline-item items-list text-end"
                            style={{ marginRight: "-8px" }}
                          >
                            <button style={{ marginRight: "-8px" }} onClick={handleDelivered}>Delivered</button>
                          </li>
                        </ul>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <p className="mt-4 pt-2 mb-0">
                    Want any help?{" "}
                    <a href="#!" style={{ color: "#f37a27" }}>
                      Please contact us
                    </a>
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Footer></Footer>
    </>
  );
}