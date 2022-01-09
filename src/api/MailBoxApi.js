import { axiosService } from '@/api'

export const getKey = form => {
  return axiosService.get('/mailbox/existence', {
    params: form,
  })
}

export const postKey = form => {
  const formData = new FormData()
  Object.entries(form)
    .filter(([key, _]) => key !== 'key')
    .forEach(([key, value]) => formData.append(key, value))
  return axiosService.post('/mailbox', formData)
}

export const getContext = key =>
  axiosService.get('/mailbox', {
    params: { key },
  })

export const setLinkImageUUID = (key, linkImageUUID) => {
  const formData = new FormData()
  formData.append('key', key)
  formData.append('linkImageUUID', linkImageUUID)

  axiosService.patch('/mailbox', formData)
}
