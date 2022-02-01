export const toKoreanDateString = date => {
  date = date instanceof Date ? date : new Date(date)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}년 ${month}월 ${day}일`
}

export const toKoreanMilitaryType = militaryType => {
  switch (militaryType) {
    case 'ARMY':
      return '육군'
    case 'AF':
      return '공군'
  }
}

export const toCommaNumber = number =>
  new String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
