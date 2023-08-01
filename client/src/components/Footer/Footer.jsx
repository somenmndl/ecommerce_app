import React from 'react'
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
        <h1>About</h1>
          <span>
          Discover an online shopping experience that blends style and convenience. Explore a curated selection of trendy and affordable products, designed to elevate your everyday fashion.
          </span>

        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>
          Reach out to our dedicated customer support team for prompt assistance. Contact us via phone, email, or live chat. We're here to help you.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">StyleHub</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer