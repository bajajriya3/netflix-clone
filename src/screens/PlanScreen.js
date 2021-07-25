import React from 'react';
import { useState } from 'react';
import './PlanScreen.css';

function PlanScreen() {
    const [currentPlan, setCurrentPlan] = useState('Standard'),
    planButton = (plan) => {
        if(plan == currentPlan)
            return <span>Current Package</span>
        else
            return <span>Subscribe</span>
    };

    return(
        <div className="planScreen">
             <h3>Plans (Current Plan: {currentPlan})</h3>
            <div className="planScreen_plans">
                <div className="planDetails">
                    <div className="planTitle">Netflix Standard</div>
                    <div className="planResolution">1080p</div>
                </div>
                <button 
                    className={currentPlan=='Standard' ? 'planButton_active' : 'planButton'}
                    onClick={()=>setCurrentPlan('Standard')}>
                {planButton('Standard')}
                </button>
            </div>
            <div className="planScreen_plans">
            <div className="planDetails">
                    <div className="planTitle">Netflix Basic</div>
                    <div className="planResolution">480p</div>
                </div>
                <button 
                    className={currentPlan=='Basic' ? 'planButton_active' : 'planButton'} 
                    onClick={()=>setCurrentPlan('Basic')}>{
                planButton('Basic')}
                </button>
            </div>
            <div className="planScreen_plans">
            <div className="planDetails">
                    <div className="planTitle">Netflix Premium</div>
                    <div className="planResolution">4K+HDR</div>
                </div>
                <button 
                    className={currentPlan=='Premium' ? 'planButton_active' : 'planButton'} 
                    onClick={()=>setCurrentPlan('Premium')}>
                {planButton('Premium')}
                </button>
            </div>
        </div>
    )
}
export default PlanScreen;