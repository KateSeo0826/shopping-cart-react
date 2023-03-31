import React from 'react'
import CartItem from '../components/CartItem'
import PriceCard from '../components/PriceCard'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { FaEquals } from 'react-icons/fa'
import Button from '../components/ui/Button'
import useCart from '../hooks/useCart'
import { useAuthContext } from '../context/AuthContext'
const SHIPPING = 10
function MyCart() {
    const { uid } = useAuthContext()
    const { cartQuery: { isLoading, error, data: cart } } = useCart()
    const hasProducts = cart && cart.length > 0
    const totalPrice = cart && cart.reduce((prev, current) =>
        prev + parseInt(current.price) * current.quantity,
        0)
    if (isLoading) return <p>Loading...</p>
    console.log(cart)
    return (
        <section className='p-8'>
            <p className='text-2xl text-center font-bold pb-4 border-b border-gray-300'>Shopping Cart</p>
            {!hasProducts && <p>The Empty Cart</p>}
            {error && <p>{error}</p>}
            <div className='border-b border-gray-300 mb-8 p-4 px-8'>
                <ul >
                    {hasProducts && cart.map(item =>
                        <CartItem
                            key={item.id}
                            item={item}
                            uid={uid}
                        />
                    )}
                    <div className='flex flex-row float-right'>
                    </div>
                </ul>
            </div>
            <div className='flex justify-between items-center mb-6 px-2 md:px-8 lg:px-16 '>
                <PriceCard text='Item Total Price' price={totalPrice} />
                <BsFillPlusCircleFill className='shrink-0' />
                <PriceCard text='Delivery Fee' price={SHIPPING} />
                <FaEquals className='shrink-0' />
                <PriceCard text='Total Price' price={totalPrice + SHIPPING} />
            </div>
            <Button text='Order' />
        </section >
    )
}

export default MyCart