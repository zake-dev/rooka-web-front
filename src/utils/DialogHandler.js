import store from '@/store'

export const openModal = (modalContentName) => store.dispatch('OPEN_MODAL', modalContentName)

export const closeModal = () => store.dispatch('CLOSE_MODAL')