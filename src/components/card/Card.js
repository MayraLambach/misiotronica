import React, { useState} from 'react';
import './card.css'

const Card = ({image, title, description}) => {

    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    const cardStyle = {
        border : isClicked ? 'solid #3e6868' : 'solid #6b8e8e'
    }
    
    return (
        <div className='card' onClick={handleClick} style={cardStyle}>
            <img src={image} alt="Producto"/>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
        
};

export default Card;