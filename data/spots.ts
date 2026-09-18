export type SpotCategory = 'sight' | 'viewpoint' | 'museum' | 'garden' | 'experience'

export interface Spot {
  id: string
  category: SpotCategory
  free: boolean
  price?: string
  mapQuery: string
  day?: 'fri' | 'sat' | 'sun'
}

export const spots: Spot[] = [
  { id: 'se', category: 'sight', free: false, price: '~€3', mapQuery: 'Sé do Porto, Portugal', day: 'fri' },
  { id: 'sao-lourenco', category: 'sight', free: false, price: '~€3', mapQuery: 'Igreja de São Lourenço, Porto, Portugal', day: 'fri' },
  { id: 'mirador-sao-lourenco', category: 'viewpoint', free: true, mapQuery: 'Miradouro de São Lourenço, Porto, Portugal', day: 'fri' },
  { id: 'mirador-vitoria', category: 'viewpoint', free: true, mapQuery: 'Miradouro da Vitória, Porto, Portugal', day: 'fri' },
  { id: 'mirador-virtudes', category: 'viewpoint', free: true, mapQuery: 'Miradouro das Virtudes, Porto, Portugal', day: 'fri' },
  { id: 'sao-bento', category: 'sight', free: true, mapQuery: 'São Bento Railway Station, Porto, Portugal', day: 'fri' },
  { id: 'trindade', category: 'sight', free: true, mapQuery: 'Igreja da Santíssima Trindade, Porto, Portugal', day: 'fri' },
  { id: 'camara', category: 'sight', free: true, mapQuery: 'Câmara Municipal do Porto, Portugal', day: 'fri' },
  { id: 'bolhao', category: 'sight', free: true, mapQuery: 'Mercado do Bolhão, Porto, Portugal', day: 'fri' },
  { id: 'almas', category: 'sight', free: true, mapQuery: 'Capela das Almas, Porto, Portugal', day: 'fri' },
  { id: 'ildefonso', category: 'sight', free: true, mapQuery: 'Igreja de Santo Ildefonso, Porto, Portugal', day: 'fri' },
  { id: 'carmo', category: 'sight', free: false, price: '~€8', mapQuery: 'Igreja do Carmo, Porto, Portugal', day: 'fri' },
  { id: 'lello', category: 'sight', free: false, price: '~€15.95', mapQuery: 'Livraria Lello, Porto, Portugal', day: 'fri' },
  { id: 'clerigos', category: 'viewpoint', free: false, price: '~€10', mapQuery: 'Torre dos Clérigos, Porto, Portugal', day: 'sat' },
  { id: 'sao-francisco', category: 'sight', free: false, price: '~€9', mapQuery: 'Igreja de São Francisco, Porto, Portugal', day: 'fri' },
  { id: 'ribeira', category: 'sight', free: true, mapQuery: 'Cais da Ribeira, Porto, Portugal', day: 'fri' },
  { id: 'elevador', category: 'experience', free: true, mapQuery: 'Funicular dos Guindais, Porto, Portugal', day: 'fri' },
  { id: 'serralves', category: 'museum', free: false, mapQuery: 'Serralves, Porto, Portugal', day: 'sat' },
  { id: 'banco-materiais', category: 'museum', free: true, mapQuery: 'Banco de Materiais, Porto, Portugal', day: 'sat' },
  { id: 'bolsa', category: 'sight', free: false, price: '~€14', mapQuery: 'Palácio da Bolsa, Porto, Portugal', day: 'sat' },
  { id: 'ponte', category: 'viewpoint', free: true, mapQuery: 'Ponte Dom Luís I, Porto, Portugal', day: 'sat' },
  { id: 'cais-gaia', category: 'sight', free: true, mapQuery: 'Cais de Gaia, Vila Nova de Gaia, Portugal', day: 'sat' },
  { id: 'coelho', category: 'experience', free: true, mapQuery: 'O Coelho Bordalo II, Vila Nova de Gaia, Portugal', day: 'sat' },
  { id: 'winery', category: 'experience', free: false, mapQuery: 'Caves Cálem, Vila Nova de Gaia, Portugal', day: 'sat' },
  { id: 'teleferico', category: 'experience', free: false, mapQuery: 'Teleférico de Gaia, Portugal', day: 'sat' },
  { id: 'serra-pilar', category: 'viewpoint', free: true, mapQuery: 'Mosteiro da Serra do Pilar, Portugal', day: 'sat' },
  { id: 'palacio-cristal', category: 'garden', free: true, mapQuery: 'Jardins do Palácio de Cristal, Porto, Portugal', day: 'sun' },
  { id: 'sentimentos', category: 'garden', free: true, mapQuery: 'Jardim dos Sentimentos, Porto, Portugal', day: 'sun' }
]
