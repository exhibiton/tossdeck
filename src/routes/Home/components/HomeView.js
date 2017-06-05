import React from 'react'
import Footer from './FooterView'
import MidContent from './MidContentView'
import MidBox from './MidBoxView'
import Header from './HeaderView'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <Header />
    <MidBox />
    <MidContent />
    <Footer />
  </div>
)

export default HomeView
