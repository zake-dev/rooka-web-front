import { axiosService } from '@/api'

export const getImage = linkImageUUID =>
  axiosService.get(`/image/${linkImageUUID}`)

export const postImage = file => {
  const formData = new FormData()
  formData.append('image', file)
  return axiosService.post('/image', formData)
}

export const downloadImage = linkImageUUID =>
  axiosService.get(`/image/download/${linkImageUUID}`, {
    responseType: 'blob',
    headers: {
      accept: 'image/png',
    },
  })
