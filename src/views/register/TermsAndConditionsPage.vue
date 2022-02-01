<template>
  <div class="page-wrapper">
    <p class="page-title font__semi-title">
      인편함 개설을 위해<br />
      약관에 동의해 주세요!
    </p>

    <TermsAndConditionsAccordion
      :agreed="agreed"
      @toggle-agreed="agreed = !agreed"
    />

    <div class="action-container">
      <BaseButton
        class="button-primary"
        :disabled="!agreed"
        @click="handleCreateLink"
      >
        확인
      </BaseButton>

      <a
        class="action-container__link font__caption"
        @click="handleHistoryBack"
      >
        이전 단계
      </a>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import TermsAndConditionsAccordion from '@/components/TermsAndConditions/TermsAndConditionsAccordion.vue'
import BaseButton from '@/components/Button/BaseButton.vue'

export default {
  components: {
    TermsAndConditionsAccordion,
    BaseButton,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const key = computed(() => store.state.registerForm.key)

    /* Router */
    const router = useRouter()

    /* Local State */
    const agreed = ref(false)

    /* Event Handler */
    const handleCreateLink = async () => {
      if (!key.value) await store.dispatch('registerForm/SUBMIT_FORM')
      router.push({ name: 'RegisterResult' })
    }
    const handleHistoryBack = () => history.back()

    return {
      /* Variables */
      agreed,
      /* Functions */
      handleCreateLink,
      handleHistoryBack,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.page-title {
  padding: 32px;
  margin-bottom: 8px;
}
.action-container {
  padding: 32px 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__link {
    margin-top: 24px;
    width: fit-content;
    text-decoration: none;
    color: $gray4;
    border-bottom: 1px solid $gray4;
  }
}
</style>
