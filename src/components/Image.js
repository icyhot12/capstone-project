import React, { useState } from "react";
import PropTypes from "prop-types"
import { Context } from "../appContext";

function Image({ className, img }) {

    const [hovered, setHovered] = useState(false)
    const [buyed, setBuyed] = useState(false)

    const { toggleFavorite, addToCart, cartItems, removeFromCart } = React.useContext(Context)

    function heartIcon() {
        if (img.isFavorite) {
            return (
                <i
                    className="ri-heart-fill favorite"
                    onClick={() => toggleFavorite(img.id)}
                >
                </i>
            )
        } else if (hovered) {
            return (
                <i
                    className="ri-heart-line favorite"
                    onClick={() => toggleFavorite(img.id)}
                >
                </i>
            )
        }
    }

    function cartIcon() {
        if (cartItems.some(element => element.id === img.id)) {
            return (
                <i 
                className="ri-shopping-cart-fill cart"
                onClick={() => removeFromCart(img)}
                ></i>
            )
        }
        else if (hovered) {
            return (
                <i
                    className="ri-add-circle-line cart"
                    onClick={() => addToCart(img)}
                ></i>
            )
        }
    }

    return (
        <div
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid" />
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    url: PropTypes.string,
    isFavorite: PropTypes.bool
}

Image.defaultProps = {
    isFavorite: false
}

export default Image