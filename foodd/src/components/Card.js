import React, { useState, useEffect, useRef } from 'react'
//import { useDispatchCart, useCart } from './ContextReducer';
import { useDispatch} from 'react-redux';
import { cartActions } from '../features/AddToCart/cartSlice';



export default function Card(props) {

  const {_id, name, img} = props.foodItem;
 

  let dispatch = useDispatch();
 
   const priceRef = useRef();
   let options = props.options;
   let priceOptions = Object.keys(options);
 
   const [qty, setQty] = useState(1);
   const [size, setSize] = useState("");


  const handleAddToCart = async ()=>{

    if(!localStorage.getItem("authToken")){
      alert("Login/Sign Up to proceed");
    } else{
      await dispatch(
        cartActions.addItem({
          _id,
          name,
          img,
          qty,
          size,
          options,
          finalPrice
          
  
          
          
  
        })
      )
    }
    
   

  
  }

   let finalPrice = qty*parseInt(options[size]);
   useEffect(() => {
     setSize(priceRef.current.value)
   }, [])

  return (
    <div>
      <div>
        <div className="card card1 m-3 " style={{"width": "18rem", "maxHeight":"360px"}}>
          <img src={props.foodItem.img} className="card-img-top cardimg" style={{height:"180px",objectFit: "fill"}} alt="..." />
          <div className="card-body" >
            <h5 className="card-title">{props.foodItem.name}</h5>
            
            <div className="container w-100 " >
              <div className='d-flex align-items-center justify-content-between my-3'>
              <select className="m-2 h-100 rounded btnbg p-1" style={{"backgroundColor": "#FF724C", color:'white'}} onChange={(e)=> setQty(e.target.value)} >
                {Array.from(Array(6), (e,i)=>{
                  return(
                    <option key={i+1} value={i+1}> {i+1} </option>
                  )
                })}
              </select>
              

              <select className="m-2 h-100 rounded btnbg p-1" style={{"backgroundColor": "#FF724C", color:'white'}} ref={priceRef} onChange={(e)=> setSize(e.target.value)}>
                {priceOptions.map((data)=>{
                  return <option key = {data} value={data}>{data}</option>
                })}

              </select>

              </div>
                

                <div className='d-flex align-items-center justify-content-between my-3'>
              <div className="d-inline h-100 fs-7 font-weight-bold" style={{color:"#ff724c", fontWeight:'bolder'}} >₹{finalPrice}/-</div>

              
              <button className={`btn justifu-center ms-2 btnbg`} onClick={handleAddToCart} style={{"backgroundColor": "#FF724C", "color":"white"}}>Add to Cart</button>
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
