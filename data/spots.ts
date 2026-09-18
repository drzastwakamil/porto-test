export type SpotCategory = 'sight' | 'viewpoint' | 'museum' | 'garden' | 'experience'

export interface Spot {
  id: string
  name: string
  category: SpotCategory
  free: boolean
  price?: string
  hours?: string
  why: string
  mapQuery: string
  day?: 'fri' | 'sat' | 'sun'
}

export const spots: Spot[] = [
  { id: 'se', name: 'Sé Cathedral', category: 'sight', free: false, price: '~€3', hours: '09:00–18:30 (tower until 18:00)', why: "Porto's cathedral, with views over the Ribeira rooftops.", mapQuery: 'Sé do Porto, Portugal', day: 'fri' },
  { id: 'sao-lourenco', name: 'Igreja de São Lourenço / MASA', category: 'sight', free: false, price: '~€3', hours: 'Fri 09:00–16:30', why: 'Church plus a modern art museum in one visit.', mapQuery: 'Igreja de São Lourenço, Porto, Portugal', day: 'fri' },
  { id: 'mirador-sao-lourenco', name: 'Miradouro da Igreja de São Lourenço', category: 'viewpoint', free: true, why: 'Quick free viewpoint right by São Lourenço.', mapQuery: 'Miradouro de São Lourenço, Porto, Portugal', day: 'fri' },
  { id: 'mirador-vitoria', name: 'Miradouro da Vitória', category: 'viewpoint', free: true, why: 'One of the best classic postcard views over the rooftops and river.', mapQuery: 'Miradouro da Vitória, Porto, Portugal', day: 'fri' },
  { id: 'mirador-virtudes', name: 'Miradouro das Virtudes', category: 'viewpoint', free: true, why: 'Terraced garden viewpoint, great for a breather.', mapQuery: 'Miradouro das Virtudes, Porto, Portugal', day: 'fri' },
  { id: 'sao-bento', name: 'São Bento Station', category: 'sight', free: true, hours: '06:30–01:00', why: 'Working train station with a stunning azulejo tile-mural hall.', mapQuery: 'São Bento Railway Station, Porto, Portugal', day: 'fri' },
  { id: 'trindade', name: 'Igreja da Santíssima Trindade', category: 'sight', free: true, hours: 'Fri until 17:00', why: "One of Porto's largest churches, free to step into.", mapQuery: 'Igreja da Santíssima Trindade, Porto, Portugal', day: 'fri' },
  { id: 'camara', name: 'Câmara Municipal do Porto', category: 'sight', free: true, why: "Porto's city hall — worth a look from the outside.", mapQuery: 'Câmara Municipal do Porto, Portugal', day: 'fri' },
  { id: 'bolhao', name: 'Mercado do Bolhão', category: 'sight', free: true, hours: 'Fri 08:00–20:00, Sat 08:00–18:00', why: 'Restored historic market — good for snacks and people-watching.', mapQuery: 'Mercado do Bolhão, Porto, Portugal', day: 'fri' },
  { id: 'almas', name: 'Capela das Almas', category: 'sight', free: true, hours: 'Fri ~07:30–19:00', why: 'A chapel entirely covered in blue azulejo tiles.', mapQuery: 'Capela das Almas, Porto, Portugal', day: 'fri' },
  { id: 'ildefonso', name: 'Igreja de Santo Ildefonso', category: 'sight', free: true, why: 'Another striking azulejo-tiled church facade.', mapQuery: 'Igreja de Santo Ildefonso, Porto, Portugal', day: 'fri' },
  { id: 'carmo', name: 'Igreja do Carmo + square', category: 'sight', free: false, price: '~€8', hours: '09:30–18:00', why: 'Twin-church complex with an equally famous tiled side wall.', mapQuery: 'Igreja do Carmo, Porto, Portugal', day: 'fri' },
  { id: 'lello', name: 'Livraria Lello', category: 'sight', free: false, price: '~€15.95', hours: '09:00–19:30', why: 'World-famous bookshop — book a timed entry slot ahead.', mapQuery: 'Livraria Lello, Porto, Portugal', day: 'fri' },
  { id: 'clerigos', name: 'Torre dos Clérigos + Museum', category: 'viewpoint', free: false, price: '~€10', hours: '09:00–19:00 (last entry earlier)', why: 'Climb the tower for the best panoramic view of the city.', mapQuery: 'Torre dos Clérigos, Porto, Portugal', day: 'sat' },
  { id: 'sao-francisco', name: 'Igreja e Museu de São Francisco', category: 'sight', free: false, price: '~€9', hours: '~09:00–20:00 in September', why: 'Gothic church with an extraordinarily ornate gilded interior.', mapQuery: 'Igreja de São Francisco, Porto, Portugal', day: 'fri' },
  { id: 'ribeira', name: 'Cais da Ribeira', category: 'sight', free: true, why: 'The classic riverside strip — colourful houses, cafés, river views.', mapQuery: 'Cais da Ribeira, Porto, Portugal', day: 'fri' },
  { id: 'elevador', name: 'Elevador da Ribeira', category: 'experience', free: true, why: 'Funicular shortcut up from the riverside to the upper town.', mapQuery: 'Funicular dos Guindais, Porto, Portugal', day: 'fri' },
  { id: 'serralves', name: 'Serralves', category: 'museum', free: false, hours: '10:00–19:00 (check seasonal hours)', why: 'Art deco villa, park, contemporary art museum and Treetop Walk.', mapQuery: 'Serralves, Porto, Portugal', day: 'sat' },
  { id: 'banco-materiais', name: 'Banco de Materiais', category: 'museum', free: true, hours: 'Tue–Sun 10:00–17:30', why: 'Small, free museum of architectural materials and tiles.', mapQuery: 'Banco de Materiais, Porto, Portugal', day: 'sat' },
  { id: 'bolsa', name: 'Palácio da Bolsa', category: 'sight', free: false, price: '~€14', hours: '09:00–18:30 (guided tour only)', why: 'Opulent former stock exchange — the Arabian Room is the highlight.', mapQuery: 'Palácio da Bolsa, Porto, Portugal', day: 'sat' },
  { id: 'ponte', name: 'Ponte Dom Luís I', category: 'viewpoint', free: true, why: 'Iconic double-deck iron bridge — walk both levels for different views.', mapQuery: 'Ponte Dom Luís I, Porto, Portugal', day: 'sat' },
  { id: 'cais-gaia', name: 'Cais de Gaia', category: 'sight', free: true, why: 'Riverside promenade on the Gaia side, facing the Ribeira.', mapQuery: 'Cais de Gaia, Vila Nova de Gaia, Portugal', day: 'sat' },
  { id: 'coelho', name: 'O Coelho — Bordalo II', category: 'experience', free: true, why: 'Giant recycled-material rabbit street art installation.', mapQuery: 'O Coelho Bordalo II, Vila Nova de Gaia, Portugal', day: 'sat' },
  { id: 'winery', name: 'Wine cellar — e.g. Caves Cálem', category: 'experience', free: false, why: 'Port wine cellar tour + tasting — book a slot in advance.', mapQuery: 'Caves Cálem, Vila Nova de Gaia, Portugal', day: 'sat' },
  { id: 'teleferico', name: 'Teleférico de Gaia', category: 'experience', free: false, hours: '10:00–20:00 (this period)', why: 'Cable car over the Gaia riverside with wide Douro views.', mapQuery: 'Teleférico de Gaia, Portugal', day: 'sat' },
  { id: 'serra-pilar', name: 'Serra do Pilar + viewpoint', category: 'viewpoint', free: true, why: 'One of the best sunset viewpoints over both riverbanks (monastery interior currently closed).', mapQuery: 'Mosteiro da Serra do Pilar, Portugal', day: 'sat' },
  { id: 'palacio-cristal', name: 'Jardins do Palácio de Cristal', category: 'garden', free: true, hours: '08:00–21:00 in September', why: 'Sweeping garden terraces with river and city views, peacocks included.', mapQuery: 'Jardins do Palácio de Cristal, Porto, Portugal', day: 'sun' },
  { id: 'sentimentos', name: 'Jardim dos Sentimentos', category: 'garden', free: true, why: 'A quiet, less-visited corner within the same gardens.', mapQuery: 'Jardim dos Sentimentos, Porto, Portugal', day: 'sun' }
]
