export type ItineraryStatus = 'free' | 'paid' | 'food' | 'rest' | 'travel'

export interface ItineraryItem {
  id: string
  time: string
  title: string
  note?: string
  status: ItineraryStatus
  price?: string
  mapQuery?: string
}

export interface ItineraryDay {
  id: string
  label: string
  date: string
  theme: string
  items: ItineraryItem[]
}

export const itinerary: ItineraryDay[] = [
  {
    id: 'fri',
    label: 'Friday',
    date: '18 Sep',
    theme: 'Historic centre — the most intense day, wear comfortable shoes',
    items: [
      { id: 'fri-01', time: '10:30', title: 'Arrival in Porto', note: 'Bags + transfer into the centre', status: 'travel' },
      { id: 'fri-02', time: '11:45–12:30', title: 'Apartment — drop bags', note: 'Quick rest before heading out', status: 'rest' },
      { id: 'fri-03', time: '12:30–13:05', title: 'Sé Cathedral', status: 'paid', price: '~€3', mapQuery: 'Sé do Porto, Portugal' },
      { id: 'fri-04', time: '13:10–13:45', title: 'Igreja de São Lourenço / MASA', note: 'Friday is the best day for this', status: 'paid', price: '~€3', mapQuery: 'Igreja de São Lourenço, Porto, Portugal' },
      { id: 'fri-05', time: '13:45–14:00', title: 'Miradouro da Igreja de São Lourenço', status: 'free', mapQuery: 'Miradouro de São Lourenço, Porto, Portugal' },
      { id: 'fri-06', time: '14:10–14:25', title: 'Miradouro da Vitória', status: 'free', mapQuery: 'Miradouro da Vitória, Porto, Portugal' },
      { id: 'fri-07', time: '14:30–14:45', title: 'Miradouro das Virtudes', status: 'free', mapQuery: 'Miradouro das Virtudes, Porto, Portugal' },
      { id: 'fri-08', time: '14:50–15:10', title: 'São Bento Station', note: 'Famous azulejo tile murals', status: 'free', mapQuery: 'São Bento Railway Station, Porto, Portugal' },
      { id: 'fri-09', time: '15:10–15:55', title: 'Lunch', note: "Don't linger too long", status: 'food' },
      { id: 'fri-10', time: '16:00–16:20', title: 'Igreja da Santíssima Trindade', note: 'Friday open until 17:00', status: 'free', mapQuery: 'Igreja da Santíssima Trindade, Porto, Portugal' },
      { id: 'fri-11', time: '16:20–16:35', title: 'Câmara Municipal do Porto', note: 'Essentially viewed from outside', status: 'free', mapQuery: 'Câmara Municipal do Porto, Portugal' },
      { id: 'fri-12', time: '16:35–17:00', title: 'Mercado do Bolhão', note: 'Free entry, Fri 08:00–20:00', status: 'free', mapQuery: 'Mercado do Bolhão, Porto, Portugal' },
      { id: 'fri-13', time: '17:00–17:20', title: 'Capela das Almas', note: 'Free, Fri ~07:30–19:00', status: 'free', mapQuery: 'Capela das Almas, Porto, Portugal' },
      { id: 'fri-14', time: '17:20–17:40', title: 'Igreja de Santo Ildefonso', status: 'free', mapQuery: 'Igreja de Santo Ildefonso, Porto, Portugal' },
      { id: 'fri-15', time: '17:45–18:10', title: 'Igreja do Carmo + square', status: 'paid', price: '~€8', mapQuery: 'Igreja do Carmo, Porto, Portugal' },
      { id: 'fri-16', time: '18:15–18:45', title: 'Livraria Lello', note: 'Paid, book an entry slot in advance', status: 'paid', price: '~€15.95', mapQuery: 'Livraria Lello, Porto, Portugal' },
      { id: 'fri-17', time: '18:50–19:05', title: 'Torre dos Clérigos — exterior only', note: 'Climbing the tower is on Saturday', status: 'free', mapQuery: 'Torre dos Clérigos, Porto, Portugal' },
      { id: 'fri-18', time: '19:10–19:45', title: 'Igreja e Museu de São Francisco', status: 'paid', price: '~€9', mapQuery: 'Igreja de São Francisco, Porto, Portugal' },
      { id: 'fri-19', time: '19:50–20:30', title: 'Cais da Ribeira', note: 'The postcard stretch', status: 'free', mapQuery: 'Cais da Ribeira, Porto, Portugal' },
      { id: 'fri-20', time: '20:30–20:45', title: 'Elevador da Ribeira / funicular', note: 'Used as a shortcut back up', status: 'free', mapQuery: 'Funicular dos Guindais, Porto, Portugal' },
      { id: 'fri-21', time: '20:45+', title: 'Dinner + back to the apartment', note: 'End of sightseeing for the day', status: 'food' }
    ]
  },
  {
    id: 'sat',
    label: 'Saturday',
    date: '19 Sep',
    theme: 'Serralves + Clérigos + Bolsa + Gaia — deliberately slow start',
    items: [
      { id: 'sat-01', time: '08:00–08:45', title: 'Breakfast', note: 'At the apartment', status: 'food' },
      { id: 'sat-02', time: '09:10', title: 'Depart for Serralves', note: 'On foot, ~45–50 min', status: 'travel' },
      { id: 'sat-03', time: '10:00–12:00', title: 'Serralves', note: 'Relaxed block: park + museum / Treetop Walk', status: 'paid', mapQuery: 'Serralves, Porto, Portugal' },
      { id: 'sat-04', time: '12:00–12:50', title: 'Walk back', note: 'No extra stops', status: 'travel' },
      { id: 'sat-05', time: '13:00–13:45', title: 'Lunch', note: 'Good moment for a francesinha', status: 'food' },
      { id: 'sat-06', time: '13:45–14:15', title: 'Banco de Materiais', note: 'Free, 10:00–17:30', status: 'free', mapQuery: 'Banco de Materiais, Porto, Portugal' },
      { id: 'sat-07', time: '14:20–15:00', title: 'Torre dos Clérigos + Museum', note: 'Book ahead', status: 'paid', price: '~€10', mapQuery: 'Torre dos Clérigos, Porto, Portugal' },
      { id: 'sat-08', time: '15:10–15:45', title: 'Palácio da Bolsa', note: 'Guided tour is mandatory', status: 'paid', price: '~€14', mapQuery: 'Palácio da Bolsa, Porto, Portugal' },
      { id: 'sat-09', time: '15:50–16:20', title: 'Ribeira', status: 'free', mapQuery: 'Ribeira, Porto, Portugal' },
      { id: 'sat-10', time: '16:20–16:40', title: 'Ponte Dom Luís I — lower deck', status: 'free', mapQuery: 'Ponte Dom Luís I, Porto, Portugal' },
      { id: 'sat-11', time: '16:40–17:00', title: 'Cais de Gaia', status: 'free', mapQuery: 'Cais de Gaia, Vila Nova de Gaia, Portugal' },
      { id: 'sat-12', time: '17:00–17:15', title: 'O Coelho — Bordalo II', note: 'Outdoor street art', status: 'free', mapQuery: 'O Coelho Bordalo II, Vila Nova de Gaia, Portugal' },
      { id: 'sat-13', time: '17:20–18:30', title: 'Wine cellar — e.g. Caves Cálem', note: 'Tour + tasting, book ahead', status: 'paid', mapQuery: 'Caves Cálem, Vila Nova de Gaia, Portugal' },
      { id: 'sat-14', time: '18:30–18:45', title: 'Teleférico de Gaia', note: 'Paid, 10:00–20:00 this time of year', status: 'paid', mapQuery: 'Teleférico de Gaia, Portugal' },
      { id: 'sat-15', time: '18:45–19:20', title: 'Serra do Pilar + viewpoint', note: 'Monastery interior currently closed', status: 'free', mapQuery: 'Mosteiro da Serra do Pilar, Portugal' },
      { id: 'sat-16', time: '19:20–19:45', title: 'Ponte Dom Luís I — upper deck', status: 'free', mapQuery: 'Ponte Dom Luís I, Porto, Portugal' },
      { id: 'sat-17', time: '19:45–20:15', title: 'Back to the apartment', note: 'Rest', status: 'rest' },
      { id: 'sat-18', time: '20:30+', title: 'Dinner', note: 'Light', status: 'food' }
    ]
  },
  {
    id: 'sun',
    label: 'Sunday',
    date: '20 Sep',
    theme: 'Light day + FC Porto – Benfica, 20:30',
    items: [
      { id: 'sun-01', time: '08:30–09:15', title: 'Breakfast', note: 'At the apartment', status: 'food' },
      { id: 'sun-02', time: '09:30–10:00', title: 'Walk to Jardins do Palácio de Cristal', status: 'travel' },
      { id: 'sun-03', time: '10:00–11:30', title: 'Jardins do Palácio de Cristal', note: 'Free, 08:00–21:00 in September', status: 'free', mapQuery: 'Jardins do Palácio de Cristal, Porto, Portugal' },
      { id: 'sun-04', time: '11:30–12:15', title: 'Jardim dos Sentimentos', note: 'Quiet part of the gardens', status: 'free', mapQuery: 'Jardim dos Sentimentos, Porto, Portugal' },
      { id: 'sun-05', time: '12:15–13:00', title: 'Walk back', note: 'No more attractions', status: 'travel' },
      { id: 'sun-06', time: '13:00–14:00', title: 'Lunch', note: 'Light to medium', status: 'food' },
      { id: 'sun-07', time: '14:00–16:00', title: 'Rest', note: 'Deliberate buffer before the match', status: 'rest' },
      { id: 'sun-08', time: '16:15–16:45', title: 'Early dinner', note: 'Not right before entering the stadium', status: 'food' },
      { id: 'sun-09', time: '17:30–18:00', title: 'Walk to Estádio do Dragão', note: 'Better to leave early', status: 'travel', mapQuery: 'Estádio do Dragão, Porto, Portugal' },
      { id: 'sun-10', time: '~19:00', title: 'At the stadium', note: 'Buffer for entry and security checks', status: 'travel' },
      { id: 'sun-11', time: '20:30–~22:30', title: 'FC Porto – Benfica', status: 'paid', mapQuery: 'Estádio do Dragão, Porto, Portugal' },
      { id: 'sun-12', time: 'After the match', title: 'Head back, collect belongings', note: 'No more attractions', status: 'travel' },
      { id: 'sun-13', time: '~01:30–02:00', title: 'Taxi/Uber to the airport', note: 'Flight at 04:00', status: 'travel' }
    ]
  },
  {
    id: 'mon',
    label: 'Monday',
    date: '21 Sep',
    theme: 'Departure',
    items: [
      { id: 'mon-01', time: '04:00', title: 'Flight home', note: 'Aim to be at the airport by ~02:30. No sightseeing planned.', status: 'travel' }
    ]
  }
]
