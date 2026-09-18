export interface Booking {
  id: string
  mapQuery?: string
}

export const bookings: Booking[] = [
  { id: 'lello', mapQuery: 'Livraria Lello, Porto, Portugal' },
  { id: 'clerigos', mapQuery: 'Torre dos Clérigos, Porto, Portugal' },
  { id: 'bolsa', mapQuery: 'Palácio da Bolsa, Porto, Portugal' },
  { id: 'wine-cellar', mapQuery: 'Caves Cálem, Vila Nova de Gaia, Portugal' },
  { id: 'match-tickets', mapQuery: 'Estádio do Dragão, Porto, Portugal' }
]

export const defaultBookedIds = ['lello', 'clerigos', 'wine-cellar']
