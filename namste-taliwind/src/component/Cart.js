import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../utils/createSlice";

const Cart = ()=>{
   const dispatch = useDispatch();
  const cartItems = useSelector((store)=>store.cart.items);        
  console.log(cartItems);
  
const handleClearCart = ()=>{
          dispatch(clearCart())
}


 return <div className="text-center m-`4 p-4" >
  <h1 className="text-2xl font-bold" >Cart</h1>
  <button className="bg-black rounded-lg p-2 text-white" 
  onClick={handleClearCart}
  >Clear Cart</button>

  {cartItems.length == 0 && <h1>Cart is Empty. Add Items to your cart!</h1>}
   <div className="w-6/12 m-auto">
     <ItemList items={cartItems}/>     
   </div>
 </div>
}
export default Cart