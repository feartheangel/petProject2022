import React from 'react'
import { IconOne, imgExemplary, imgExemplaryTwo, imgExemplaryThree } from '../index'
import styles from './styles.module.scss'

const Landing = () => {
  return (
    <div className='pt-32 pl-28 pr-40'>
      <div className='flex justify-between'>
        <div>
          <p className='flex text-lg font-normal'>
            <img className='mr-3 w-8' src={IconOne} alt='IconOne' />
            Storage
          </p>
          <h1 className='mt-7 text-5xl font-bold text-white leading-snug'>
            Store and serve
            <br /> any type of digital content
          </h1>
          <p className='font-normal text-sm mt-14 leading-7'>
            An open source Object store service with unlimited scalability, for
            <br /> any file type.
          </p>
          <p className='font-normal text-sm mt-4 leading-7'>
            With custom policies and permissions that are familiar and easy to
            <br /> implement.
          </p>
          <button
            type='submit'
            className='mt-14 flex w-36 h-9 items-center justify-center rounded-md border border-transparent bg-green-400 ml-12 py-2 px-5 text-base font-medium text-white text-sm font-normal hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'
          >
            Start a project
          </button>
        </div>
        <div className='flex items-center justify-center'>
          <img className={styles.imgExemplary} src={imgExemplary} alt='imgExemplary' />
        </div>
      </div>
      <div className='pt-40'>
        <h2 className='text-5xl font-normal text-white'>Sleek dashboard for managing your media</h2>
        <p className='text-lg font-normal mt-4'>A complete Object Explorer so that any of your team can use.</p>
        <p className='text-sm font-normal mt-4'>
          Drag and drop uploading, moving objects, and multiple object selection. As easy as working on your desktop.
        </p>
        <div className='flex justify-between pt-16 pr-28'>
          <div>
            <button className={styles.group_btn}>File previews</button>
            <button className={styles.group_btn}>Column view</button>
            <button className={styles.group_btn}>List view</button>
            <button className={styles.group_btn}>Multi select actions</button>
            <button className={styles.group_btn}>Path navigator</button>
            <img src={imgExemplaryTwo} alt='imgExemplaryTwo' />
          </div>
          <div>
            <p className='text-lg font-normal text-white'>File previews</p>
            <p className='font-normal text-base leading-6 mt-5'>Preview any media type, including video and audio.</p>
            <img className='mt-11' src={imgExemplaryThree} alt='imgExemplaryThree' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
