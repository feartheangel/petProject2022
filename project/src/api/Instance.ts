import axios from 'axios'
import { toast } from 'react-toastify'
import { logout } from 'utils/reactTokenAuth'

const apiInstance = axios.create({})
apiInstance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    toast.error(error.response.data.error || error.message)
    if (error.response.status === 401) {
      window.location.reload()
      window.location.href = window.location.origin + '/authorization'
      logout()
    }
    throw error
  }
)

export default apiInstance
