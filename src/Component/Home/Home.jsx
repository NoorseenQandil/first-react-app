import React from 'react'
import img from '../../Assets/Img/avatar.png'
import style from './Home.module.css'
export default function Home() {

  return ( 
<div className={`row ${style.bg} `}>
<div className="col-md-12 d-flex justify-content-center align-items-center ">
<img src = {img} className={`${style.imge} `} alt="child"/>
</div>
<div className="col-md-12 d-flex justify-content-center align-items-center  text-light mt-4">
<h1 style={{fontWeight:'bold'}} className={`${style.text}`}>START FRAMEWORK</h1>
</div>
<div className="col-md-12 d-flex justify-content-center align-items-center ">
<div className={` ${style.contant1} m-3`}></div>
<div className={` ${style.contant2}`}><i class="fa-solid fa-star"></i></div>
<div className={` ${style.contant3} m-3`}></div>
</div>
<div className="col-md-12 d-flex justify-content-center align-items-center text-light mb-2 pt-2">
<p>Graphic Artist - Web Designer - Illustrator</p>
</div>
</div>
  )
}
