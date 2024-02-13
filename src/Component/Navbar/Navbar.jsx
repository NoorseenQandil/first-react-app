
import React from 'react'
import { Link } from "react-router-dom";
import style from './Navbar.module.css';
import $ from "jquery";
export default function Navbar() {
$(window).on("scroll",function(){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $('.navbar').animate({padding:'5px'},30)
  } else {
    $('.navbar').animate({padding:'20px'},30)}
}); 
  return (
    <div> 
    <nav className={`navbar navbar-expand-sm  ${style.nav} `}>
      <div className="container">
        <Link className={`navbar-brand ${style.cf}` }to=""  >START FRAMEWORK</Link>
        <button className="navbar-toggler d-lg-none" type="button"data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className={`navbar-nav me-auto mt-2 mt-lg-0 ${style.navb} nav-pills flex-column flex-sm-row `}>
            <li className="nav-item">
              <Link className={`navbar-brand ${style.test} ${style.active}` } to="About">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className={`navbar-brand ${style.test} ${style.active}` } to="Portfilio">PORTFILIO</Link>
            </li>
            <li className="nav-item">
                <Link className={`navbar-brand ${style.test} ${style.active}` } to="Contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>)}