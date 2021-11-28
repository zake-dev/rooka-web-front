import { axiosService } from '@/api'

export const postMail = (form) => {
  const { id, state, ...mail } = form
  const formData = new FormData()
  Object.entries(mail).forEach(([key, value]) => formData.append(key, value))
  return axiosService.post(`/mails`, formData)
}

export const getMail = (id, password) => axiosService.post(`/mails/${id}`, {
  params: { password }
})

export const deleteMail = (id, password) => axiosService.delete(`/mails/${id}`, {
    params: { password }
  })