import React from 'react'
import WarehouseList from './Components/WarehouseList/WarehouseList'
import { Route, Routes } from 'react-router-dom'
import WarehouseDetails from './Components/WarehouseDetails/WarehouseDetails'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<WarehouseList/>}/>
        <Route path='/warehousedetails/:id' element={<WarehouseDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
