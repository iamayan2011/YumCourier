import React from "react";



export default function OrderCard(props) {
   
  
  return (
    <div>
      <div className="m-3 rounded" style={{backgroundColor: "white"}}>
        {/* //<!-- Single item --> */}
        <div className="row">
         

          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
            {/* <!-- Data --> */}
            <img
                src={props.item.image01}
                className="rounded"
                alt={props.item.title}
                style={{height: "100%", objectFit:"cover"}}
              />
            
            
            
              
            
            
            {/* <!-- Data --> */}
          </div>

          <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
            <div className="mx-3 my-3" style={{padding:"5px"}}>
          <p>
              <strong>{props.item.title}</strong>
            </p>
          <p>Size: {props.item.size}</p>
          <p>Quantity: {props.item.qty}</p>
            <p>Price: Rs {props.item.price* props.item.qty}</p>
            </div>
          </div>
        </div>
        {/* <!-- Single item --> */}
      </div>
    </div>
  );
}
