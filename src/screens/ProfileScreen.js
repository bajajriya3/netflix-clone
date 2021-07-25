import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Nav from '../Nav';
import PlanScreen from './PlanScreen';
import './ProfileScreen.css';

function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img
                        src="https://i.pinimg.com/originals/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.png"
                        alt=""
                    />
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                           <PlanScreen />
                           <div className="profileScreen_btn">
                                <button onClick={()=> auth.signOut()} className="profileScreen_signOut">Sign Out</button>  
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileScreen;