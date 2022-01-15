<template>
  <button class="button" @click="handleShareToKakaotalk">
    <div class="button-icon-wrapper">
      <img class="button-icon-wrapper__icon" :src="KakaotalkIconSvg" />
    </div>
    <span class="button-label font__caption">카카오톡</span>
  </button>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import KakaotalkIconSvg from '@/assets/icons/kakaotalk-icon.svg'

export default {
  setup() {
    /* Vuex */
    const store = useStore()
    const key = computed(
      () => store.state.mailBox.key ?? store.state.registerForm.key,
    )
    const linkImageUUID = computed(
      () =>
        store.state.mailBox.linkImageUUID ??
        store.state.registerForm.linkImageUUID,
    )

    /* Event Handler */
    const handleShareToKakaotalk = () =>
      // eslint-disable-next-line
      Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '드디어 입대합니다! 😂',
          description: '드디어 저 입대합니다! 다들 인편 쓰러 와주실거죠? 🙏',
          imageUrl:
            process.env.VUE_APP_ROOKA_API_URL + `/image/${linkImageUUID.value}`,
          link: {
            mobileWebUrl: `${process.env.VUE_APP_ROOKA_URL}/${key.value}`,
            webUrl: `${process.env.VUE_APP_ROOKA_URL}/${key.value}`,
          },
        },
        buttons: [
          {
            title: '인편 쓰러가기',
            link: {
              mobileWebUrl: `${process.env.VUE_APP_ROOKA_URL}/${key.value}`,
              webUrl: `${process.env.VUE_APP_ROOKA_URL}/${key.value}`,
            },
          },
        ],
      })

    return {
      /* Assets */
      KakaotalkIconSvg,
      /* Functions */
      handleShareToKakaotalk,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';

.button {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 8px;

  &:hover {
    background-color: $gray2;
  }

  &-icon-wrapper {
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: $gray1;

    &__icon {
      width: 24px;
      height: 21px;
    }
  }

  &-label {
    color: $gray6;
  }
}
</style>
