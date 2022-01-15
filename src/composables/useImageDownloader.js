import * as FileApi from '@/api/FileApi'

export const useImageDownloader = () => {
  const handleDownloadImage = async (linkImageUUID, title) => {
    const { data } = await FileApi.downloadImage(linkImageUUID)
    const url = window.URL.createObjectURL(data)
    const $link = document.createElement('a')
    $link.href = url
    $link.download = title
    $link.click()
    $link.remove()
    window.URL.revokeObjectURL(url)
  }

  return { handleDownloadImage }
}
