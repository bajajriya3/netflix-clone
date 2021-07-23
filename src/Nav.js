import React,{useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false),
    history = useHistory();
    
    const transitionNavbar = () =>{
        if(window.scrollY > 50){
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
                onClick={()=>history.push('/')}
                className ="nav_logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt=""
                />
                <img 
                onClick={()=>history.push('/profile')}
                className ="nav_avatar"
                src="https://i.pinimg.com/originals/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.png"
                alt=""
                />
            </div>
        </div>
    )
}

export default Nav;
