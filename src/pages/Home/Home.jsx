import React from 'react'
import './Home.css'
import { Header } from '../../components/Header/Header'
import { ExploreMenu } from '../../components/ExploreMenu/ExploreMenu'

export const Home = () => {
  return (
    <div>
      <Header/>
      <ExploreMenu/>
    </div>
  )
}
