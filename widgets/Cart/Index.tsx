import Cancel from 'components/Button/Cancel'
import PrimaryButton from 'components/Button/Primary'
import Select from 'components/Select/Index'
import Link from 'next/link'
import { Fragment, useEffect, useRef } from 'react'
import styles from './Cart.module.css'
import CartItems from './CartItems'

interface Props {
    setShowCart: Function,
    showCart: Boolean
}

const Cart = (props: Props) => {
    const { setShowCart, showCart } = props
    const buttonRef = useRef(null)
    const currency = [
        "USD",
        "AED",
        "AFN",
        "ALL",
        "AMD",
        "ANG",
        "AOA",
        "ARS",
        "AUD",
        "AWG",
        "AZN",
        "BAM",
        "BBD",
        "BDT",
        "BGN",
        "BIF",
        "BMD",
        "BND",
        "BOB",
        "BRL",
        "BSD",
        "BWP",
        "BZD",
        "CAD",
        "CDF",
        "CHF",
        "CLP",
        "CNY",
        "COP",
        "CRC",
        "CVE",
        "CZK",
        "DJF",
        "DKK",
        "DOP",
        "DZD",
        "EGP",
        "ETB",
        "EUR",
        "FJD",
        "FKP",
        "GBP",
        "GEL",
        "GIP",
        "GMD",
        "GNF",
        "GTQ",
        "GYD",
        "HKD",
        "HNL",
        "HRK",
        "HTG",
        "HUF",
        "IDR",
        "ILS",
        "INR",
        "ISK",
        "JMD",
        "JPY",
        "KES",
        "KSG",
        "KHR",
        "KMF",
        "KRW",
        "KYD",
        "KZT",
        "LAK",
        "LBP",
        "LKR",
        "LRD",
        "LSL",
        "MAD",
        "MDL",
        "MGA",
        "MKD",
        "MMK",
        "MNT",
        "MOP",
        "MRO",
        "MUR",
        "MVR",
        "MWK",
        "MXN",
        "MYR",
        "MZN",
        "NAD",
        "NGN",
        "NIO",
        "NOK",
        "NPR",
        "NZD",
        "PAB",
        "PEN",
        "PGK",
        "PHP",
        "PKR",
        "PLN",
        "PYG",
        "QAR",
        "RON",
        "RSD",
        "RUB",
        "RWF",
        "SAR",
        "SBD",
        "SCR",
        "SEK",
        "SGD",
        "SHP",
        "SLL",
        "SOS",
        "SRD",
        "STD",
        "SVC",
        "SZL",
        "THB",
        "TJS",
        "TOP",
        "TRY",
        "TTD",
        "TWD",
        "TZS",
        "UAH",
        "UGX",
        "UYU",
        "UZS",
        "VND",
        "VUV",
        "WST",
        "XAF",
        "XCD",
        "XOF",
        "XPF",
        "YER",
        "ZAR",
        "ZMW"
    ]

    const currencyTransformed = []
    currency.map((curr, index) => currencyTransformed.push({
        id: index + 1,
        value: curr,
        title: curr
    }))
    useEffect(() => {
        if (showCart) {
            buttonRef.current.focus()
        }
    }, [showCart])

    const handleKeyDown = (e) => {
        const ESC_CODE = 27 // keycode for esc key
        if (e.keyCode === ESC_CODE) {
            setShowCart(false)
        }
    }
    const total = 9093020
    return (
        <Fragment>
            <section onKeyDown={handleKeyDown} className={`${showCart ? styles.cart_backdrop + " w-full h-screen fixed bg-light-200 flex z-20" : 'hidden'} flex flex-wrap justify-end flex-col`}>
                <div className={`h-screen fixed w-full z-50 opacity-100  py-5  md:py-10 bg-opacity-100 bg-light-200 right-0 ` + styles.cart_parent}>
                    <div className="w-full flex flex-wrap md:px-8 px-4">
                        <div className="relative w-full ">
                            <Cancel buttonRef={buttonRef} handleClick={setShowCart} />
                            <h2 className="w-full text-center uppercase text-brown-900">your cart</h2>
                            <div className="w-20 mt-6">
                                <Select
                                    label="Currency"
                                    options={currencyTransformed}
                                    selected={1}
                                    small={true}
                                />

                            </div>

                        </div>

                    </div>
                    <div className="w-full pt-8 pb-64  md:px-8 px-4 h-screen overflow-y-scroll">
                        <CartItems />
                    </div>
                    <div className="flex flex-wrap absolute bottom-0 w-full shadow-custom2 bg-light-200 md:p-8  p-4">
                        <div className=" w-full inline-flex justify-between ">
                            <h3 className="font-thin">Subtotal</h3>
                            <h3>{currency[0]} {total}</h3>
                        </div>
                        <div className="my-3 w-full">
                            <PrimaryButton type="button" value="PROCEED TO CHECKOUT" handleClick={() => { }} />

                        </div>
                    </div>

                </div>

            </section>

        </Fragment>
    )
}

export default Cart