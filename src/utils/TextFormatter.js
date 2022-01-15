export const toKoreanDateString = dateString => {
  const date = dateString instanceof Date ? dateString : new Date(dateString)
  const [year, month, day] = date.toLocaleDateString().split('.')
  return `${year.trim()}년 ${month.trim()}월 ${day.trim()}일`
}

export const toKoreanMilitaryType = militaryType => {
  switch (militaryType) {
    case 'ARMY':
      return '육군'
    case 'AF':
      return '공군'
  }
}
