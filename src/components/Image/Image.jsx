import React from 'react'

const Image = ({ src, alt, title, label }) => {
    return (
        <img src={src} alt={alt} title={title} aria-label={label} />
    )
}

export default Image