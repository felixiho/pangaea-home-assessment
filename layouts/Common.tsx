import Link from 'next/link'
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
            {children}
        </>
    )
}

export default Common
