<template>
  <div class="card-wrapper">
    <!-- 이미지로 렌더될 html -->
    <div id="card-html" class="card">
      <div class="card-content">
        <div class="card-content-row mb-3">
          <p class="font__title">{{ soldier.name }} 훈련병</p>
          <img class="card-content__image" :src="MilitaryHelmetPng" />
        </div>

        <div class="detail mt-1">
          <div class="detail-row">
            <span class="detail-row__label font__content-title">생년월일</span>
            <span class="font__content-text">{{
              toKoreanDateString(soldier.birthDate)
            }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-row__label font__content-title">군종</span>
            <span class="font__content-text">{{
              toKoreanMilitaryType(soldier.militaryType)
            }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-row__label font__content-title">입대일</span>
            <span class="font__content-text">{{
              toKoreanDateString(soldier.enterDate)
            }}</span>
          </div>
          <div v-if="soldier.militaryType === 'ARMY'" class="detail-row">
            <span class="detail-row__label font__content-title">부대</span>
            <span class="font__content-text">{{
              soldier.trainingCenterName
            }}</span>
          </div>
          <div v-if="soldier.militaryType === 'AF'" class="detail-row">
            <span class="detail-row__label font__content-title">기수</span>
            <span class="font__content-text">{{ soldier.kisu }}기</span>
          </div>
        </div>
      </div>

      <div class="card-footer">
        <p class="card-footer__text font__caption mb-2">
          하단의 링크에 접속하여 훈련소에 있는<br />
          {{ soldier.name }} 훈련병에게 편지를 써주세요!
        </p>
        <LinkChip :link="`http://rooka.kr/${soldier.key}`" />
      </div>
      <LogoImage class="logo-stamp" />
    </div>

    <!-- 이미지 출력물 -->
    <img id="card-image" />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import html2canvas from 'html2canvas'

import { toKoreanDateString, toKoreanMilitaryType } from '@/utils/TextFormatter'

import MilitaryHelmetPng from '@/assets/images/military-helmet.png'
import LogoImage from '@/components/LogoImage/LogoImage.vue'
import LinkChip from '@/components/Chip/LinkChip.vue'

export default {
  components: {
    LogoImage,
    LinkChip,
  },
  props: {
    soldier: Object,
  },
  setup() {
    onMounted(async () => {
      const card = document.getElementById('card-html')
      const canvas = await html2canvas(card, {
        scale: 2,
        onclone: clonedDocument =>
          (clonedDocument.getElementById('card-html').style.display = 'block'),
      })
      const cardImage = document.getElementById('card-image')
      cardImage.src = canvas.toDataURL('image/png')
      cardImage.style.opacity = 1
    })

    return {
      /* Assets */
      MilitaryHelmetPng,
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
  display: none;
  width: 1000px;
  height: 1000px;
  padding: 20px;
  border-radius: 7px;
  background-color: $white;

  &-content {
    margin-top: 20px;

    &-row {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    &__image {
      width: 34px;
      height: 34px;
      margin-left: 3px;
    }
  }
  &-footer {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &__text {
      color: $gray5;
      text-align: right;
    }
  }
}
.detail {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &-row {
    display: flex;
    flex-direction: row;

    &__label {
      width: 44px;
      margin-right: 12px;
    }
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
