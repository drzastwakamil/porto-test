const TRIP_DAY_DATES: Record<string, Date> = {
  fri: new Date(2026, 8, 18),
  sat: new Date(2026, 8, 19),
  sun: new Date(2026, 8, 20),
  mon: new Date(2026, 8, 21)
}

const TRIP_DAY_ORDER = ['fri', 'sat', 'sun', 'mon']

export function detectTodayDayId(): string {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  for (const id of TRIP_DAY_ORDER) {
    const date = TRIP_DAY_DATES[id]
    if (today.getFullYear() === date.getFullYear() && today.getMonth() === date.getMonth() && today.getDate() === date.getDate()) {
      return id
    }
  }

  return today < TRIP_DAY_DATES.fri ? 'fri' : 'mon'
}
