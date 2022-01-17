import React from "react";
import './Footer.css'
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our subscription and we will send you spicy news
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe but you won't
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              placeholder="Your email"
              name="email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to='/signup'>How it works</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
            <Link to='/'>Eiei</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to='/signup'>How it works</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
            <Link to='/'>Eiei</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Hear Us</h2>
            <Link to='/signup'>How it works</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
            <Link to='/'>Eiei</Link>
          </div>
          <div className="footer-link-items">
            <h2>Praise Us</h2>
            <Link to='/signup'>How it works</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
            <Link to='/'>Eiei</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo" to='/'>
              SWAG
            </Link>
          </div>
          <small className="website-rights">SWAG © 2022</small>
          <div className="social-icons">
            <Link className="social-icon-link facebook" to='/' target='_blank' aria-label='Facebook'>
              <FaFacebookF />
            </Link>
            <Link className="social-icon-link instagram" to='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </Link>
            <Link className="social-icon-link linkedin" to='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </Link>
            <Link className="social-icon-link youtube" to='/' target='_blank' aria-label='Youtube'>
              <FaYoutube />
            </Link>
            <Link className="social-icon-link twitter" to='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
