import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    </>
  )
}

export default Layout