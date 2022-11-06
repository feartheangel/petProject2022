import React from 'react'
import styles from '../header/styles.module.scss'
import logo from '../../../assets/images/basic/header/logo.svg'
import { NavLink } from 'react-router-dom'
import { logout } from '../../../utils/reactTokenAuth'
import { toast } from 'react-toastify'

const HeaderPersonPage = () => {
  const useLogOutClick = () => {
    logout()
    toast.error('Логаут!')
  }
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt='logo' />
      <div>
        <NavLink className={styles.links} to='/' onClick={useLogOutClick}>
          Выйти
        </NavLink>
      </div>
    </div>
  )
}

export default HeaderPersonPage
