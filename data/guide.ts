export interface GuideSection {
  id: string
  title: string
  items: string[]
}

export interface Phrase {
  pt: string
  en: string
}

export const guideSections: GuideSection[] = [
  {
    id: 'book-ahead',
    title: 'Book ahead',
    items: [
      'Livraria Lello — reserve a timed entry slot.',
      'Torre dos Clérigos — Saturday, aim for ~14:20–14:30.',
      'Palácio da Bolsa — Saturday, guided tour around ~15:10–15:30.',
      'Wine cellar tasting (e.g. Caves Cálem) — Saturday around 17:20.',
      'FC Porto – Benfica — tickets and entry per the organiser.',
      'Keep a taxi/Uber option ready for the return after the match.'
    ]
  },
  {
    id: 'rules-of-thumb',
    title: 'Trip rules of thumb',
    items: [
      'Friday is the most intense day of walking — comfortable shoes, keep viewpoint stops short.',
      'Saturday deliberately starts slow (10:00–12:00 at Serralves).',
      "Clérigos Tower was moved to Saturday so it isn't rushed on Friday.",
      "The stadium isn't a separate outing — Sunday's plan flows straight into the match.",
      'No beaches or Matosinhos on this trip.',
      'Serra do Pilar is viewpoint-only — the monastery interior is currently closed.'
    ]
  },
  {
    id: 'money',
    title: 'Currency & paying',
    items: [
      'Currency is the Euro (€).',
      'Cards and contactless are widely accepted in Porto.',
      'Small cafés and market stalls (like Bolhão) may prefer cash — keep some small notes and coins handy.',
      'Most paid attractions on this trip are small amounts (€3–€15) — exact change speeds up the queue.'
    ]
  },
  {
    id: 'tipping',
    title: 'Tipping',
    items: [
      'Tipping is not obligatory in Portugal.',
      'Rounding up the bill, or ~5–10% at a nice sit-down dinner, is generous and appreciated.',
      "No need to tip for coffee or quick counter service."
    ]
  },
  {
    id: 'getting-around',
    title: 'Getting around',
    items: [
      'This plan is almost entirely on foot — comfortable shoes matter more than transit passes.',
      "If you need the metro/tram/bus, Porto uses the rechargeable Andante card, sold at metro stations.",
      'Taxis and Uber are reliable and are the planned way back after the Sunday match.'
    ]
  }
]

export const phrases: Phrase[] = [
  { pt: 'Bom dia', en: 'Good morning' },
  { pt: 'Boa tarde', en: 'Good afternoon' },
  { pt: 'Obrigado / Obrigada', en: 'Thank you (said by a man / a woman)' },
  { pt: 'Por favor', en: 'Please' },
  { pt: 'A conta, por favor', en: 'The bill, please' },
  { pt: 'Onde fica...?', en: 'Where is...?' },
  { pt: 'Fala inglês?', en: 'Do you speak English?' },
  { pt: 'Saúde!', en: 'Cheers!' }
]
