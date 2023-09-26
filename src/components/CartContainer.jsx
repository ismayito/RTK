import React from 'react'
import CartITem from './CartITem';
import {useSelector,useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';

const CartContainer = () => {
    const {amount,isLoading,cartItems,total} = useSelector(store => store.cart);
    const dispatch = useDispatch();
if(amount<1){
  return (
    <div>
        <h2>Your bag </h2><br/>
        <h4>Your bag is currently empty</h4>
        CartContainer
        <CartITem/>
    </div>
  )
}

return(
<>
    <section style={{display:"block"}}>
        <h2>Your bag </h2><br/>
        <h4>Your bag contains {amount} items</h4>
    </section>
    <div>
        {cartItems.length>0 ?cartItems.map(item=>(
            <CartITem key={item.id} item={item}/>          
        )):null}   
    </div>
    <hr/>
    <footer style={{display:"flex",alignItems:"baseline", gap:"24px",justifyContent:"center"}}>
        <button type='button' onClick={()=>dispatch(clearCart())}>clear cart</button>
        {total}
    </footer>
</>
)
}


export default CartContainer;