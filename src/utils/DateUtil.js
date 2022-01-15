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
