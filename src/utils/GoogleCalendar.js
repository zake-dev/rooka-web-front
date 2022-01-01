export const getCalendarUrl = ({
  title,
  description,
  location,
  startDatetime,
  endDatetime,
}) => {
  const baseUrl = 'https://www.google.com/calendar/render?action=TEMPLATE'
  const titleParam = `text=${title}`
  const descriptionParam = `details=${description.replaceAll(' ', '+')}`
  const locationParam = `location=${location}`
  const datesParam = `dates=${toGoogleDateString(
    startDatetime,
  )}%2F${toGoogleDateString(endDatetime)}`
  return baseUrl.concat(titleParam, descriptionParam, locationParam, datesParam)
}

const toGoogleDateString = date =>
  date.toISOString().replaceAll('-', '').replaceAll(':', '').slice(0, 13) +
  '00Z'
