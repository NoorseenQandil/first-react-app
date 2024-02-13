import React from 'react'
import style from'./Portfilio.module.css'
import img from '../../Assets/Img/poert1.png'
import img1 from '../../Assets/Img/port2.png'
import img2 from '../../Assets/Img/port3.png'
import $ from "jquery";
export default function Portfilio() {
    let showpic=()=>{$('.fixedbox').removeClass('d-none');$('.fixedbox').addClass('d-flex');}
    let hidepic=()=>{$('.fixedbox').removeClass('d-flex');$('.fixedbox').addClass('d-none');}
    let showpic1=()=>{$('.fixedbox1').removeClass('d-none');$('.fixedbox1').addClass('d-flex');}
    let hidepic1=()=>{$('.fixedbox1').removeClass('d-flex');$('.fixedbox1').addClass('d-none');}
    let showpic2=()=>{$('.fixedbox2').removeClass('d-none');$('.fixedbox2').addClass('d-flex');}
    let hidepic2=()=>{$('.fixedbox2').removeClass('d-flex');$('.fixedbox2').addClass('d-none');}
  return (
    <div>
  <div className={`row ${style.bg}`}>
<div className={`col-md-12 d-flex justify-content-center align-items-center flex-column  ${style.text1}`}><h1>PORTFOLIO COMPONENT</h1>
<div className="col-md-12 d-flex justify-content-center align-items-center ">
<div className={` ${style.contant1} m-3`}></div>
<div className={` ${style.contant2}`}><i className="fa-solid fa-star"></i></div>
<div className={` ${style.contant3} m-3`}></div>
</div></div>
    <div className="row m-auto  ">
<div className={`col-md-4 m-auto d-flex justify-content-center align-items-center pb-5 ${style.location}`}>
<img src = {img} className={`${style.imge} img rounded-4`}  alt="child"/>
<div className={`${style.picLayer}  d-flex justify-content-center align-items-center rounded-4 `} onClick={()=>{showpic()}}>
<div className={`${style.details} text-center text-white`}>
<div className={`${style.icon}`}><i className="fa-solid fa-plus"></i></div>
</div>
</div>
</div>
<div className={`col-md-4 m-auto d-flex justify-content-center align-items-center pb-5 ${style.location}`}><img src = {img1} className={`${style.imge} rounded-4 `} alt="child"/>
<div className={`${style.picLayer} d-flex justify-content-center align-items-center rounded-4 `} onClick={()=>{showpic1()}}>
<div className={`${style.details} text-center text-white`}>
<div className={`${style.icon}`}><i className="fa-solid fa-plus"></i></div>
</div>
</div>
</div>
<div className={`col-md-4 m-auto d-flex justify-content-center align-items-center pb-5 ${style.location}`}><img src = {img2} className={`${style.imge} rounded-4 `} alt="child"/>
<div className={`${style.picLayer} d-flex justify-content-center align-items-center rounded-4 `} onClick={()=>{showpic2()}} >
<div className={`${style.details} text-center text-white`}>
<div className={`${style.icon}`}><i className="fa-solid fa-plus"></i></div>
</div>
</div>
</div>
<div className={`col-md-4 m-auto d-flex justify-content-center align-items-center pb-5 ${style.location}`}><img src = {img} className={`${style.imge} rounded-4 `} alt="child" onClick={()=>{showpic()}}/>
<div className={`${style.picLayer} d-flex justify-content-center align-items-center rounded-4 `} onClick={()=>{showpic()}} >
<div className={`${style.details} text-center text-white`}>
<div className={`${style.icon}`}><i className="fa-solid fa-plus"></i></div>
</div>
</div>
</div>
<div className={`col-md-4 m-auto d-flex justify-content-center align-items-center pb-5 ${style.location}`}><img src = {img1} className={`${style.imge} rounded-4 `} alt="child"/>
<div className={`${style.picLayer} d-flex justify-content-center align-items-center rounded-4 `} onClick={()=>{showpic1()}} >
<div className={`${style.details} text-center text-white`}>
<div className={`${style.icon}`}><i className="fa-solid fa-plus"></i></div>
</div>
</div>
</div>
<div className={`col-md-4 m-auto d-flex justify-content-center align-items-center pb-5 ${style.location}`}><img src = {img2} className={`${style.imge} rounded-4`} alt="child"/>
<div className={`${style.picLayer} d-flex justify-content-center align-items-center rounded-4 `} onClick={()=>{showpic2()}}>
<div className={`${style.details} text-center text-white`}>
<div className={`${style.icon}`}><i className="fa-solid fa-plus"></i></div>
</div>
</div>
</div>

</div>

</div>

<div id="fixed-box" className={`d-none fixedbox justify-content-center align-items-center  vh-100 ${style.fixedbox}`} onClick={()=>{hidepic()}}>
            <div className={`${style.parent}`}>
                <img src={img} id="inner-img" className="w-75 m-auto" alt='' />
            </div>
        </div>
<div id="fixed-box" className={`d-none fixedbox1 justify-content-center align-items-center  vh-100 ${style.fixedbox1}`} onClick={()=>{hidepic1()}}>
            <div className={`${style.parent}`} >
                <img src={img1} id="inner-img" className="w-75 m-auto" alt=''/>
            </div>
        </div>
<div id="fixed-box" className={`d-none fixedbox2 justify-content-center align-items-center  vh-100 ${style.fixedbox2}`} onClick={()=>{hidepic2()}}>
            <div className={`${style.parent}`} >
                <img src={img2} id="inner-img" className="w-75 m-auto" alt='' />
            </div>
        </div>
    </div>
  )
}
