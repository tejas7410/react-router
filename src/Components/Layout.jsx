import React from 'react'
import Home from './Home/Home'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

const Layout = () => {
    return (
        <>
            <Home />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
