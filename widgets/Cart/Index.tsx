import Cancel from 'components/Button/Cancel'
import PrimaryButton from 'components/Button/Primary'
import Select from 'components/Select/Index'
import { motion } from "framer-motion"
import { Fragment, useEffect, useRef } from 'react'
import styles from './Cart.module.css'
import CartItems from './CartItems'
import { useSelector, useDispatch } from 'react-redux'
import { addActiveCurrency } from 'redux/actions/products'


interface Props {
    setShowCart: Function,
    showCart: Boolean
}

const Cart = (props: Props) => {
    const dispatch = useDispatch()
    const { setShowCart, showCart } = props
    const buttonRef = useRef(null)
    const products = useSelector((state) => state.products)
    const cart = useSelector((state) => state.cart)

    const currencyTransformed = []
    products.currencies.map((curr, index) => currencyTransformed.push({
        id: index + 1,
        value: curr,
        title: curr
    }))
    //To aid accessibility, set focus on  close button
    useEffect(() => {
        if (showCart) {
            buttonRef.current.focus()
        }
    }, [showCart])

    // ESC key  should close cart drawer
    const handleKeyDown = (e) => {
        const ESC_CODE = 27 // keycode for esc key
        if (e.keyCode === ESC_CODE) {
            setShowCart(false)
        }
    }

    const handleCurrencyChange = (e) => {
        dispatch(
            addActiveCurrency({
                currency: e.target.value
            })
        )
    }
    const getItem = (id) => products.allProducts.find(product => product.id === id)
    const calculateTotal = () => {
        let total = 0
        cart.cartItems.map(items => {
            let item = getItem(items.id)
            total += item.price * items.quantity
        })
        return total.toFixed(2)
    }


    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
    }
    const sectionVariants = {
        open: {
            backdropFilter: `blur(3px)`
        },
        visible: {
            display: "flex",
        },
        close: {
            backdropFilter: "none"
        },
        hidden: {
            transitionEnd: {
                display: "hidden",
            },
        },
    }
    return (
        <Fragment>
            <motion.section
                animate={showCart ? "open visible" : "close hidden"}
                variants={sectionVariants}
                transition={{  duration: 0.7 }}
                onKeyDown={handleKeyDown}
                className={`${showCart ?    " h-screen fixed bg-light-200  z-20" : ''}  flex-wrap justify-end w-full flex-col ${styles.cart_backdrop}`}>
                <motion.div
                    animate={showCart ? "open" : "closed"}
                    variants={variants}
                    transition={{ duration: 0.7, delay: 0 }}

                    className={`h-screen fixed w-full z-50 opacity-0  py-5  md:py-10 bg-opacity-100 bg-light-200 right-0 ` + styles.cart_parent}>
                    <div className="w-full flex flex-wrap md:px-8 px-4">
                        <div className="relative w-full ">
                            <Cancel buttonRef={buttonRef} handleClick={setShowCart} />
                            <h2 className="w-full text-center uppercase text-brown-900">your cart</h2>
                            <div className="w-20 mt-6">
                                <Select
                                    handleChange={handleCurrencyChange}
                                    label="Currency"
                                    options={currencyTransformed}
                                    selected={products.activeCurrency}
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
                            <h3>{products.activeCurrency} {calculateTotal()}</h3>
                        </div>
                        <div className="my-3 w-full">
                            <PrimaryButton type="button" value="PROCEED TO CHECKOUT" handleClick={() => { }} />

                        </div>
                    </div>

                </motion.div>

            </motion.section>

        </Fragment>
    )
}

export default Cart