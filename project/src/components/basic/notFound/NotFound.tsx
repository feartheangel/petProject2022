import React from 'react'
import styles from './styles.module.scss'

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <p>Ошибка 404!</p>
      <p>Страница не найдена.</p>
    </div>
  )
}

export default NotFound
