import React, { useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './features/cart/CartSlice';
import Modal from './components/Modal';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state)=> state.modal);

  useEffect(()=> {
    dispatch(calculateTotals());
  },[cartItems]);

  return (
    <main>
        {isOpen && <Modal />}
        <Navbar />
        <CartContainer />
    </main>
  )
}

export default App