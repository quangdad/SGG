import React, { useState } from 'react';  
import './Header.css';  

const Navbar = () => {  
  const [activeMenu, setActiveMenu] = useState('Trang chủ'); // Default active menu  

  const handleMenuItemClick = (menu) => {  
    setActiveMenu(menu); // Set the clicked menu as active  
    // alert(`${menu} clicked`); // Replace with navigation or other actions  
  };  

  return (  
    <nav className="navbar">  
    <div className='nav-container'>
    <div className="navbar-logo">  
        <img src='https://bd-sgg69.com/view/option/assets/images/logo-light-text.png' />
      </div>  
      <ul className="navbar-menu">  
        {['Trang chủ', 'Sản phẩm', 'Tin tức', 'Câu lạc bộ', 'Liên hệ'].map((item) => (  
          <li   
            key={item}   
            onClick={() => handleMenuItemClick(item)}   
            className={`navbar-item ${activeMenu === item ? 'active' : ''}`}  
          >  
            {item}  
          </li>  
        ))}  
      </ul> 
    </div>
    </nav>  
  );  
};  

export default Navbar;