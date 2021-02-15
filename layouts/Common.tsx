import { FunctionComponent, useState } from 'react'
import Header from 'widgets/Header/Index'
import Mobile from 'widgets/Header/Mobile'
import Cart from 'widgets/Cart/Index'
import { useSelector, useDispatch } from 'react-redux'
import {showCart}  from 'redux/actions/cart'



const Common = ({ children }) => {
    const dispatcher = useDispatch()
    const [showNavbar, setShowNavbar] = useState<Boolean>(false)
    const cart = useSelector((state) => state.cart)
    const dispatch = (type) => dispatcher(
        showCart({
            type
        })
    )
    return (
        <>
            <Cart showCart={cart.showCart} setShowCart={dispatch} />
            <Mobile setShowNavbar={setShowNavbar} showNavbar={showNavbar} />
            <Header setShowNavbar={setShowNavbar} setShowCart={dispatch} />
            <div className={`${cart.showCart ? 'fixed':''} flex w-full justify-center`}>
                <div className=" flex relative flex-wrap w-full ">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Common
