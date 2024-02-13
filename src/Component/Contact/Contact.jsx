import React from 'react'
import style from './Contact.module.css'
export default function Contact() {
  return (
    <div>
<div className={`row ${style.bg}`}>
<div className={`col-md-12 d-flex justify-content-center align-items-center flex-column  ${style.text1}`}><h1>CONATCT SECTION</h1>
<div className="col-md-12 d-flex justify-content-center align-items-center ">
<div className={` ${style.contant1} m-3`}></div>
<div className={` ${style.contant2}`}><i className="fa-solid fa-star"></i></div>
<div className={` ${style.contant3} m-3`}></div>
</div></div>
<div className={`col-md-7  m-auto ${style.outline} `}>
<div className={`${style.form} form-control ${style.inp}`} >
  <input type="text" name="text" autocomplete="off" required />
  <label for="text" className={`${style.labelname}`}>
    <span className={`${style.contentname} ${style.inpt}`}>userName :</span></label></div></div>

<div className={`col-md-7  m-auto ${style.outline} `}>
<div className={`${style.form} form-control ${style.inp}`} >
  <input type="age" name="age" autocomplete="off" required />
  <label for="text" className={`${style.labelname}`}>
    <span className={`${style.contentname} ${style.inpt}`}>userAge :</span></label></div></div>

<div className={`col-md-7  m-auto ${style.outline} `}>
<div className={`${style.form} form-control ${style.inp}`} >
  <input type="email" name="email" autocomplete="off" required />
  <label for="text" className={`${style.labelname}`}>
    <span className={`${style.contentname} ${style.inpt}`}>userEmail :</span></label></div></div>

<div className={`col-md-7  m-auto ${style.outline} `}>
<div className={`${style.form} form-control ${style.inp}`} >
  <input type="password" name="password" autocomplete="off" required />
  <label for="text" className={`${style.labelname}`}>
    <span className={`${style.contentname} ${style.inpt}`}>userPassword :</span></label></div></div>
        <div className={`col-md-7  m-auto `}><button id="submit"  className={` btn px-3  ${style.button}`}>send message</button></div>
      </div>
    </div>
  )
}
