import { axiosService } from '@/api'

export const getKey = form => {
  return axiosService.get('/mailbox/existence', {
    params: form,
  })
}

export const postKey = form => axiosService.post('/mailbox', form)

export const getContext = key =>
  axiosService.get('/mailbox', { params: { key } })

export const setLinkImageUUID = (key, linkImageUUID) =>
  axiosService.patch(
    '/mailbox',
    { linkImageUUID },
    {
      params: { key },
    },
  )
