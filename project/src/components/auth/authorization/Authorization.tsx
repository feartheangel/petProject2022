import React from 'react'
import { Header } from '../../basic'
import { FieldValues, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../utils/reactTokenAuth'
import { getAuth } from '../../../api/Auth'

const Authorization = () => {
  const navigate = useNavigate()

  type FormValues = {
    companyCode: string
    username: string
    password: string
  }

  const { register, handleSubmit } = useForm<FormValues>({ mode: 'all' })

  const loginAuthClick = async (data: FieldValues) => {
    try {
      const response = await getAuth(data)
      login(response.data)
      toast.success('Авторизация прошла успешно!')
      navigate('/personal/profile')
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <div className='flex flex-col w-full h-full'>
      <Header />
      <div className='flex w-full h-full justify-center items-center'>
        <div className='block p-6 rounded-lg shadow-lg bg-white max-w-sm'>
          <form onSubmit={handleSubmit(loginAuthClick)}>
            <div className='form-group mb-6'>
              <label htmlFor='exampleInputCompanyCode2' className='form-label inline-block mb-2 text-gray-700'>
                Company Code
              </label>
              <input
                {...register('companyCode', {
                  required: 'Поле не может быть пустым!',
                  maxLength: {
                    value: 10,
                    message: 'Максимум 100 символов'
                  }
                })}
                maxLength={10}
                required
                type='text'
                className='form-control
        block
        relative
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                id='exampleInputCompanyCode2'
                aria-describedby='код не более 10 символов'
                placeholder='Company Code'
              />
            </div>
            <div className='form-group mb-6'>
              <label htmlFor='exampleInputEmail2' className='form-label inline-block mb-2 text-gray-700'>
                Email
              </label>
              <input
                {...register('username', {
                  required: 'Поле не может быть пустым!',
                  maxLength: {
                    value: 15,
                    message: 'Максимум 20 символов'
                  }
                })}
                maxLength={15}
                type='email'
                required
                className='form-control
        block
        relative
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                id='exampleInputEmail2'
                aria-describedby='emailHelp'
                placeholder='Enter email'
              />
            </div>
            <div className='form-group mb-6'>
              <label htmlFor='exampleInputPassword2' className='form-label inline-block mb-2 text-gray-700'>
                Password
              </label>
              <input
                {...register('password', {
                  required: 'Поле не может быть пустым!',
                  maxLength: {
                    value: 15,
                    message: 'Максимум 15 символов'
                  }
                })}
                maxLength={15}
                required
                type='password'
                className='form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                id='exampleInputPassword2'
                placeholder='Password'
              />
            </div>
            <div className='flex justify-between items-center mb-6'>
              <div className='form-group form-check'>
                <input
                  type='checkbox'
                  className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                  id='exampleCheck2'
                />
                <label className='form-check-label inline-block text-gray-800 mr-6' htmlFor='exampleCheck2'>
                  Запомнить
                </label>
              </div>
              <a
                href='#'
                className='text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out'
              >
                Забыли пароль?
              </a>
            </div>
            <button
              type='submit'
              className='
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out'
            >
              Войти
            </button>
            <p className='text-gray-800 mt-6 text-center'>
              Not a member?{' '}
              <a
                href='#'
                className='text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out'
              >
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Authorization
