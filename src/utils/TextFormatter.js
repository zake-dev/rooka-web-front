export const toKoreanDateString = date => {
  date =
    date instanceof Date
      ? date
      : date instanceof Object
      ? new Date(Object.values(date))
      : new Date(date)
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

const shortenWithEllipsis = maxCount => text =>
  text.length > maxCount ? text.slice(0, maxCount - 1) + '...' : text

export const shortenName = shortenWithEllipsis(6)
