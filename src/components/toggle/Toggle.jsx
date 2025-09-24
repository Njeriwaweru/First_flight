import { useEffect, useState } from "react";
import "./Toggle.css";

const Toggle = ({ label, defaultOn = false, onToggle, className}) => {

    const [isOn, setIsOn] = useState(defaultOn);
   
    const handleClick = () => {
        setIsOn(prev => {
            const newState = !prev;
            if (onToggle) {
                onToggle(newState)
            }
            return newState;
        })
    }

    
    return (
        <button
            className={`toggle ${className}`}
            onClick={handleClick}
        >
            {label}: {isOn ? "On" : "Off"}
        </button>
    )
}

export default Toggle;