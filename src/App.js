import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useSelector,useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
import { useEffect } from 'react';

function App() {

  const {cartItems} =useSelector(store =>store.cart);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(calculateTotals());
  },[cartItems]);

  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
