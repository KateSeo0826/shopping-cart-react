import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({
    product,
    product: { id, image, name, category, price }
}) {
    const navigate = useNavigate();
    return (
        <li onClick={() => {
            navigate(`/products/${id}`, { state: { product } })
        }} className='rounded-lg shadow-md overflow-hidden cursor-point transition-all hover:scale-105' >
            <img className='w-full' src={image} alt={name} />
            <div className='mt-2 px-2 text-lg flex justify-between items-center '>
                <h3 className='truncate'>{name}</h3>
                <p>{`$${price}`}</p>
            </div>
        </li>
    )
}

export default Card