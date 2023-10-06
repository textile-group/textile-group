import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <Link to='/'>
        Главная
    </Link>
    <Link to='/range'>
        Ассортимент
    </Link>
    <Link to='/contacts'>
        Контакты
    </Link>
    <Link to='/about-us'>
        О нас
    </Link>
    </>
  )
}

export default Header