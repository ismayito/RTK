    import React from 'react'
import {BsChevronDown ,BsChevronUp}from "react-icons/bs" ;
import { useDispatch } from 'react-redux';
import { removeItem,increaseItem,decreaseItem } from '../features/cart/cartSlice';



 const CartITem = ({item}) => {
    const dispatch = useDispatch();
  return (
    <>
    {item?

<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"50%",margin:"0 auto"}}>
<div>
    <h3>{item.name}</h3>
    <p>${item.price}</p>
    <button type='button' onClick={()=>{
        dispatch(removeItem(item.id))}}>Remove</button>
</div>
<div>
    <BsChevronUp onClick={()=>{dispatch(increaseItem(item.id))}} />
    <p>{item?.quantity}</p>
    <BsChevronDown onClick={()=>{
        {if(item.quantity===1){
            dispatch(removeItem(item.id))
            return;
        }}
        dispatch(decreaseItem(item.id))}}/>
</div>
</div>
    :null}
    
    </> 
  )
}

 export default CartITem;