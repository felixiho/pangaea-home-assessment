import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSelector} from 'react-redux'
import styles from './Header.module.css'

interface Props {
    setShowNavbar: Function,
    setShowCart: Function
}

const Header = (props:Props) => {
    const [total, setTotal] = useState(0)
    const cart = useSelector((state) => state.cart)
    useEffect(()=> {
        let _total = 0
        cart.cartItems.map(items => {
            _total+= items.quantity
        })
        setTotal(_total)
    },[cart])
    return (
        <header className="w-full border-b font-light fixed bg-white z-10  shadow-custom1 py-2 md:px-10 px-4 flex justify-between">
            <div className="md:inline-flex hidden">
                <Link href="/">
                    <a className="mr-24">
                        <Image src="/logo.png" alt="Lumin Logo" width="163" height="44" />
                    </a>
                </Link>
                <Link href="/">
                    <a className="my-auto hover:text-brown-200 transition ease-linear duration-200">Shop</a>
                </Link>
                <Link href="/">
                    <a className="my-auto mx-16 hover:text-brown-200 transition ease-linear duration-200">Help</a>
                </Link>
                <Link href="/">
                    <a className="my-auto hover:text-brown-200 transition ease-linear duration-200">Blog</a>
                </Link>
            </div>
            <div className="md:hidden flex my-4">
                <button onClick={() => props.setShowNavbar(true)}>
                    <p className="h-1 w-4 border-t border-brown-300"></p>
                    <p className="h-1 w-4 border-t border-brown-300"></p>
                    <p className="w-4 border-t border-brown-300"></p>
                </button>
            </div>

            <div className="my-auto inline-flex">
                <Link href="/">
                    <a className="my-auto hover:text-brown-200 transition ease-linear duration-200">Account</a>
                </Link>
                <button onClick={()=>props.setShowCart(true)}>
                    <a className="mx-5 pt-1 inline-flex relative ">
                        <img src="/cart.png" alt="Cart" width="25" height="21" />
                        <p className={`text-sm absolute ${styles.cart_value}`}>{total}</p>
                    </a>
                </button>

            </div>
        </header>
    )
}

export default Header