import React from "react";
import CartCard from "../components/CartCard";
import NavBar from "../components/Navbar";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../features/AddToCart/cartSlice";


export default function Cart(props) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const category = useSelector((state) => state.cart.category)


  let dispatch = useDispatch();

  
  const cartItems1 = cartItems;
  console.log(cartItems1);
  const handleOrder = async () => {
    await dispatch(
      cartActions.addOrder({
        
      })
    );
  };

  return (
    <div>
      <img
        src="https://source.unsplash.com/random/900x700/?burger"
        className="d-block w-100"
        style={{ height: "75vh", objectFit: "cover" }}
        alt="..."
      />
      <NavBar></NavBar>

      <section className="h-100 gradient-custom">
        <div className="container py-5 ">
          <div className="row d-flex justify-content-center my-4 ">
            <div className="col-md-8 ">
              <div className="card mb-4 cartcard1">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {totalQuantity} items</h5>
                </div>
                <div className="card-body">
                  {cartItems.length === 0 ? (
                    <h5>Your Cart is empty</h5>
                  ) : (
                    <div>
                      <h5>Your Cart is not empty</h5>
                      <table>
                        <tbody>
                          {(cartItems.filter((item) => category === "cart")
                          ).map((item) => (
                            <div>
                              <hr></hr>
                              <CartCard item={item}></CartCard>
                            </div>

                           
                          ))}
                        </tbody>
                      </table>
                      
                    </div>
                  )}
                  

                  <hr className="my-4" />

                 
                </div>
              </div>
              <div className="card mb-4 cartcard1">
                <div className="card-body">
                  <p>
                    <strong>Expected Delivery</strong>
                  </p>
                  <p className="mb-0">30 mins</p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
              
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card mb-4 cartcard1">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body cartcard1">
                  <ul className="list-group list-group-flush ">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 cartcard1">
                      Products
                      <span>Rs {totalAmount}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 cartcard1">
                      GST (18%)
                      <span>Rs {parseInt(totalAmount * 0.18)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 cartcard1">
                      Shipping
                      <span>Rs 20</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3 cartcard1">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including everything)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>
                          Rs{" "}
                          {Number(totalAmount) +
                            parseInt(totalAmount * 0.18) +
                            Number(20)}
                        </strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block btnbg"
                    onClick={handleOrder}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
