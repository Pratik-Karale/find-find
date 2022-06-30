import React from 'react'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
// import useLocal
export const App = () => {
  return (
    <div id="app">
      <Outlet />
    </div>
  )
}
