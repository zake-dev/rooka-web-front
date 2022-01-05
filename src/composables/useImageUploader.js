import { ref } from 'vue'

import * as FileApi from '@/api/FileApi'
import { useFileValidator } from '@/composables/useFileValidator'

const BYTE_BASE = 1024

export const useImageUploader = (callback) => {
  const imageInput = ref(null)
  const errorOnUploadImage = ref(false)
  const { isValid } = useFileValidator({
    validExtensions: ['jpg', 'jpeg', 'bmp', 'gif', 'png'],
    fileSizeLimit: 1 * BYTE_BASE * BYTE_BASE,
  })

  const handleOpenImageUploader = () => imageInput.value.click()
  const handleUploadImage = async () => {
    const file = imageInput.value.files[0]
    if ((errorOnUploadImage.value = isValid(file))) {
      const { data } = await FileApi.postImage(file)
      callback(data.uuid)
    }
  }

  return {
    imageInput,
    handleOpenImageUploader,
    handleUploadImage,
    errorOnUploadImage,
  }
}
