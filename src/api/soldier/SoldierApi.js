import { axiosService } from '@/api'

export const getKey = (form) => {
  const { militaryType, key, ...soldier } = form
  return axiosService.get(`/${militaryType}/soldiers`, {
    params: soldier
  })
}

export const postKey = (form) => {
  const { militaryType, key, ...soldier } = form
  const formData = new FormData()
  Object.entries(soldier).forEach(([key, value]) => formData.append(key, value))
  return axiosService.post(`/${militaryType}/soldiers`, formData)
}