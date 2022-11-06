import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Content } from './components/landingPage/index'
import { NotFound } from './components/basic/index'
import { Authorization } from './components/auth/index'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './app.module.scss'
import { useAuth } from './utils/reactTokenAuth'
import PersonPage from './components/personalPage/PersonPage'

function App() {
  const [logged] = useAuth()
  return (
    <div className={styles.app}>
      <Routes>
        {logged ? (
          <>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Content />} />
            <Route path='/auth' element={<Authorization />} />
            <Route path='/personal/profile' element={<PersonPage />} />
          </>
        ) : (
          <>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Content />} />
            <Route path='/auth' element={<Authorization />} />
          </>
        )}
      </Routes>
      <ToastContainer
        position='bottom-left'
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
