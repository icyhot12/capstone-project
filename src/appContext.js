import React, { useEffect, useState } from "react";

const Context = React.createContext()

function ContextProvider(props) {

    const [photoData, setPhotodata] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            .then((response) => response.json())
            .then((data) => setPhotodata(data));
    }, [])

    function toggleFavorite(id) {
        setPhotodata(prevPhotoData => prevPhotoData.map(element =>
            element.id === id ?
                {
                    ...element,
                    isFavorite: !element.isFavorite
                }
                :
                element
        ))
    }

    function addToCart(img) {
        setCartItems(prevCartItems => [...prevCartItems, img])
    }

    function removeFromCart(img) {
        let removedItem = cartItems.indexOf(img)
        setCartItems(prevCartItems => {
            let tempArray = [].concat(prevCartItems)
            tempArray.splice(removedItem,removedItem)
            return tempArray
        })
    }

    return (
        <Context.Provider value={{ photoData, toggleFavorite, addToCart, cartItems, removeFromCart }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }