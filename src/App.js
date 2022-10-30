import React from "react";
import { Link, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {

  return (
    <div>
      <div>
        <Header />
      </div>

      <Routes>
        <Route path="/*" element={<Photos />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  )
}
export default App;
