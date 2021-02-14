import Cancel from 'components/Button/Cancel'
import Link from 'next/link'
import { Fragment, useEffect, useRef } from 'react'

interface Props {
    setShowNavbar: Function,
    showNavbar: Boolean,
}

const Mobile = (props: Props) => {
    const { setShowNavbar, showNavbar } = props
    const buttonRef = useRef(null)

    useEffect(() => {
        if (showNavbar) {
            buttonRef.current.focus()
        }
    }, [showNavbar])

    const handleKeyDown = (e) => {
        const ESC_CODE = 27 // keycode for esc key
        if (e.keyCode === ESC_CODE) {
            setShowNavbar(false)
        }
    }
    return (
        <Fragment>
            <header onKeyDown={handleKeyDown} className={`${showNavbar ? "w-full h-screen fixed bg-light-200 flex z-10" : 'hidden'} px-8 py-10 flex flex-wrap flex-col`}>
                <div className="relative w-full">
                    <Cancel buttonRef={buttonRef} handleClick={setShowNavbar} />
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

        </Fragment>
    )
}

export default Mobile