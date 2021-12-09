<template>
  <div class="card-wrapper">
    <!-- 이미지로 렌더될 html -->
    <div id="card-html" class="card">
      <div class="card-content">
        <div class="card-content-title">
          <span class="card-content-title__text"
            >{{ soldier.name }} 훈련병에게</span
          >
          <span
            class="card-content-title__text card-content-title__text--accent"
            >인편을 써주세요
            <img class="card-content__image" :src="LetterBoxPng" />
          </span>
        </div>

        <div class="detail">
          <div class="detail-row">
            <span class="detail-row__label">군종</span>
            <span class="detail-row__text">{{
              toKoreanMilitaryType(soldier.militaryType)
            }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-row__label">입대일</span>
            <span class="detail-row__text">{{
              toKoreanDateString(soldier.enterDate)
            }}</span>
          </div>
          <div v-if="soldier.militaryType === 'ARMY'" class="detail-row">
            <span class="detail-row__label">부대</span>
            <span class="detail-row__text">{{
              soldier.trainingCenterName
            }}</span>
          </div>
          <div v-if="soldier.militaryType === 'AF'" class="detail-row">
            <span class="detail-row__label">기수</span>
            <span class="detail-row__text">{{ soldier.kisu }}기</span>
          </div>
        </div>
      </div>

      <div class="card-footer">
        <TheLinkChip>{{ linkKey }}</TheLinkChip>
        <LogoImage class="logo-stamp" is-stamp />
      </div>
    </div>

    <!-- 이미지 출력물 -->
    <img id="card-image" />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import html2canvas from 'html2canvas'

import { toKoreanDateString, toKoreanMilitaryType } from '@/utils/TextFormatter'

import LetterBoxPng from '@/assets/images/letter-box.png'
import LogoImage from '@/components/LogoImage/LogoImage.vue'
import TheLinkChip from '@/components/Chip/TheLinkChip.vue'

export default {
  components: {
    LogoImage,
    TheLinkChip,
  },
  props: {
    soldier: Object,
    linkKey: String,
  },
  setup() {
    onMounted(async () => {
      const card = document.getElementById('card-html')
      const canvas = await html2canvas(card, {
        width: 1000,
        height: 1000,
        proxy: '/etc/proxy_image',
        onclone: clonedDocument =>
          (clonedDocument.getElementById('card-html').style.display = 'block'),
      })
      const cardImage = document.getElementById('card-image')
      cardImage.src = canvas.toDataURL('image/png')
      cardImage.style.opacity = 1
    })

    return {
      /* Assets */
      LetterBoxPng,
      /* Functions */
      toKoreanDateString,
      toKoreanMilitaryType,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.card-wrapper {
  background-color: $gray1;
  box-shadow: 0px 6px 17px -1px #0000000d;
  border-radius: 7px;
}
.card {
  width: 1000px;
  height: 1000px;
  padding: 64px;
  background-color: $white;

  &-content {
    margin-top: 20px;

    &-title {
      margin: 42px 0 0 8px;
      display: flex;
      flex-direction: column;

      &__text {
        font-family: 'Spoqa Han Sans Neo', sans-serif;
        font-size: 82px;
        font-style: normal;
        font-weight: 700;
        line-height: 113px;
        letter-spacing: 0em;

        &--accent {
          color: $rookaYellow;
        }
      }
    }
    &__image {
      min-width: 81px;
      min-height: 81px;
    }
  }
  .detail {
    margin: 242px 0 56px 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    &-row {
      display: flex;
      flex-direction: row;

      &__label {
        width: 190px;
        font-family: 'Spoqa Han Sans Neo', sans-serif;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 60px;
        letter-spacing: 0em;
      }
      &__text {
        font-family: 'Spoqa Han Sans Neo', sans-serif;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 60px;
        letter-spacing: 0em;
      }
    }
  }
  &-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
}
#card-image {
  opacity: 0;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 7px;
}
</style>
