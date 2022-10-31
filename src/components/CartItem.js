import React, {useContext, useState} from "react";
import {Context} from "../appContext"
import useHover from "../hooks/useHover";

function CartItem({item}) {

    const [hovered, ref] = useHover()

    const {removeFromCart} = useContext(Context)

    return (
        <div className="cart-item">
            <i 
            className={`ri-delete-bin-${hovered ? "fill" : "line"}`}
            onClick={() => removeFromCart(item.id)}
            ref={ref}
            ></i>
            <img src={item.url} width="130px"/>
            <p>$5.99</p>
        </div>
    )
}

export default CartItem