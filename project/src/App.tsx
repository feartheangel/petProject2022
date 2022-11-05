import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './app.module.scss'
import { Content } from './components/landingPage/index'
import { NotFound } from './components/basic/index'
import { Authorization } from './components/auth/index'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Content />} />
        <Route path='/auth' element={<Authorization />} />
        <Route path='/personal/profile' element={<div>profile</div>} />
      </Routes>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App
