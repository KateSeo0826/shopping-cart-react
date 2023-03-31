import React from 'react'
import useCart from '../hooks/useCart'
import { AiOutlineShoppingCart } from 'react-icons/ai'
function CartStatus() {
    const { cartQuery: { data: cart } } = useCart()

    return (
        <div className='relative'>
            <AiOutlineShoppingCart className='text-4xl' />
            {cart && (
                <p className='w-5 h-5 text-center text-sm bg-brand text-white rounded-full absolute -top-1 -right-2'>
                    {cart.length}
                </p>
            )}
        </div>
    )
}

export default CartStatus