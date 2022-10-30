import React from "react"

import { Context } from "../appContext"
import Image from "../components/Image"
import {getClass} from "../utils/index"

function Photos() {

    const {photoData} = React.useContext(Context)

    const allPhotos = photoData.map(image => {
        return (
            <Image 
            key={image.id}
            className={getClass(image.id)}
            img={image}
            />
        )
    })

    return (
        <main className="photos">
            {allPhotos}
        </main>
    )
}

export default Photos