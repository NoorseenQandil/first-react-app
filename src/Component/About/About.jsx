import React from 'react'
import style from './About.module.css'
export default function About() {
  return (
<div className={`row  ${style.bg} `}>
<div className="col-md-12 d-flex justify-content-center align-items-center flex-column text-light  p-0 m-0"><h1>ABOUT COMPONENT</h1>
<div className="col-md-12 d-flex justify-content-center align-items-center ">
<div className={` ${style.contant1} m-3`}></div>
<div className={` ${style.contant2}`}><i className="fa-solid fa-star"></i></div>
<div className={` ${style.contant3} m-3`}></div>
</div>
<div className={`col-md-12 d-flex justify-content-center align-items-center ${style.colum}`}>
<div className="col-md-5 m-3"><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
<div className="col-md-5 m-3"><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
      </div></div>
      </div>
  )
}