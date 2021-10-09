<template>
메일함 페이지입니다.<br>
현재 링크주소는 rooka.kr/{{ link }} 입니다.
</template>

<script>
export default {
	setup() {
		return {
			link: decodeURI(location.href).split('/').slice(-1)[0],
		}
	}
}
</script>

<style scoped lang="scss">
</style>