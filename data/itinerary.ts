export type ItineraryStatus = 'free' | 'paid' | 'food' | 'rest' | 'travel'

export interface ItineraryItem {
  id: string
  time: string
  status: ItineraryStatus
  price?: string
  mapQuery?: string
}

export interface ItineraryDay {
  id: string
  items: ItineraryItem[]
}

export const dayIds = ['fri', 'sat', 'sun', 'mon'] as const

export const itinerary: ItineraryDay[] = [
  {
    id: 'fri',
    items: [
      { id: 'fri-01', time: '10:30', status: 'travel' },
      { id: 'fri-02', time: '11:45–12:30', status: 'rest' },
      { id: 'fri-03', time: '12:30–13:05', status: 'paid', price: '~€3', mapQuery: 'Sé do Porto, Portugal' },
      { id: 'fri-04', time: '13:10–13:45', status: 'paid', price: '~€3', mapQuery: 'Igreja de São Lourenço, Porto, Portugal' },
      { id: 'fri-05', time: '13:45–14:00', status: 'free', mapQuery: 'Miradouro de São Lourenço, Porto, Portugal' },
      { id: 'fri-06', time: '14:10–14:25', status: 'free', mapQuery: 'Miradouro da Vitória, Porto, Portugal' },
      { id: 'fri-07', time: '14:30–14:45', status: 'free', mapQuery: 'Miradouro das Virtudes, Porto, Portugal' },
      { id: 'fri-08', time: '14:50–15:10', status: 'free', mapQuery: 'São Bento Railway Station, Porto, Portugal' },
      { id: 'fri-09', time: '15:10–15:55', status: 'food' },
      { id: 'fri-10', time: '16:00–16:20', status: 'free', mapQuery: 'Igreja da Santíssima Trindade, Porto, Portugal' },
      { id: 'fri-11', time: '16:20–16:35', status: 'free', mapQuery: 'Câmara Municipal do Porto, Portugal' },
      { id: 'fri-12', time: '16:35–17:00', status: 'free', mapQuery: 'Mercado do Bolhão, Porto, Portugal' },
      { id: 'fri-13', time: '17:00–17:20', status: 'free', mapQuery: 'Capela das Almas, Porto, Portugal' },
      { id: 'fri-14', time: '17:20–17:40', status: 'free', mapQuery: 'Igreja de Santo Ildefonso, Porto, Portugal' },
      { id: 'fri-15', time: '17:45–18:10', status: 'paid', price: '~€8', mapQuery: 'Igreja do Carmo, Porto, Portugal' },
      { id: 'fri-16', time: '18:15–18:45', status: 'paid', price: '~€15.95', mapQuery: 'Livraria Lello, Porto, Portugal' },
      { id: 'fri-17', time: '18:50–19:05', status: 'free', mapQuery: 'Torre dos Clérigos, Porto, Portugal' },
      { id: 'fri-18', time: '19:10–19:45', status: 'paid', price: '~€9', mapQuery: 'Igreja de São Francisco, Porto, Portugal' },
      { id: 'fri-19', time: '19:50–20:30', status: 'free', mapQuery: 'Cais da Ribeira, Porto, Portugal' },
      { id: 'fri-20', time: '20:30–20:45', status: 'free', mapQuery: 'Funicular dos Guindais, Porto, Portugal' },
      { id: 'fri-21', time: '20:45+', status: 'food' }
    ]
  },
  {
    id: 'sat',
    items: [
      { id: 'sat-01', time: '08:00–08:45', status: 'food' },
      { id: 'sat-02', time: '09:10', status: 'travel' },
      { id: 'sat-03', time: '10:00–12:00', status: 'paid', mapQuery: 'Serralves, Porto, Portugal' },
      { id: 'sat-04', time: '12:00–12:50', status: 'travel' },
      { id: 'sat-05', time: '13:00–13:45', status: 'food' },
      { id: 'sat-06', time: '13:45–14:15', status: 'free', mapQuery: 'Banco de Materiais, Porto, Portugal' },
      { id: 'sat-07', time: '14:20–15:00', status: 'paid', price: '~€10', mapQuery: 'Torre dos Clérigos, Porto, Portugal' },
      { id: 'sat-08', time: '15:10–15:45', status: 'paid', price: '~€14', mapQuery: 'Palácio da Bolsa, Porto, Portugal' },
      { id: 'sat-09', time: '15:50–16:20', status: 'free', mapQuery: 'Ribeira, Porto, Portugal' },
      { id: 'sat-10', time: '16:20–16:40', status: 'free', mapQuery: 'Ponte Dom Luís I, Porto, Portugal' },
      { id: 'sat-11', time: '16:40–17:00', status: 'free', mapQuery: 'Cais de Gaia, Vila Nova de Gaia, Portugal' },
      { id: 'sat-12', time: '17:00–17:15', status: 'free', mapQuery: 'O Coelho Bordalo II, Vila Nova de Gaia, Portugal' },
      { id: 'sat-13', time: '17:20–18:30', status: 'paid', mapQuery: 'Caves Cálem, Vila Nova de Gaia, Portugal' },
      { id: 'sat-14', time: '18:30–18:45', status: 'paid', mapQuery: 'Teleférico de Gaia, Portugal' },
      { id: 'sat-15', time: '18:45–19:20', status: 'free', mapQuery: 'Mosteiro da Serra do Pilar, Portugal' },
      { id: 'sat-16', time: '19:20–19:45', status: 'free', mapQuery: 'Ponte Dom Luís I, Porto, Portugal' },
      { id: 'sat-17', time: '19:45–20:15', status: 'rest' },
      { id: 'sat-18', time: '20:30+', status: 'food' }
    ]
  },
  {
    id: 'sun',
    items: [
      { id: 'sun-01', time: '08:30–09:15', status: 'food' },
      { id: 'sun-02', time: '09:30–10:00', status: 'travel' },
      { id: 'sun-03', time: '10:00–11:30', status: 'free', mapQuery: 'Jardins do Palácio de Cristal, Porto, Portugal' },
      { id: 'sun-04', time: '11:30–12:15', status: 'free', mapQuery: 'Jardim dos Sentimentos, Porto, Portugal' },
      { id: 'sun-05', time: '12:15–13:00', status: 'travel' },
      { id: 'sun-06', time: '13:00–14:00', status: 'food' },
      { id: 'sun-07', time: '14:00–16:00', status: 'rest' },
      { id: 'sun-08', time: '16:15–16:45', status: 'food' },
      { id: 'sun-09', time: '17:30–18:00', status: 'travel', mapQuery: 'Estádio do Dragão, Porto, Portugal' },
      { id: 'sun-10', time: '~19:00', status: 'travel' },
      { id: 'sun-11', time: '20:30–~22:30', status: 'paid', mapQuery: 'Estádio do Dragão, Porto, Portugal' },
      { id: 'sun-12', time: '', status: 'travel' },
      { id: 'sun-13', time: '~01:30–02:00', status: 'travel' }
    ]
  },
  {
    id: 'mon',
    items: [{ id: 'mon-01', time: '04:00', status: 'travel' }]
  }
]
