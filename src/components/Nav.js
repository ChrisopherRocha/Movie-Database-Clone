import React, { useState, useEffect } from 'react'
import "./Nav.css"

const Nav = () => {
    const [show, handleShow] = useState(false);
    
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", handleShow)
        }
    }, [])


  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158" className='nav__logo' alt="Netflix Logo" />

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158" className='nav__avatar' alt="" />

    </div>
  )
}

export default Nav