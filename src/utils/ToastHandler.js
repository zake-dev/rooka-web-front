import store from '@/store'

export const showToast = toastMessage =>
  store.dispatch('SHOW_TOAST', toastMessage)
