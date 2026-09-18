export const guideSectionIds = ['rules-of-thumb', 'money', 'tipping', 'getting-around', 'essentials'] as const

export interface Phrase {
  pt: string
  en: string
  pl: string
}

export const phrases: Phrase[] = [
  { pt: 'Bom dia', en: 'Good morning', pl: 'Dzień dobry' },
  { pt: 'Boa tarde', en: 'Good afternoon', pl: 'Dobry dzień' },
  { pt: 'Obrigado / Obrigada', en: 'Thank you (said by a man / a woman)', pl: 'Dziękuję' },
  { pt: 'Por favor', en: 'Please', pl: 'Proszę' },
  { pt: 'A conta, por favor', en: 'The bill, please', pl: 'Rachunek, proszę' },
  { pt: 'Onde fica...?', en: 'Where is...?', pl: 'Gdzie jest...?' },
  { pt: 'Fala inglês?', en: 'Do you speak English?', pl: 'Mówisz po angielsku?' },
  { pt: 'Saúde!', en: 'Cheers!', pl: 'Na zdrowie!' }
]
