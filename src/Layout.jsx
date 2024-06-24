import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'
function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout

// Outlet layout ko as a base rkhke  jaha humne dia waha waha hum change kr skte h
// jaha nhi dia wha kuch change nhi hoga
// ab isse kya hoga ki header aur footer change nhi hoga but uski andar ki cheeze change hoti rhengi jaise hum koi button click krenge