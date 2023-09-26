import { UseSelector, useSelector } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import  CartContainer  from './CartContainer';

const Navbar =() => {
const { amount} = useSelector(store =>store.cart);
console.log(amount);
    return (
        <>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"90%",margin:"0 auto"}}>
            <h1>Navbar Rtk</h1>
           <p>
            <MdAddShoppingCart size={32}/>
            <span style={{position:"absolute",paddingBottom:"16px",borderRadius:"100%",background:"gray",width:"12px",height:"12px"}}>
            {amount}</span></p>
        </div>
        <CartContainer/>
        </>
    )
}

export default Navbar;
