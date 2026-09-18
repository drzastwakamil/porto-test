export type SpotCategory = 'sight' | 'viewpoint' | 'museum' | 'garden' | 'experience'

export interface Spot {
  id: string
  category: SpotCategory
  free: boolean
  price?: string
  mapQuery: string
  day?: 'fri' | 'sat' | 'sun'
  image?: string
}

export const spots: Spot[] = [
  { id: 'se', category: 'sight', free: false, price: '~€3', mapQuery: 'Sé do Porto, Portugal', day: 'fri', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Porto%2C_S%C3%A9_do_Porto_%289%29.jpg/330px-Porto%2C_S%C3%A9_do_Porto_%289%29.jpg"},
  { id: 'sao-lourenco', category: 'sight', free: false, price: '~€3', mapQuery: 'Igreja de São Lourenço, Porto, Portugal', day: 'fri', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Convento_dos_Grilos%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_02.JPG/330px-Convento_dos_Grilos%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_02.JPG"},
  { id: 'mirador-sao-lourenco', category: 'viewpoint', free: true, mapQuery: 'Miradouro de São Lourenço, Porto, Portugal', day: 'fri' },
  { id: 'mirador-vitoria', category: 'viewpoint', free: true, mapQuery: 'Miradouro da Vitória, Porto, Portugal', day: 'fri', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Igreja_de_Nossa_Senhora_da_Vit%C3%B3ria_-_Porto_-_Portugal_%2853477872492%29.jpg/500px-Igreja_de_Nossa_Senhora_da_Vit%C3%B3ria_-_Porto_-_Portugal_%2853477872492%29.jpg"},
  { id: 'mirador-virtudes', category: 'viewpoint', free: true, mapQuery: 'Miradouro das Virtudes, Porto, Portugal', day: 'fri', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Rio_Douro_-_Portugal_%2832615481975%29_%28cropped%29.jpg/330px-Rio_Douro_-_Portugal_%2832615481975%29_%28cropped%29.jpg"},
  { id: 'sao-bento', category: 'sight', free: true, mapQuery: 'São Bento Railway Station, Porto, Portugal', day: 'fri', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Esta%C3%A7%C3%A3o_Ferrovi%C3%A1ria_de_Porto_-_S%C3%A3o_Bento.JPG/330px-Esta%C3%A7%C3%A3o_Ferrovi%C3%A1ria_de_Porto_-_S%C3%A3o_Bento.JPG"},
  { id: 'trindade', category: 'sight', free: true, mapQuery: 'Igreja da Santíssima Trindade, Porto, Portugal', day: 'fri', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Igreja_Matriz_de_Trindade_em_2020.jpg/330px-Igreja_Matriz_de_Trindade_em_2020.jpg"},
  { id: 'camara', category: 'sight', free: true, mapQuery: 'Câmara Municipal do Porto, Portugal', day: 'fri' },
  { id: 'bolhao', category: 'sight', free: true, mapQuery: 'Mercado do Bolhão, Porto, Portugal', day: 'fri', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Bolh%C3%A3o2023.jpg/330px-Bolh%C3%A3o2023.jpg"},
  { id: 'almas', category: 'sight', free: true, mapQuery: 'Capela das Almas, Porto, Portugal', day: 'fri', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Capela_das_Almas_%28Porto%29.jpg/330px-Capela_das_Almas_%28Porto%29.jpg"},
  { id: 'ildefonso', category: 'sight', free: true, mapQuery: 'Igreja de Santo Ildefonso, Porto, Portugal', day: 'fri', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Iglesia_de_San_Ildefonso%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_01.JPG/330px-Iglesia_de_San_Ildefonso%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_01.JPG"},
  { id: 'carmo', category: 'sight', free: false, price: '~€8', mapQuery: 'Igreja do Carmo, Porto, Portugal', day: 'fri', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/19._Igreja_do_Carmo_%28Porto%29.JPG/330px-19._Igreja_do_Carmo_%28Porto%29.JPG"},
  { id: 'lello', category: 'sight', free: false, price: '~€15.95', mapQuery: 'Livraria Lello, Porto, Portugal', day: 'fri', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Lello_Bookshop_9_April_2026.jpg/330px-Lello_Bookshop_9_April_2026.jpg"},
  { id: 'clerigos', category: 'viewpoint', free: false, price: '~€10', mapQuery: 'Torre dos Clérigos, Porto, Portugal', day: 'sat', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Torre_de_los_Cl%C3%A9rigos%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_01.JPG/330px-Torre_de_los_Cl%C3%A9rigos%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_01.JPG"},
  { id: 'sao-francisco', category: 'sight', free: false, price: '~€9', mapQuery: 'Igreja de São Francisco, Porto, Portugal', day: 'fri', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Oporto-S-Francisco-IPPAR1.jpg/330px-Oporto-S-Francisco-IPPAR1.jpg"},
  { id: 'ribeira', category: 'sight', free: true, mapQuery: 'Cais da Ribeira, Porto, Portugal', day: 'fri', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Porto_July_2014-34a.jpg/330px-Porto_July_2014-34a.jpg"},
  { id: 'elevador', category: 'experience', free: true, mapQuery: 'Funicular dos Guindais, Porto, Portugal', day: 'fri', image: "https://commons.wikimedia.org/wiki/Special:FilePath/Funicular_dos_Guindais_(Porto).JPG?width=800"},
  { id: 'serralves', category: 'museum', free: false, mapQuery: 'Serralves, Porto, Portugal', day: 'sat' },
  { id: 'banco-materiais', category: 'museum', free: true, mapQuery: 'Banco de Materiais, Porto, Portugal', day: 'sat' },
  { id: 'bolsa', category: 'sight', free: false, price: '~€14', mapQuery: 'Palácio da Bolsa, Porto, Portugal', day: 'sat', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Palacio_da_Bolsa_in_Porto_%282%29.jpg/330px-Palacio_da_Bolsa_in_Porto_%282%29.jpg"},
  { id: 'ponte', category: 'viewpoint', free: true, mapQuery: 'Ponte Dom Luís I, Porto, Portugal', day: 'sat', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Dom_Lu%C3%ADs_I_Bridge_%2836961760686%29.jpg/330px-Dom_Lu%C3%ADs_I_Bridge_%2836961760686%29.jpg"},
  { id: 'cais-gaia', category: 'sight', free: true, mapQuery: 'Cais de Gaia, Vila Nova de Gaia, Portugal', day: 'sat', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/86922-Porto_%2848640131006%29.jpg/330px-86922-Porto_%2848640131006%29.jpg"},
  { id: 'coelho', category: 'experience', free: true, mapQuery: 'O Coelho Bordalo II, Vila Nova de Gaia, Portugal', day: 'sat', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/Arturo_bordalo-1557425478.jpg/330px-Arturo_bordalo-1557425478.jpg"},
  { id: 'winery', category: 'experience', free: false, mapQuery: 'Caves Cálem, Vila Nova de Gaia, Portugal', day: 'sat', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Port_wine.jpg/330px-Port_wine.jpg"},
  { id: 'teleferico', category: 'experience', free: false, mapQuery: 'Teleférico de Gaia, Portugal', day: 'sat', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Vila_Nova_de_Gaia%2C_Portugal_-_panoramio_%284%29.jpg/330px-Vila_Nova_de_Gaia%2C_Portugal_-_panoramio_%284%29.jpg"},
  { id: 'serra-pilar', category: 'viewpoint', free: true, mapQuery: 'Mosteiro da Serra do Pilar, Portugal', day: 'sat', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Iglesia_Serra_do_Pilar%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_03.JPG/330px-Iglesia_Serra_do_Pilar%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_03.JPG"},
  { id: 'palacio-cristal', category: 'garden', free: true, mapQuery: 'Jardins do Palácio de Cristal, Porto, Portugal', day: 'sun', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/ArchPitt-Porto-CrystalPalace.jpg/330px-ArchPitt-Porto-CrystalPalace.jpg"},
  { id: 'sentimentos', category: 'garden', free: true, mapQuery: 'Jardim dos Sentimentos, Porto, Portugal', day: 'sun', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/ArchPitt-Porto-CrystalPalace.jpg/330px-ArchPitt-Porto-CrystalPalace.jpg"}
]
