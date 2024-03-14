import React, {useState} from 'react'; 
import { AiOutlineArrowUp } from 'react-icons/ai';
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Toggle} from "./Toggle";
import '../App.css'
const Layout= ({ children })=> {
    const [visible, setVisible] = useState(false) 
  
    const toggleVisible = () => { 
      const scrolled = document.documentElement.scrollTop; 
      if (scrolled > 300){ 
        setVisible(true) 
      }  
      else if (scrolled <= 300){ 
        setVisible(false) 
      } 
    }; 
    
    const scrollToTop = () =>{ 
      window.scrollTo({ 
        top: 0,  
        behavior: 'smooth'
  
  
        /* you can also use 'auto' behaviour 
           in place of 'smooth' */
  
      }); 
    }; 
    
    window.addEventListener('scroll', toggleVisible); 
  
    const[isDark, setIsDark]=useState(false)
  return (
    <div className='container' data-theme={isDark ? "dark":"light"}>
<Navbar/>
<Toggle is checked={isDark} handleChange={()=>setIsDark(!isDark)}   icons={{ checked: "🌙", unchecked: "🔆" }}   aria-label="Dark mode toggle" />
      {children}
    <div className="ttt" style={{ display: visible ? 'block' : 'none' }}>
          <button>
            <AiOutlineArrowUp style={{ fontSize: '250%' }} onClick={scrollToTop} />
          </button>
        </div>
    <Footer/>
    </div>
  )
}

export default Layout