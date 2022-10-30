import React, { useState } from "react";

function Image({ className, source }) {

    const [hovered, setHovered] = useState(false)

    return (
        <div
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered ?
                <>
                    <i className="ri-heart-line favorite"></i>
                    <i className="ri-add-circle-line cart"></i>
                </>
                :
                null
            }
            <img src={source} className="image-grid" />
        </div>
    )
}

export default Image