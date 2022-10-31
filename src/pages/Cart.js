import React from "react"
import { useContext, useState } from "react"
import { Context } from "../appContext"
import CartItem from "../components/CartItem"

function Cart() {

    const { cartItems, setCartItems } = useContext(Context)

    const [order, setOrder] = useState(false)

    const totalPrice = cartItems.length * 5.99

    function placeOrder() {
        setOrder(true)

        setTimeout(() => {
            console.log("Order placed!")
            setOrder(false)
            setCartItems([])
        }, 3000)
    }

    const cartItemElements = cartItems.map(item => (
        <CartItem
            key={item.id}
            item={item}
        />
    ))

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalPrice.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
            <div className="order-button">
                {cartItems.length > 0 ? <button
                    onClick={placeOrder}
                >{!order ? "Place Order" : "Ordering..."}</button> : <p>You have no items in your cart</p>}

            </div>
        </main>
    )
}

export default Cart