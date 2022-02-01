<template>
  <div class="content">
    <div class="accordion">
      <div class="accordion-title" @click="isExpanded = !isExpanded">
        <input
          class="accordion-title__checkbox"
          type="checkbox"
          v-model="isChecked"
          @click.stop
        />
        <img
          v-show="isChecked"
          class="accordion-title__checkbox-icon"
          :src="CheckboxCheckedIconPng"
        />
        <span class="accordion-title__text">
          [필수] 개인정보 수집 및 이용 동의
        </span>
        <img
          class="accordion-title__icon"
          :class="{ 'accordion-title__icon--open': isExpanded }"
          :src="DropdownArrowIconPng"
        />
        <div class="accordion-title__border"></div>
      </div>

      <div
        class="accordion-content"
        :class="{ 'accordion-content--open': isExpanded }"
      >
        <TermsAndConditionsContent />
      </div>
    </div>

    <p class="content__caption">
      본인은 위의 동의서 내용을 충분히 숙지하였으며, 개인정보 수집, 이용,
      제공하는 것에 동의합니다.
    </p>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

import CheckboxCheckedIconPng from '@/assets/icons/checkbox-checked-icon.png'
import DropdownArrowIconPng from '@/assets/icons/dropdown-arrow-icon.png'
import TermsAndConditionsContent from './TermsAndConditionsContent.vue'

export default {
  components: {
    TermsAndConditionsContent,
  },
  props: {
    agreed: Boolean,
  },
  emits: ['toggleAgreed'],
  setup(props, { emit }) {
    /* Local State */
    const isChecked = computed({
      get: () => props.agreed,
      set: value => emit('toggleAgreed', value),
    })
    const isExpanded = ref(false)

    return {
      /* Assets */
      CheckboxCheckedIconPng,
      DropdownArrowIconPng,
      /* Variables */
      isChecked,
      isExpanded,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/global';
@import '@/scss/_variables';

.content {
  &__caption {
    @extend .font__caption;
    margin-top: 24px;
    padding: 0 32px;
    color: $gray4;
  }
}
.accordion {
  display: flex;
  flex-direction: column;

  &-title {
    height: 56px;
    padding: 18px 24px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    &__checkbox {
      height: 20px;
      width: 20px;
      border: 2px solid $gray2;
      border-radius: 50%;

      &:checked {
        border: none;
        z-index: 10;
      }
      &-icon {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 18px;
        left: 24px;
        z-index: 1;
      }
    }
    &__text {
      @extend .font__content-text;
      color: $gray5;
    }
    &__icon {
      position: absolute;
      top: 22px;
      right: 32px;
      height: 12px;
      width: 12px;

      &--open {
        transform: rotate(180deg);
      }
    }
    &__border {
      position: absolute;
      right: 0;
      bottom: 0;
      width: calc(100% - 24px);
      border-bottom: 1px solid $gray2;
    }
  }
  &-content {
    background-color: $gray1;
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.5s ease;

    &--open {
      max-height: 240px;
    }
  }
}
</style>
