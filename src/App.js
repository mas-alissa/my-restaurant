
import { BrowserRouter , Link,  NavLink,  Route , Switch } from 'react-router-dom'
import Home from './Components/Home'
import './index.css'
import {commerce} from "./Lib/commerce"
import Navbar from './Components/Navbar'
import { useEffect, useState } from 'react'
import Cart from './Components/Cart'
import Products from './Components/Menu'
import Menu from './Components/Menu'
import checkOut from './checkOut'
import Contact from './Components/Contact'

export default function App() {

  const [products,setProducts] = useState([])
  const [cart,setCart] = useState({line_items: []})

  const [open, setOpen] = useState(false);

  const handleClick = () => {
      setOpen(true);
      console.log(open)
    };



const fetchProducts = async () =>{
  const {data} = await commerce.products.list();
  setProducts(data)

}
console.log(products)

const fetchCart = async () =>{
  setCart(await commerce.cart.retrieve()) //  عمل سله فارغه
}

const handleAddToCart = async (productid, quantity) =>{
  handleClick()
  const {cart} = await commerce.cart.add(productid, quantity)
  setCart(cart)
  
}



const handleUpdateCart = async (productid, quantity) => {
  const {cart} = await commerce.cart.update(productid, {quantity});
setCart(cart)
}


const handleRemoveCart = async (productid) => {
  const {cart} = await commerce.cart.remove(productid);
  setCart(cart);
}

const handleEmptyCart = async () => {
  const {cart} = await commerce.cart.empty();
  setCart(cart);
}
useEffect(() => {
  fetchProducts();
  fetchCart();
  
},[])
console.log(cart)
const filter = (e) =>{
  let val = e.target.value.toUpperCase();
  if(val !== ""){
    const x = products.filter(item => item.name.toUpperCase().startsWith(val))
    setProducts(x)
  } else {
    fetchProducts()
  }
}

const handleClose = (event, reason) => {
  console.log(reason);
  if (reason === "clickaway") {
    return;
  }

  setOpen(false);
};





  return (
    <BrowserRouter>
    
      <Navbar totalItems={cart.total_items} />


    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/cart">
      <Cart cart={cart} handleUpdateCart={handleUpdateCart} handleRemoveCart={handleRemoveCart}  handleEmptyCart={handleEmptyCart} />
        </Route>
        <Route exact path="/menu">
        <Menu products={products} open={open} handleClose={handleClose}  onAddToCart={handleAddToCart}  />
        </Route>
       
       <Route path="/contact" component={Contact} />
       <Route path="/checkout" component={checkOut} />
          
        
        
    </Switch>
    
    </BrowserRouter>
   
  )
}
