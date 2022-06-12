const SECOND_IN_MILLISECOND = 1000
const MINUTE_IN_SECOND = 60
const HOUR_IN_MINUTE = 60
const DAY_IN_HOUR = 24

export const getDiffInDays = (date1, date2) => {
  const time1 =
    date1 instanceof Date ? date1.getTime() : new Date(date1).getTime()
  const time2 =
    date2 instanceof Date ? date2.getTime() : new Date(date2).getTime()
  return Math.ceil(
    Math.abs(
      (time1 - time2) /
        (DAY_IN_HOUR *
          HOUR_IN_MINUTE *
          MINUTE_IN_SECOND *
          SECOND_IN_MILLISECOND),
    ),
  )
}

export const getDiffInDayHourMinSec = (date1, date2) => {
  const time1 =
    date1 instanceof Date ? date1.getTime() : new Date(date1).getTime()
  const time2 =
    date2 instanceof Date ? date2.getTime() : new Date(date2).getTime()
  const diff = Math.abs(time1 - time2,)

  const days = Math.floor(diff / (DAY_IN_HOUR * HOUR_IN_MINUTE * MINUTE_IN_SECOND * SECOND_IN_MILLISECOND))
  const hours = Math.floor(diff / (HOUR_IN_MINUTE * MINUTE_IN_SECOND * SECOND_IN_MILLISECOND)) % DAY_IN_HOUR
  const minutes = Math.floor(diff / (MINUTE_IN_SECOND * SECOND_IN_MILLISECOND)) % HOUR_IN_MINUTE
  const seconds = Math.floor(diff / SECOND_IN_MILLISECOND) % MINUTE_IN_SECOND
  
  return { days, hours, minutes, seconds }
}
