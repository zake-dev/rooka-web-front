import { axiosService } from '@/api'

export const postMail = form => {
  const formData = new FormData()
  Object.entries(form)
    .filter(
      ([key, _]) =>
        key !== 'id' ||
        key !== 'state' ||
        key !== 'address1' ||
        key !== 'address2',
    )
    .forEach(([key, value]) => formData.append(key, value))
  formData.append('address', `${form.address1} ${form.address2}`)
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
