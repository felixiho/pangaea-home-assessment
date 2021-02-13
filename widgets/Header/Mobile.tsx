import Link from 'next/link'
import { useEffect, useRef } from 'react'

interface Props {
    setShowNavbar: Function,
    showNavbar: Boolean
}

const Mobile = (props: Props) => {
    const {setShowNavbar, showNavbar} = props
    const buttonRef = useRef(null)

    useEffect(()=> {
        if (showNavbar){
            buttonRef.current.focus()
        }
    },[showNavbar])

    const handleKeyDown = (e) => {
        const ESC_CODE = 27 // keycode for esc key
        if (e.keyCode === ESC_CODE){
            setShowNavbar(false)
        }
    }
    return (
        <header onKeyDown={handleKeyDown} className={`${showNavbar ? "w-full h-screen fixed bg-light-200 flex z-10" : 'hidden'} px-8 py-10 flex flex-wrap flex-col`}>
            <div className="relative w-full">
                <button ref={buttonRef} onClick={() => setShowNavbar(false)} className="absolute right-0">
                    <div className="w-6 h-6 border-brown-400 border rounded-full flex justify-center">
                        <svg viewBox="0 0 256 512" focusable="false" role="presentation" className="w-2">
                            <path fill="#2b2e2b"
                                d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z">
                            </path>
                        </svg>
                    </div>
                </button>
            </div>
            <div className="w-full flex justify-evenly font-light mt-4">

                <Link href="/">
                    <a className="my-auto border-b border-black  text-sm text-brown-200 ">Shop</a>
                </Link>
                <Link href="/">
                    <a className="my-auto  text-sm  ">Blog</a>
                </Link>
            </div>
            <ul className="w-full flex flex-wrap mt-10">
                <li className="w-full my-2">
                    <Link href="/">
                        <a className="my-auto  text-xl font-thin ">Skin</a>
                    </Link>
                </li>
                <li className="w-full my-2">
                    <Link href="/">
                        <a className="my-auto  text-xl font-thin ">Hair & Body</a>
                    </Link>
                </li>
                <li className="w-full my-2">
                    <Link href="/">
                        <a className="my-auto  text-xl font-thin ">Face</a>
                    </Link>
                </li>
                <li className="w-full my-2">
                    <Link href="/">
                        <a className="my-auto  text-xl font-thin ">Shop All</a>
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Mobile