const stringToDate = str => {
  const [year, month, date] = str.split('-').map(n => parseInt(n))
  return new Date(year, month - 1, date, 0, 0, 0)
}

const stringToDateTime = str => {
  const [datePart, timePart] = str.split('T')
  const [year, month, date] = datePart.split('-').map(n => parseInt(n))
  const [hour, minute, second] = timePart.split(':').map(n => parseInt(n))
  return new Date(year, month - 1, date, hour, minute, second)
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

export const toKoreanDateTimeString = date => {
  date =
    date instanceof Date
      ? date
      : date instanceof Object
      ? objectToDate(date)
      : stringToDateTime(date)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = padZero(date.getHours())
  const minute = padZero(date.getMinutes())
  return `${year}년 ${month}월 ${day}일 ${hour}:${minute}`
}

export const toCommaNumber = number =>
  new String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const shortenWithEllipsis = maxCount => text =>
  text.length > maxCount ? text.slice(0, maxCount - 1) + '...' : text

export const shortenName = shortenWithEllipsis(6)

const padZero = number =>
  ('0' + number).slice(-2)

// days, hour, mins to string
export const toTimeString = ({days, hours, minutes, seconds}) => {
  const daysString = days ? `${days}일 ` : ''
  const hoursString = hours ? `${hours}시간 ` : ''
  const minutesString = minutes ? `${minutes}분 ` : ''
  // const secondsString = seconds ? `${seconds}초 ` : ''
  return `${daysString}${hoursString}${minutesString}`
}