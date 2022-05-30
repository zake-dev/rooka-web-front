const stringToDate = str => {
  const [year, month, date] = str.split('-').map(n => parseInt(n))
  return new Date(year, month - 1, date, 0, 0, 0)
}

const objectToDate = obj => {
  const { year, month, date } = obj
  return new Date(year, month - 1, date, 0, 0, 0)
}

export const toKoreanDateString = date => {
  date =
    date instanceof Date
      ? date
      : date instanceof Object
      ? objectToDate(date)
      : stringToDate(date)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}년 ${month}월 ${day}일`
}

export const toCommaNumber = number =>
  new String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const shortenWithEllipsis = maxCount => text =>
  text.length > maxCount ? text.slice(0, maxCount - 1) + '...' : text

export const shortenName = shortenWithEllipsis(6)
