import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './app.module.scss'
import { Content } from './components/landingPage/index'
import { NotFound } from './components/basic/index'

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Content />} />
      </Routes>
    </div>
  )
}

export default App
