/* Private Functions */
const stringToDate = str => {
  // if str is datetime string, parse it
  if (str.includes('T')) {
    const [date, time] = str.split('T')
    const [year, month, day] = date.split('-').map(n => parseInt(n))
    const [hour, minute, second] = time.split(':').map(n => parseInt(n))
    return new Date(year, month - 1, day, hour, minute, second)
  }
  const [year, month, day] = str.split('-').map(n => parseInt(n))
  return new Date(year, month - 1, day, 0, 0, 0)
}

const objectToDate = obj => {
  const { year, month, date } = obj
  return new Date(year, month - 1, date, 0, 0, 0)
}

const parseDate = date =>
  date instanceof Date
    ? date
    : date instanceof Object
    ? objectToDate(date)
    : stringToDate(date)

const padZero = number => number.toString().padStart(2, '0')

const shortenWithEllipsis = maxCount => text =>
  text.length > maxCount ? text.slice(0, maxCount - 1) + '...' : text

/* Public Functions */
export const toKoreanDateString = date => {
  date = parseDate(date)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}년 ${month}월 ${day}일`
}

export const toKoreanDateTimeString = date => {
  date = parseDate(date)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = padZero(date.getHours())
  const minute = padZero(date.getMinutes())
  return `${year}년 ${month}월 ${day}일 ${hour}:${minute}`
}

export const toInputDateString = date => {
  date = parseDate(date)
  const year = padZero(date.getFullYear())
  const month = padZero(date.getMonth() + 1)
  const day = padZero(date.getDate())
  return `${year}-${month}-${day}`
}

export const toCommaNumber = number =>
  new String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const shortenName = shortenWithEllipsis(6)

export const toTimeString = ({ days, hours, minutes }) => {
  const daysString = days ? `${days}일 ` : ''
  const hoursString = hours ? `${hours}시간 ` : ''
  const minutesString = minutes ? `${minutes}분 ` : ''
  return `${daysString}${hoursString}${minutesString}`
}
