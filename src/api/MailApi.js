import { axiosService } from '@/api'

export const postMail = form =>
  axiosService.post(`/mails`, {
    address: `${form.address1} ${form.address2}`,
    ...form,
  })

export const getMail = (id, password) =>
  axiosService.post(`/mails/${id}`, { password })

export const deleteMail = (id, password) =>
  axiosService.delete(`/mails/${id}`, { data: { password } })
