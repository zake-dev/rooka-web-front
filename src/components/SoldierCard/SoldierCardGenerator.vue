<template>
  <div class="card-wrapper">
    <div id="card-html" class="card">
      <!-- html2canvas로 캡쳐될 영역 -->
      <div class="card-content">
        <div class="card-content-title">
          <div class="card-content-title__text">
            {{ shortenName(soldier.name) }} 훈련병에게
          </div>
          <div
            class="card-content-title__text card-content-title__text--accent"
          >
            인편을 써 주세요
            <img class="card-content__image" :src="LetterBoxPng" />
          </div>
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
        <LinkChip>{{ linkKey }}</LinkChip>
        <LogoImage class="logo-stamp" is-stamp />
      </div>
    </div>
    <!-- 실제 출력 이미지 -->
    <SoldierCardImage v-if="uuid" :uuid="uuid" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import html2canvas from 'html2canvas'

import * as FileApi from '@/api/FileApi'
import * as MailBoxApi from '@/api/MailBoxApi'
import {
  toKoreanDateString,
  toKoreanMilitaryType,
  shortenName,
} from '@/utils/TextFormatter'

import LetterBoxPng from '@/assets/images/letter-box.png'
import LogoImage from '@/components/LogoImage/LogoImage.vue'
import LinkChip from '@/components/Chip/LinkChip.vue'
import SoldierCardImage from '@/components/SoldierCard/SoldierCardImage.vue'

export default {
  components: {
    LogoImage,
    LinkChip,
    SoldierCardImage,
  },
  props: {
    soldier: Object,
    linkKey: String,
  },
  setup(props) {
    /* Vuex */
    const store = useStore()

    /* Local State */
    const uuid = ref('')

    onMounted(async () => {
      const card = document.getElementById('card-html')
      const canvas = await html2canvas(card, {
        windowWidth: 1000,
        windowHeight: 1000,
        onclone: clonedDocument => {
          clonedDocument
            .getElementById('viewportMeta')
            .setAttribute('content', 'width=1000')
          clonedDocument.getElementById('card-html').style.display = 'block'
        },
      })
      canvas.toBlob(async blob => {
        const { data } = await FileApi.postImage(blob)
        const linkImageUUID = data.uuid
        uuid.value = linkImageUUID
        MailBoxApi.setLinkImageUUID(props.linkKey, linkImageUUID)
        await store.dispatch(
          'registerForm/UPDATE_LINK_IMAGE_UUID',
          linkImageUUID,
        )
      }, 'image/png')
    })

    return {
      /* Assets */
      LetterBoxPng,
      /* Varaibles */
      uuid,
      /* Functions */
      toKoreanDateString,
      toKoreanMilitaryType,
      shortenName,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.card-wrapper {
  box-shadow: 0px 6px 17px -1px #0000000d;
  border-radius: 7px;
}
.card {
  display: none;
  width: 1000px;
  height: 1000px;
  padding: 64px;
  background-color: $white;

  &-content {
    padding-top: 20px;

    &-title {
      padding: 42px 0 0 8px;
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
    padding: 242px 0 56px 8px;
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
</style>
