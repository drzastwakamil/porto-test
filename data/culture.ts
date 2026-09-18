export type CultureCategory = 'eat' | 'drink' | 'say' | 'do' | 'sport' | 'music'

export interface CultureItem {
  id: string
  category: CultureCategory
  mapQuery?: string
}

export const cultureCategoryOrder: CultureCategory[] = ['eat', 'drink', 'say', 'do', 'sport', 'music']

export const culture: CultureItem[] = [
  { id: 'francesinha', category: 'eat', mapQuery: 'best francesinha Porto' },
  { id: 'tripas', category: 'eat' },
  { id: 'bacalhau-gomes-de-sa', category: 'eat' },
  { id: 'bifana', category: 'eat' },
  { id: 'caldo-verde', category: 'eat' },
  { id: 'pastel-de-nata', category: 'eat' },
  { id: 'vinho-do-porto', category: 'drink' },
  { id: 'vinho-verde', category: 'drink' },
  { id: 'super-bock', category: 'drink' },
  { id: 'bica', category: 'drink' },
  { id: 'tripeiro', category: 'say' },
  { id: 'obrigadinho', category: 'say' },
  { id: 'esta-bom', category: 'say' },
  { id: 'cruzeiro-seis-pontes', category: 'do', mapQuery: 'Douro river cruise Porto' },
  { id: 'perder-se-ribeira', category: 'do', mapQuery: 'Ribeira, Porto, Portugal' },
  { id: 'lello-cedo', category: 'do', mapQuery: 'Livraria Lello, Porto, Portugal' },
  { id: 'cachecol', category: 'do' },
  { id: 'o-classico', category: 'sport' },
  { id: 'dragoes', category: 'sport' },
  { id: 'cores-estadio', category: 'sport' },
  { id: 'fado', category: 'music' },
  { id: 'amalia-rodrigues', category: 'music' },
  { id: 'vira-fandango', category: 'music' }
]
