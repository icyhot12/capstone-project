import React, { useEffect, useState } from "react";

const Context = React.createContext()

function ContextProvider(props) {

    const [photoData, setPhotodata] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            .then((response) => response.json())
            .then((data) => setPhotodata(data));
    }, [])


    return (
        <Context.Provider value={{ photoData }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }