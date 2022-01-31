import store from '@/store'

export const showToast = toastMessage =>
  store.dispatch('SHOW_TOAST', toastMessage)

export const showWarningToast = toastMessage =>
  store.dispatch('SHOW_WARNING_TOAST', toastMessage)
