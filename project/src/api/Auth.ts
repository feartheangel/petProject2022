import { apiInstance } from '../api/index'
import { FieldValues } from 'react-hook-form'

export const getAuth = (data: FieldValues) => {
  const backEnd = process.env.REACT_APP_BACKEND_URL
  return apiInstance.post(`${backEnd}/v1/api/user/login`, data)
}
