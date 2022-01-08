export const useImageDownloader = () => {
  const handleDownloadImage = (linkImageUUID, title) => {
    const $link = document.createElement('a')
    $link.target = '_blank'
    $link.href = process.env.VUE_APP_ROOKA_API_URL + `/image/${linkImageUUID}`
    $link.download = title
    $link.click()
  }

  return { handleDownloadImage }
}
