import { useEffect, useState } from 'react'
import Header from 'widgets/Header/Index'
import Mobile from 'widgets/Header/Mobile'
import Cart from 'widgets/Cart/Index'
import { useSelector, useDispatch } from 'react-redux'
import {showCart}  from 'redux/actions/cart'
import { useQuery } from '@apollo/client'
import { GET_ALL_CURRENCIES } from 'services/graphql/queries/currencies'
import {addActiveCurrency, addProductsCurrencies} from 'redux/actions/products'



const Common = ({ children }) => {
    const dispatcher = useDispatch()
    const [showNavbar, setShowNavbar] = useState<Boolean>(false)
    const cart = useSelector((state) => state.cart)
    const dispatch = (type) => dispatcher(
        showCart({
            type
        })
    )
    const { data } = useQuery(
        GET_ALL_CURRENCIES
    )

    useEffect(() => {
        if (data) {
            dispatcher(
                addProductsCurrencies({
                    currency: data.currency
                })
            )
            dispatcher(
                addActiveCurrency({
                    currency: data.currency[0]
                })
            )
        }
    }, [data])
    return (
        <>
            <Cart showCart={cart.showCart} setShowCart={dispatch} />
            <Mobile setShowNavbar={setShowNavbar} showNavbar={showNavbar} />
            <Header setShowNavbar={setShowNavbar} setShowCart={dispatch} />
            <div className={`${cart.showCart ? '':''} flex w-full justify-center pt-10 md:pt-20`}>
                <div className=" flex relative flex-wrap w-full ">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Common
