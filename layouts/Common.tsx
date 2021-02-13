import React, { FunctionComponent, useState } from 'react'
import Header from 'widgets/Header/Index'
import Mobile from 'widgets/Header/Mobile'

interface Props {
    alt?: boolean
}

const Common: FunctionComponent<Props> = ({ children }) => {
    const [showNavbar, setShowNavbar] = useState<Boolean>(false)
    return (
        <>
            <Mobile setShowNavbar={setShowNavbar} showNavbar={showNavbar} />
            <Header setShowNavbar={setShowNavbar} />
            <div className=" flex w-full justify-center">
                <div className=" flex relative flex-wrap w-full landing-max">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Common
