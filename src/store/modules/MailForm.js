import * as MailApi from '@/api/MailApi'
import router from '@/router'
import { showToast, showWarningToast, removeToast } from '@/utils/ToastHandler'

const MAX_CONTENT_LENGTH = 10000
const INVALID_FIELD_MESSAGE = '입력하지 않은 정보가 있네요!😳'
const TOO_LONG_CONTENT_MESSAGE = '편지 내용이 너무 길어요!😨'

const module = {
  namespaced: true,
  state: {
    mail: {
      author: '',
      relation: '',
      address1: '',
      address2: '',
      postCode: '',
      title: '',
      content: '',
      password: '',
      key: '',
      imageUUID: '',
    },
    validation: {
      author: true,
      relation: true,
      address1: true,
      address2: true,
      postCode: true,
      title: true,
      content: true,
    },
    isBeingSent: false,
    isConfirmedToLeave: false,
    leavingRoute: '',
  },
  getters: {
    isValidForm: state =>
      state.mail.author !== '' &&
      state.mail.relation !== '' &&
      state.mail.address1 !== '' &&
      state.mail.address2 !== '' &&
      state.mail.postCode !== '' &&
      state.mail.title !== '' &&
      state.mail.content !== '',
    isSendable: (state, getters) => getters.isValidForm && !state.isBeingSend,
    maxContentLength: () => MAX_CONTENT_LENGTH,
  },
  mutations: {
    SET_AUTHOR(state, author) {
      state.mail.author = author
    },
    SET_RELATION(state, relation) {
      state.mail.relation = relation
    },
    SET_ADDRESS1(state, address1) {
      state.mail.address1 = address1
    },
    SET_ADDRESS2(state, address2) {
      state.mail.address2 = address2
    },
    SET_POST_CODE(state, postCode) {
      state.mail.postCode = postCode
    },
    SET_TITLE(state, title) {
      state.mail.title = title
    },
    SET_CONTENT(state, content) {
      state.mail.content = content
    },
    SET_PASSWORD(state, password) {
      state.mail.password = password
    },
    SET_KEY(state, key) {
      state.mail.key = key
    },
    SET_IMAGE_UUID(state, imageUUID) {
      state.mail.imageUUID = imageUUID
    },
    SET_IS_BEING_SENT(state, isBeingSent) {
      state.isBeingSent = isBeingSent
    },
    SET_IS_CONFIRMED_TO_LEAVE(state, isConfirmedToLeave) {
      state.isConfirmedToLeave = isConfirmedToLeave
    },
    SET_LEAVING_ROUTE(state, route) {
      state.leavingRoute = route
    },
    SET_AUTHOR_VALIDATION(state, isAuthorValid) {
      state.validation.author = isAuthorValid
    },
    SET_RELATION_VALIDATION(state, isRelationValid) {
      state.validation.relation = isRelationValid
    },
    SET_ADDRESS1_VALIDATION(state, isAddress1Valid) {
      state.validation.address1 = isAddress1Valid
    },
    SET_ADDRESS2_VALIDATION(state, isAddress2Valid) {
      state.validation.address2 = isAddress2Valid
    },
    SET_POST_CODE_VALIDATION(state, isPostCodeValid) {
      state.validation.postCode = isPostCodeValid
    },
    SET_TITLE_VALIDATION(state, isTitleValid) {
      state.validation.title = isTitleValid
    },
    SET_CONTENT_VALIDATION(state, isContentValid) {
      state.validation.content = isContentValid
    },
    RESET(state) {
      Object.assign(state, {
        mail: {
          author: '',
          relation: '',
          address1: '',
          address2: '',
          postCode: '',
          title: '',
          content: '',
          password: '',
          key: '',
        },
        validation: {
          author: true,
          relation: true,
          address1: true,
          address2: true,
          postCode: true,
          title: true,
          content: true,
        },
        isBeingSent: false,
        isConfirmedToLeave: false,
        leavingRoute: '',
      })
    },
  },
  actions: {
    async SEND_MAIL({ commit, state }) {
      commit('SET_IS_BEING_SENT', true)
      try {
        await MailApi.postMail(state.mail)
        await router.push(`/${state.mail.key}/mail`)
        showToast('편지가 전송됐어요!🎉')
      } catch (e) {
        console.dir(e.response)
        showWarningToast('헉... 전송에 실패했어요😱')
      } finally {
        commit('SET_IS_BEING_SENT', false)
      }
    },
    UPDATE_AUTHOR({ commit }, author) {
      commit('SET_AUTHOR', author)
    },
    UPDATE_RELATION({ commit }, relation) {
      commit('SET_RELATION', relation)
    },
    UPDATE_ADDRESS1({ commit }, address1) {
      commit('SET_ADDRESS1', address1)
    },
    UPDATE_ADDRESS2({ commit }, address2) {
      commit('SET_ADDRESS2', address2)
    },
    UPDATE_POST_CODE({ commit }, postCode) {
      commit('SET_POST_CODE', postCode)
    },
    UPDATE_TITLE({ commit }, title) {
      commit('SET_TITLE', title)
    },
    UPDATE_CONTENT({ commit }, content) {
      commit('SET_CONTENT', content)
    },
    UPDATE_PASSWORD({ commit }, password) {
      commit('SET_PASSWORD', password)
    },
    UPDATE_KEY({ commit }, key) {
      commit('SET_KEY', key)
    },
    UPDATE_IMAGE_UUID({ commit }, imageUUID) {
      commit('SET_IMAGE_UUID', imageUUID)
    },
    UPDATE_IS_CONFIRMED_TO_LEAVE({ commit }, isConfirmedToLeave) {
      commit('SET_IS_CONFIRMED_TO_LEAVE', isConfirmedToLeave)
    },
    UPDATE_LEAVING_ROUTE({ commit }, route) {
      commit('SET_LEAVING_ROUTE', route)
    },
    UPDATE_AUTHOR_VALIDATION({ commit, state }) {
      const isValid = state.mail.author !== ''
      commit('SET_AUTHOR_VALIDATION', isValid)
      return isValid
    },
    UPDATE_RELATION_VALIDATION({ commit, state }) {
      const isValid = state.mail.relation !== ''
      commit('SET_RELATION_VALIDATION', isValid)
      return isValid
    },
    UPDATE_ADDRESS1_VALIDATION({ commit, state, rootState }) {
      const isArmySoldier = rootState.mailBox.soldier.militaryType === 'ARMY'
      const isValid = isArmySoldier || state.mail.address1 !== ''
      commit('SET_ADDRESS1_VALIDATION', isValid)
      return isValid
    },
    UPDATE_ADDRESS2_VALIDATION({ commit, state, rootState }) {
      const isArmySoldier = rootState.mailBox.soldier.militaryType === 'ARMY'
      const isValid =
        state.mail.address2 !== '' ||
        (isArmySoldier && state.mail.address1 === '')
      commit('SET_ADDRESS2_VALIDATION', isValid)
      return isValid
    },
    UPDATE_POST_CODE_VALIDATION({ commit, state, rootState }) {
      const isArmySoldier = rootState.mailBox.soldier.militaryType === 'ARMY'
      const isValid = isArmySoldier || state.mail.postCode !== ''
      commit('SET_POST_CODE_VALIDATION', isValid)
      return isValid
    },
    UPDATE_TITLE_VALIDATION({ commit, state }) {
      const isValid = state.mail.title !== ''
      commit('SET_TITLE_VALIDATION', isValid)
      return isValid
    },
    UPDATE_CONTENT_VALIDATION({ commit, state }) {
      const isValid = state.mail.content !== ''
      commit('SET_CONTENT_VALIDATION', isValid)
      return isValid
    },
    async UPDATE_ALL_VALIDATION({ state, dispatch }) {
      const validations = await Promise.all([
        dispatch('UPDATE_AUTHOR_VALIDATION'),
        dispatch('UPDATE_RELATION_VALIDATION'),
        dispatch('UPDATE_ADDRESS1_VALIDATION'),
        dispatch('UPDATE_ADDRESS2_VALIDATION'),
        dispatch('UPDATE_POST_CODE_VALIDATION'),
        dispatch('UPDATE_TITLE_VALIDATION'),
        dispatch('UPDATE_CONTENT_VALIDATION'),
      ])
      const isAllValid = validations.every(v => v)
      if (!isAllValid) showWarningToast(INVALID_FIELD_MESSAGE)
      const isContentLengthValid =
        state.mail.content.length <= MAX_CONTENT_LENGTH
      if (!isContentLengthValid) showWarningToast(TOO_LONG_CONTENT_MESSAGE)
      return isAllValid && isContentLengthValid
    },
    RESET_VALIDATION({ commit }, fieldName) {
      removeToast(TOO_LONG_CONTENT_MESSAGE)
      removeToast(INVALID_FIELD_MESSAGE)
      commit(`SET_${fieldName.toUpperCase()}_VALIDATION`, true)
    },
    RESET_ALL_VALIDATION({ commit }) {
      removeToast(TOO_LONG_CONTENT_MESSAGE)
      removeToast(INVALID_FIELD_MESSAGE)
      commit('SET_AUTHOR_VALIDATION', true)
      commit('SET_RELATION_VALIDATION', true)
      commit('SET_ADDRESS1_VALIDATION', true)
      commit('SET_ADDRESS2_VALIDATION', true)
      commit('SET_POST_CODE_VALIDATION', true)
      commit('SET_TITLE_VALIDATION', true)
      commit('SET_CONTENT_VALIDATION', true)
    },
    RESET({ commit }) {
      commit('RESET')
    },
  },
}

export default module
