import store from '@/store'

export const showToast = (toastContentText, toastContentEmoji) =>
  store.dispatch('SHOW_TOAST', {
    text: toastContentText,
    emoji: toastContentEmoji,
  })
