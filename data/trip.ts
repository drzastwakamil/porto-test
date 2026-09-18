export interface TripInfo {
  title: string
  accommodation: {
    address: string
    mapQuery: string
  }
  departure: {
    flightTime: string
  }
  match: {
    name: string
    time: string
    venue: string
    mapQuery: string
  }
}

export const trip: TripInfo = {
  title: 'Porto Weekend',
  accommodation: {
    address: 'Rua de Trás 156, Porto, 4050-614',
    mapQuery: 'Rua de Trás 156, Porto, Portugal'
  },
  departure: {
    flightTime: '04:00'
  },
  match: {
    name: 'FC Porto – Benfica',
    time: '20:30',
    venue: 'Estádio do Dragão',
    mapQuery: 'Estádio do Dragão, Porto, Portugal'
  }
}
