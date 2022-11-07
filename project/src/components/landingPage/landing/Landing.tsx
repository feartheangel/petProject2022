import React from 'react'
import {
  IconOne,
  imgExemplary,
  imgExemplaryTwo,
  imgExemplaryThree,
  ImgLandingFour,
  imgExemplaryFour,
  imgExemplarFive,
  imgExemplarSix,
  imgExemplarSeven,
  imgExemplarEight
} from '../index'
import styles from './styles.module.scss'

const Landing = () => {
  const [groupBrnOpen, setGroupBrnOpen] = React.useState(1)

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
          <img className={styles.img_exemplary} src={imgExemplary} alt='imgExemplary' />
        </div>
      </div>
      <div className='pt-40'>
        <h2 className='text-5xl font-normal text-white'>Sleek dashboard for managing your media</h2>
        <p className='text-lg font-normal mt-4'>A complete Object Explorer so that any of your team can use.</p>
        <p className='text-sm font-normal mt-4'>
          Drag and drop uploading, moving objects, and multiple object selection. As easy as working on your desktop.
        </p>
        <div className='flex justify-between pt-16 pr-60'>
          <div>
            <button
              onClick={() => setGroupBrnOpen(1)}
              className={groupBrnOpen === 1 ? styles.group_btn_active : styles.group_btn}
            >
              File previews
            </button>
            <button
              onClick={() => setGroupBrnOpen(2)}
              className={groupBrnOpen === 2 ? styles.group_btn_active : styles.group_btn}
            >
              Column view
            </button>
            <button
              onClick={() => setGroupBrnOpen(3)}
              className={groupBrnOpen === 3 ? styles.group_btn_active : styles.group_btn}
            >
              List view
            </button>
            <button
              onClick={() => setGroupBrnOpen(4)}
              className={groupBrnOpen === 4 ? styles.group_btn_active : styles.group_btn}
            >
              Multi select actions
            </button>
            <button
              onClick={() => setGroupBrnOpen(5)}
              className={groupBrnOpen === 5 ? styles.group_btn_active : styles.group_btn}
            >
              Path navigator
            </button>
            {groupBrnOpen === 1 && <img className={styles.slide_img} src={imgExemplaryTwo} alt='imgExemplaryTwo' />}
            {groupBrnOpen === 2 && <img className={styles.slide_img} src={imgExemplarFive} alt='imgExemplarFive' />}
            {groupBrnOpen === 3 && <img className={styles.slide_img} src={imgExemplarSix} alt='imgExemplarSix' />}
            {groupBrnOpen === 4 && <img className={styles.slide_img} src={imgExemplarSeven} alt='imgExemplarSeven' />}
            {groupBrnOpen === 5 && <img className={styles.slide_img} src={imgExemplarEight} alt='imgExemplarEight' />}
          </div>
          <div>
            <p className='text-lg font-normal text-white'>File previews</p>
            <p className='font-normal text-base leading-6 mt-5'>Preview any media type, including video and audio.</p>
            <img className='mt-11' src={imgExemplaryThree} alt='imgExemplaryThree' />
          </div>
        </div>
      </div>
      <div className='flex justify-between pt-16 pr-32'>
        <div>
          <h2 className='text-5xl font-normal text-white'>
            Integrates natively
            <br /> with Sup-abase Auth
          </h2>
          <p className='text-sm font-normal mt-5'>Using Postgres Row Level Security to create Object access rules.</p>
          <p className='text-sm font-normal mt-10'>
            Storage Authorization is built around Postgres so that you can use
            <br /> any combination of SQL, Postgres functions, and even your own
            <br /> metadata to write policies.
          </p>
          <img className='mt-7' src={ImgLandingFour} alt='ImgLanding' />
        </div>
        <div>
          <button className={styles.group_btn}>Public access to a bucket</button>
          <button className={styles.group_btn}>Public access to a folder</button>
          <button className={styles.group_btn}>Authenticated access to a bucket</button>
          <img src={imgExemplaryFour} alt='imgExemplary' />
        </div>
      </div>
    </div>
  )
}

export default Landing
