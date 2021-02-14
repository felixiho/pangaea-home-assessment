import React, { FunctionComponent, useState } from 'react'
import Header from 'widgets/Header/Index'
import Mobile from 'widgets/Header/Mobile'
import Cart from 'widgets/Cart/Index'

interface Props {
    alt?: boolean
}

const Common: FunctionComponent<Props> = ({ children }) => {
    const [showNavbar, setShowNavbar] = useState<Boolean>(false)
    const [showCart, setShowCart] = useState<Boolean>(false)
    return (
        <>
            <Cart showCart={showCart} setShowCart={setShowCart} />
            <Mobile setShowNavbar={setShowNavbar} showNavbar={showNavbar} />
            <Header setShowNavbar={setShowNavbar} setShowCart={setShowCart} />
            <div className={`${showCart ? 'fixed':''} flex w-full justify-center`}>
                <div className=" flex relative flex-wrap w-full ">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Common
