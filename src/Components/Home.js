import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div>

      {/* <Navbar /> */}


      {/* Carousel */}

      <div className="container-fluid">
        <div className="row">
          <div id="carouselExampleSlidesOnly" className="carousel slide w-100" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active pos-relative">
                <img src="images\food.jpg" className="d-block w-100 height" alt="food" />
                <p className="pg-pos-absolute styleFont">We are distinguished by the diversity of dishes</p>
              </div>
              <div className="carousel-item">
                <img src="images\food 2.jpg" className="d-block w-100 height" alt="food" />
                <p className="pg-pos-absolute styleFont">You can find various dishes from grills, types of dishes, soups, desserts ... and more</p>
              </div>
              <div className="carousel-item">
                <img src="images\irakeese brood.jpg" className="d-block w-100 height" alt="iraqi brood" />
                <p className="pg-pos-absolute styleFont">Where we prepare the bread in a fresh way and directly from the tandoor Worth a try!!</p>
              </div>
              <div className="carousel-item">
                <img src="images\desert.jpg" className="d-block w-100 height" alt="Sweets" />
                <p className="pg-pos-absolute styleFont">Iraqi sweets...worth a try!!
                  Iraqi sweets are varied, there are Znoud Al-Sit, Baklava, Kunafa</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="container">
        <div className="row mt-5 align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-ex-12">
            <p className="p-choosing-meat-fish bg-warning">🥩 MEAT AND FISH SPECIALTIES</p>
            <p className="paragraf-text-choosing-meat-fish">We are specialized in authentic Iraqi meat dishes from the charcoal grill. Deliciously tender and freshly grilled chicken or beef and specifically for Iraq, the unseasoned, tender and tasty lamb kebab. Quality starts with the right choice of meat. Come and taste it in our restaurant.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-ex-12">
            <img className="w-100 img-style" src="images\bbq.jpg" alt="BBQ" />
          </div>
        </div>
      </section>

      <section className="container mb-4">
        <div className="row mt-5 align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-ex-12">
            <img className="w-100 img-style" src="images\restaurant-food-quality-badge.jpg" alt="BBQ" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-ex-12">
            <p className="p-choosing-meat-fish bg-warning  mt-4 ">👌 THE BEST CHOICE IN QUALITY</p>
            <p className="paragraf-text-choosing-meat-fish">Obtaining a certificate of quality in the restaurant
              Where we offer you foods with care and in a highly clean and comfortable atmosphere...</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
