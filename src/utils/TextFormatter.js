export const toKoreanDateString = (dateString) => {
	const [year, month, day] = dateString.split('-')
	return `${year}년 ${month}월 ${day}일`
}

export const toKoreanMilitaryType = (militaryType) => {
  switch (militaryType) {
    case "ARMY": return "육군"
    case "AF": return "공군"
  }
}