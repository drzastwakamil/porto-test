export interface TripInfo {
  title: string
  dateRange: string
  accommodation: {
    name: string
    address: string
    mapQuery: string
    note: string
  }
  arrival: {
    date: string
    note: string
  }
  departure: {
    date: string
    flightTime: string
    leaveApartmentBy: string
    note: string
  }
  match: {
    name: string
    date: string
    time: string
    venue: string
    mapQuery: string
  }
}

export const trip: TripInfo = {
  title: 'Porto Weekend',
  dateRange: '18–21 September 2026',
  accommodation: {
    name: 'Apartment',
    address: 'Rua de Trás 156, Porto, 4050-614',
    mapQuery: 'Rua de Trás 156, Porto, Portugal',
    note: 'Breakfast every day at the apartment.'
  },
  arrival: {
    date: 'Friday 18 September',
    note: 'Land in Porto around 10:30, bags + transfer into the centre, apartment check-in ~11:45–12:30.'
  },
  departure: {
    date: 'Monday 21 September',
    flightTime: '04:00',
    leaveApartmentBy: '01:30–02:00',
    note: 'Aim to be at the airport by ~02:30. No sightseeing planned after the match on Sunday.'
  },
  match: {
    name: 'FC Porto – Benfica',
    date: 'Sunday 20 September',
    time: '20:30',
    venue: 'Estádio do Dragão',
    mapQuery: 'Estádio do Dragão, Porto, Portugal'
  }
}
