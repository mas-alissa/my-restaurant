import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Components/Footer'



export default function checkOut({data}) {
    return (
        <div className="container-fluid">
        <div className="container">
            <div className="row" style={{position:"relative"}}>
                <img src="images\food 1.jpg" alt="checkout" width="100%" style={{opacity:"0.8",borderRadius:"20px",boxShadow:"0 0 10px black"}} />
                <h1 className="absolute-checkout">Thank you for choosing our restaurant</h1>
                  
            </div>
            <div className="order-style mt-5 p-3 mb-5">
            <p style={{textAlign:"center",color:"red",fontSize:"20px"}}>Order Details</p>
            <p className="">Order number: {Math.floor(Math.random() * 1000000000)}</p>
            <p>Order Date : {new Date().getDate()}-{new Date().getMonth() + 1}-{new Date().getFullYear()} {new Date().getHours()}:{new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes()}</p>
            <p>Telephone Number : 06-12-34-56</p>
            <p>Address : Baghdad Al-JADRIA / Mahala 333 , Zukak 5 , Daar 27</p>
            </div>
            <div>
                <button className="goToHomePageBtn mb-3"><Link className="linkstyle" to="/">Go Back To Home Page</Link></button>
            </div>
          
            
            
        </div>
        <div className="row">
        <div className="col-lg-12 p-0">
        <Footer />
        </div>
        </div>
        
        </div>
    )
}
