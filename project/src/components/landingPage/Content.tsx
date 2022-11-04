import React from 'react'
import { Footer, Header } from '../basic/index'
import { Landing } from './index'

const Content = () => {
  return (
    <div className='flex flex-col h-full w-full'>
      <Header />
      <Landing />
      <Footer />
    </div>
  )
}
export default Content
