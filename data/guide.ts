export const guideSectionIds = ['rules-of-thumb', 'money', 'tipping', 'getting-around', 'essentials'] as const

export interface Phrase {
  pt: string
  en: string
  pl: string
}

export const phrases: Phrase[] = [
  { pt: 'Bom dia', en: 'Good morning', pl: 'Dzień dobry (rano)' },
  { pt: 'Boa tarde', en: 'Good afternoon', pl: 'Dzień dobry (po południu)' },
  { pt: 'Boa noite', en: 'Good evening', pl: 'Dobry wieczór' },
  { pt: 'Por favor', en: 'Please', pl: 'Proszę' },
  { pt: 'Obrigado / Obrigada', en: 'Thank you (said by a man / a woman)', pl: 'Dziękuję (mówi mężczyzna / kobieta)' },
  { pt: 'De nada', en: "You're welcome", pl: 'Nie ma za co' },
  { pt: 'Desculpe', en: 'Sorry / Excuse me', pl: 'Przepraszam' },
  { pt: 'Sim / Não', en: 'Yes / No', pl: 'Tak / Nie' },
  { pt: 'Fala inglês?', en: 'Do you speak English?', pl: 'Czy mówi Pan/Pani po angielsku?' },
  { pt: 'Não entendo', en: "I don't understand", pl: 'Nie rozumiem' },
  { pt: 'Onde fica...?', en: 'Where is...?', pl: 'Gdzie jest...?' },
  { pt: 'Onde fica a casa de banho?', en: "Where's the bathroom?", pl: 'Gdzie jest toaleta?' },
  { pt: 'Uma mesa para três, por favor', en: 'A table for three, please', pl: 'Stolik dla trzech osób, proszę' },
  { pt: 'A conta, por favor', en: 'The bill, please', pl: 'Rachunek, proszę' },
  { pt: 'Quanto custa?', en: 'How much is it?', pl: 'Ile to kosztuje?' },
  { pt: 'Aceita cartão?', en: 'Do you take card?', pl: 'Czy przyjmujecie kartę?' },
  { pt: 'Saúde!', en: 'Cheers!', pl: 'Na zdrowie!' }
]
