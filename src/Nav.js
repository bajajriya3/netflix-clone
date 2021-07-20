import React,{useState, useEffect} from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    
    const transitionNavbar = () =>{
        if(window.scrollY > 100){
            handleShow(true);
        } 
        else{
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll",transitionNavbar);
        return () => {
            window.removeEventListener("scroll",transitionNavbar);
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img 
                className ="nav_logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt=""
                />
                <img 
                className ="nav_avatar"
                src="https://losalamosreporter.files.wordpress.com/2020/01/8313d3d5dccaa73ee56b7153953f290b.jpg"
                alt=""
                />
            </div>
        </div>
    )
}

export default Nav;
