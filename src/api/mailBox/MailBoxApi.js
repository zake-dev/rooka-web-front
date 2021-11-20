import { axiosService } from '@/api'

export const getKey = (form) => {
  const { militaryType, key, ...soldier } = form
  return axiosService.get(`/mailbox/existence`, {
    params: soldier
  })
}

export const postKey = (form) => {
  const { key, ...soldier } = form
  const formData = new FormData()
  Object.entries(soldier).forEach(([key, value]) => formData.append(key, value))
  return axiosService.post(`/mailbox`, formData)
}

export const getContext = (key) => {
  return axiosService.get('/mailbox', {
    params: { key }
  })
}