import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Footer from './Footer';

import emailjs from "emailjs-com";

export default function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9g5e22h', 'template_m58gbwc', e.target, 'user_SkNyBHbOS1ry62IeZ1tpO')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset()
      };
    return (
        <div className="container-fluid">
        <div className="container">
        <h1>Contact Us</h1>
        <p>You can put your quistions or notations in message field below</p>
            <div className="row">
                <div className="left col-lg-6 col-md-6 col-sm-12 border">
                <form onSubmit={sendEmail} style={{fontSize:"25px"}}>
               
               <label>First Name: </label>
               <div>
                <input type="text" name="name" className="fname-class" />
               </div>
               
               <label>Last Name: </label>
               <div>
                <input type="text" name="subject"  className="lname-class" />
               </div>
              
               <label>Email: </label>
               <div>
                <input type="email" name="email" className="email-class" />
               </div>
               <label>Message: </label>
               <div>
               <textarea name="message" className="textarea">

                </textarea>
               </div>

               <input type="submit" value="Send" className="submitbtn" />
                </form>
                
                </div>



                <div className="right col-lg-6 col-md-6 col-sm-12 border">
                <p>Location: Iraq - Baghdad</p>
                <p>Telephone Number : 0096412345678</p>
                <p>Email Address : restaurant@restaurant.iq</p>
                <p>Web-Site : https://www.baghdadresturant.iq</p>
                <div className="flex-social-media">
                
                <IconButton  color="primary">
                    <FacebookIcon fontSize="large" />
                </IconButton>
             
                <IconButton  color="primary">
                    <TwitterIcon fontSize="large" />
                </IconButton>
                <IconButton  color="secondary">
                    <InstagramIcon fontSize="large" />
                </IconButton>
                <IconButton color="success">
                    <WhatsAppIcon fontSize="large" />
                </IconButton>
                </div>
                </div>
                
            </div>
        </div>
        <div className ="row">
        <div className="col-lg-12 p-0 mt-4">
        <Footer />
        </div>
        </div>
        </div>
        
    )
}
