import React from "react";

import { useDispatch } from "react-redux";
import { cartActions } from "../features/AddToCart/cartSlice";


export default function CartCard(props) {
  const {_id, name, img, size,qty, price, options} = props.item;

  

  let dispatch = useDispatch();
  const handleDelete = async()=> {
    await dispatch(
      cartActions.deleteItem(
        {_id,
          name,
          img,
          qty,
          size,
          options,
          price
          
        }

      )
    )
  }

  const handleAddToCart = async ()=>{
    await dispatch(
      cartActions.plusItem({
        _id,
        name,
        img,
        qty,
        size,
        options,
        price,

      })
    )
 
  
  }

  const handleRemove = async()=> {
    await dispatch(
      cartActions.removeItem(
        {_id,
          name,
          img,
          qty,
          size,
          options,
        price}

      )
    )
  }

 
  
  return (
    <div>
      <div className="m-3">
        {/* //<!-- Single item --> */}
        <div className="row">
          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
            {/* <!-- Image --> */}
            <div
              className="bg-image hover-overlay hover-zoom ripple rounded"
              data-mdb-ripple-color="light"
            >
              <img
                src={props.item.image01}
                className="w-100 rounded"
                alt={props.item.title}
                style={{height: "140px", objectFit:"fill"}}
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{
                    "background-color": "rgba(251, 251, 251, 0.2)",
                  }}
                ></div>
              </a>
            </div>
            {/* <!-- Image --> */}
          </div>

          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
            {/* <!-- Data --> */}
            <p>
              <strong>{props.item.title}</strong>
            </p>
            
            <p>Size: {props.item.size}</p>
            <p>Price: Rs {props.item.price}</p>
            <button
              type="button"
              className="btn btn-danger btn-sm me-1 mb-2"
              data-mdb-toggle="tooltip"
              title="Remove item"
              onClick={handleDelete}
            >
              <i className="fas fa-trash"></i>
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm mb-2"
              data-mdb-toggle="tooltip"
              title="Move to the wish list"
            >
              <i className="fas fa-heart"></i>
            </button>
            {/* <!-- Data --> */}
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            {/* <!-- Quantity --> */}
            <div className="d-flex mb-4" style={{ "max-width": "300px" }}>
              <button
                className="btn btnbg px-3 me-2"
                onClick={handleRemove}
              >
                <i className="fas fa-minus"></i>
              </button>

              <div className="form-outline">
                <input
                  id="form1"
                  min="0"
                  name="quantity"
                  value={props.item.qty}
                  type="number"
                  className="form-control form2"
                />
              </div>

              <button
                className="btn btnbg px-3 ms-2"
                onClick={handleAddToCart}
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
            {/* <!-- Quantity --> */}

            {/* <!-- Price --> */}
            <p className="text-start text-md-center">
              <strong>Rs {props.item.totalPrice*props.item.qty}</strong>
            </p>
            {/* <!-- Price --> */}
          </div>
        </div>
        {/* <!-- Single item --> */}
      </div>
    </div>
  );
}
