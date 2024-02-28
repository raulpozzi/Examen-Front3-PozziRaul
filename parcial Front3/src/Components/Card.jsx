import React from "react";
import CardStyles from '../Styles/Card.module.css'

const Card = () => {

    const addCart = () => {
        setCart([...cart, gusto])
    }
    return (
        <div className={CardStyles.cardContainer}>
            <img src={img} alt="" />
            <h3>{tipo}</h3>
            <h4>{precio}</h4>

            <Counter/>

            <button onClick={addCart}>Agregar al carrito</button>
        </div>
    )
}
export default Card;