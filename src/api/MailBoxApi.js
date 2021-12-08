import { axiosService } from '@/api'

export const getKey = form => {
  const soldier = form.filter(
    ({ key }) => key !== 'militaryType' || key !== 'key',
  )
  return axiosService.get('/mailbox/existence', {
    params: soldier,
  })
}

export const postKey = form => {
  const formData = new FormData()
  Object.entries(form)
    .filter(([key, _]) => key !== 'key')
    .forEach(([key, value]) => formData.append(key, value))
  return axiosService.post('/mailbox', formData)
}

export const getContext = key => {
  return axiosService.get('/mailbox', {
    params: { key },
  })
}
