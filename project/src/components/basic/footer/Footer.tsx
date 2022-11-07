import React from 'react'
import styles from './styles.module.scss'
import { imgSun, imgMoon } from './index'

const Footer = () => {
  return (
    <div className='px-40 mt-20'>
      <div className={styles.footer_wrapper}>
        <p className={styles.footer_text}>© Mixail&Evgeni Inc</p>
        <div className='flex content-center justify-center'>
          <img src={imgMoon} alt='imgMoon' />
          <div className='flex justify-center'>
            <div className='flex content-center justify-center'>
              <div className='form-check form-switch mx-3'>
                <input
                  className='form-check-input appearance-none w-10 -ml-10 rounded-full float-left h-6 align-top
                  bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm'
                  type='checkbox'
                  role='switch'
                  id='flexSwitchCheckDefault56'
                />
              </div>
            </div>
          </div>
          <img src={imgSun} alt='imgSun' />
        </div>
      </div>
    </div>
  )
}

export default Footer
