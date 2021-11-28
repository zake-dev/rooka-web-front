import { axiosService } from '@/api'

export const postMail = (form) => {
  const { id, state, ...mail } = form
  const formData = new FormData()
  Object.entries(mail).forEach(([key, value]) => formData.append(key, value))
  return axiosService.post(`/mails`, formData)
}

export const getMail = (id, password) => {
  const formData = new FormData()
  formData.append('password', password)
  return axiosService.post(`/mails/${id}`, formData)
}

export const deleteMail = (id, password) => axiosService.delete(`/mails/${id}`, {
    params: { password }
  })