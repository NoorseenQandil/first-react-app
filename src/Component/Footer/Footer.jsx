import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return (
      <div className={`container bg-danger ${style.cont}  p-0 m-0`}>
<div className={`row  ${style.color} ${style.contant} m-auto `}>
<div className={` ${style.crbody} col-md-4 pb-5`}style={{width: '23rem'}}>
    <h3 className={`card-title ${style.white} `}>LOCATION</h3>
    <p className={`card-text ${style.white1} mt-2` }>2215 John Daniel Drive</p>
    <p className={`card-text ${style.white1} mt-2`}>Clark, MO 65243</p>
  </div>
<div className={` ${style.crbody} col-md-4 pb-5`}style={{width: '23rem'}}>
    <h3 className={`card-title ${style.white} pb-2`}>AROUND THE WEB</h3>
    <ul className={` list-group d-flex flex-row justify-content-center align-items-center m-auto mt-2 ${style.dec}`}>
                        <li><i className={`  rounded-5 fa-brands fa-facebook ${style.item}`} style={{fontSize:'20px'}}></i></li>
                        <li><i className={` rounded-5 fa-brands fa-twitter ${style.item} `}style={{fontSize:'20px'}}></i></li>
                        <li><i className={` rounded-5 fa-brands fa-linkedin ${style.item}`} style={{fontSize:'20px'}}></i></li>
                        <li><i className={`  rounded-5 fa-solid fa-globe ${style.item}`} style={{fontSize:'20px'}}></i></li>
                    
                    </ul>
  </div>
<div className="col-md-4 pb-5"> 
<div className={` ${style.crbody} `}style={{width: '23rem'}}>
    <h3 className={`card-title ${style.white} ms-4 pb-2`}>ABOUT FREELANCER</h3>
    <p className={`card-text ${style.white1}`}style={{width: '23rem'}}>Freelance is a free to use, licensed Bootstrap theme
     created by Route</p>
  </div>
  </div>
  <div className="col-md-12">
            <p className={`${style.white1} ${style.fbg} p-5 m-0`}>Copyright © Your Website 2021</p>
            </div>
      </div>
    </div>
  )
}
