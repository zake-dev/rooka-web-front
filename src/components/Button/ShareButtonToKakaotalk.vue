<template>
  <button class="button" @click="handleShareToKakaotalk">
    <div class="button-icon-wrapper">
      <img class="button-icon-wrapper__icon" :src="KakaotalkIconSvg" />
    </div>
    <span class="button-label font__caption">카카오톡</span>
  </button>
</template>

<script>
import KakaotalkIconSvg from '@/assets/icons/kakaotalk-icon.svg'

export default {
  setup() {
    /* Event Handler */
    const handleShareToKakaotalk = () =>
      // eslint-disable-next-line
      Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '드디어... 입대합니다!',
          description: '드디어... 입대합니다! 다들 인편 쓰러 와주실거죠..?',
          imageUrl:
            'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/acb43e39-3cfc-4e25-9f1f-3a8cf10315f3/%EB%8C%80%EC%A7%80_1-100.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211128T092253Z&X-Amz-Expires=86400&X-Amz-Signature=daa136114146eb79c2f2dfc585a6ff4f8c54e1393486427c8c1b3a86e6e9a65a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%258C%2580%25EC%25A7%2580%25201-100.jpg%22&x-id=GetObject',
          link: {
            mobileWebUrl: 'https://zake-dev.github.io/가나다.1610',
            webUrl: 'https://zake-dev.github.io/가나다.1610',
          },
        },
        buttons: [
          {
            title: '인편 쓰러가기',
            link: {
              mobileWebUrl: 'https://zake-dev.github.io/가나다.1610',
              webUrl: 'https://zake-dev.github.io/가나다.1610',
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
