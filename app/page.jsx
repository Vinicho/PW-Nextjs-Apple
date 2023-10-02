import React from 'react'
import Header from '../components/Header'
import "../components/body.css"
import Productos from '../components/Productos'
import Cards from '../components/Cards'
import CarrApi from '@/components/CarrApi'
import Carr from '@/components/Carr'

function page() {
  return (
    <div>
      <Header/>
      <Productos/>
      <Cards/>
      <Carr/>
      <CarrApi/>
    </div>
  )
}

export default page