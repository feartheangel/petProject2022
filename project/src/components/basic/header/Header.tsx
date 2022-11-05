import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/images/basic/header/logo.svg'
import { headerRoutes } from '../../../routes/header/routes'
import styles from './styles.module.scss'

export interface IProps {
  title: string
  id: number
  to: string
}

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt='logo' />
      <div>
        {headerRoutes.map((item: IProps) => (
          <NavLink className={styles.links} to={item.to} key={item.id}>
            {item.title}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Header
