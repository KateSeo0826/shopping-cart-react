import React from 'react'
import useCart from '../hooks/useCart'
import { AiOutlinePlusSquare, AiOutlineMinusSquare, AiFillDelete } from 'react-icons/ai'
const ICON_CLASS = 'transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1'
function CartItem(
    {
        item,
        item: { id, image, name, category, price, options, quantity },
        uid
    }) {

    const { addOrUpdateItem, deleteItem } = useCart()

    const handleMinus = () => {
        if (quantity < 2) return
        addOrUpdateItem.mutate(
            { ...item, quantity: quantity - 1 }
        )
        console.log('-', quantity)
    }
    const handlePlus = () => {
        addOrUpdateItem.mutate(
            { ...item, quantity: quantity + 1 }
        )
        console.log('-', quantity)
    }
    const handleDelete = () => {
        deleteItem.mutate(id)
    }

    return (
        <li className='flex justify-between items-center my-2' >
            <img className='w-24 md:w-48 rounded-lg' src={image} alt={name} />
            <div className='basis-3/5'>
                <p className='text-lg'>{name}</p>
                <p className='text-lg font-bold text-brand'>{options}</p>
                <p>{`$${price}`}</p>
            </div>
            <div className='flex items-center text-2xl'>
                <AiOutlinePlusSquare className={ICON_CLASS} onClick={handleMinus} />
                <span>{quantity}</span>
                <AiOutlineMinusSquare className={ICON_CLASS} onClick={handlePlus} />
                <AiFillDelete className={ICON_CLASS} onClick={handleDelete} />
            </div>
        </li>
    )
}

export default CartItem