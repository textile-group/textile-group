import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import s from '../styles/header.module.scss'
import logo1 from '../assets/logo1.svg'
import logo2 from '../assets/logo2.svg'

const Header = () => {
  return (
    <>
    <header>
    <div className={s.images}>
      <Link to='/'>
         <img src={logo1} alt="" />
    <img src={logo2} alt="" />
      </Link>
    </div>
    <div className={s.container}>
    <Link to='/' className={s.home}>
        Главная
    </Link>
    <Link to='/range' className={s.home}>
        Ассортимент
    </Link>
    <Link to='/contacts' className={s.home}>
        Контакты
    </Link>
    <Link to='/about-us' className={s.home}>
        О нас
    </Link>
    </div>
    </header>
   
    </>
  )
}

export default Header