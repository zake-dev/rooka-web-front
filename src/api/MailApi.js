import { axiosService } from '@/api'

export const postMail = form => {
  const formData = new FormData()
  Object.entries(form)
    .filter(([key, _]) => key !== 'id' || key !== 'state')
    .forEach(([key, value]) => formData.append(key, value))
  return axiosService.post(`/mails`, formData)
}

export const getMail = (id, password) => {
  const formData = new FormData()
  formData.append('password', password)
  return axiosService.post(`/mails/${id}`, formData)
}

export const deleteMail = (id, password) =>
  axiosService.delete(`/mails/${id}`, {
    params: { password },
  })
