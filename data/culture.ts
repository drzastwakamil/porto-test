export type CultureCategory = 'eat' | 'drink' | 'say' | 'do' | 'sport' | 'music'

export interface CultureItem {
  id: string
  category: CultureCategory
  mapQuery?: string
  image?: string
}

export const cultureCategoryOrder: CultureCategory[] = ['eat', 'drink', 'say', 'do', 'sport', 'music']

export const culture: CultureItem[] = [
  { id: 'francesinha', category: 'eat', mapQuery: 'best francesinha Porto', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Francesinha_Sandwich_%28cropped%29.jpg/330px-Francesinha_Sandwich_%28cropped%29.jpg"},
  { id: 'tripas', category: 'eat', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Tripas_%C3%A0_moda_do_Porto.JPG/330px-Tripas_%C3%A0_moda_do_Porto.JPG"},
  { id: 'bacalhau-gomes-de-sa', category: 'eat', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Bacalhau_%C3%A0_Gomes_de_S%C3%A1.jpg/330px-Bacalhau_%C3%A0_Gomes_de_S%C3%A1.jpg"},
  { id: 'bifana', category: 'eat', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Porto-style_Bifana_sandwich_with_egg.jpg/330px-Porto-style_Bifana_sandwich_with_egg.jpg"},
  { id: 'caldo-verde', category: 'eat', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Caldo_verde_-_Jul_2008.jpg/330px-Caldo_verde_-_Jul_2008.jpg"},
  { id: 'pastel-de-nata', category: 'eat', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Pasteis_de_Belem.jpg/330px-Pasteis_de_Belem.jpg"},
  { id: 'vinho-do-porto', category: 'drink', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Port_wine.jpg/330px-Port_wine.jpg"},
  { id: 'vinho-verde', category: 'drink', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Vinhas.jpg/330px-Vinhas.jpg"},
  { id: 'super-bock', category: 'drink', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Super_bock.png/330px-Super_bock.png"},
  { id: 'bica', category: 'drink', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/330px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg"},
  { id: 'tripeiro', category: 'say', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Puente_Don_Luis_I%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_13.JPG/330px-Puente_Don_Luis_I%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_13.JPG"},
  { id: 'obrigadinho', category: 'say', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Detailed_SVG_map_of_the_Lusophone_world.svg/330px-Detailed_SVG_map_of_the_Lusophone_world.svg.png"},
  { id: 'esta-bom', category: 'say', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Bacalhau_desfiado_com_migas_e_grelos_%289374133341%29.jpg/330px-Bacalhau_desfiado_com_migas_e_grelos_%289374133341%29.jpg"},
  { id: 'cruzeiro-seis-pontes', category: 'do', mapQuery: 'Douro river cruise Porto', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Rio_Douro_-_Portugal_%2832615481975%29_%28cropped%29.jpg/330px-Rio_Douro_-_Portugal_%2832615481975%29_%28cropped%29.jpg"},
  { id: 'perder-se-ribeira', category: 'do', mapQuery: 'Ribeira, Porto, Portugal', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Porto_July_2014-34a.jpg/330px-Porto_July_2014-34a.jpg"},
  { id: 'lello-cedo', category: 'do', mapQuery: 'Livraria Lello, Porto, Portugal', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Lello_Bookshop_9_April_2026.jpg/330px-Lello_Bookshop_9_April_2026.jpg"},
  { id: 'cachecol', category: 'do', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Porto_Est%C3%A1dio_do_Drag%C3%A3o_2.jpg/330px-Porto_Est%C3%A1dio_do_Drag%C3%A3o_2.jpg"},
  { id: 'o-classico', category: 'sport', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Porto_Est%C3%A1dio_do_Drag%C3%A3o_2.jpg/330px-Porto_Est%C3%A1dio_do_Drag%C3%A3o_2.jpg"},
  { id: 'dragoes', category: 'sport', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Porto_Est%C3%A1dio_do_Drag%C3%A3o_2.jpg/330px-Porto_Est%C3%A1dio_do_Drag%C3%A3o_2.jpg"},
  { id: 'cores-estadio', category: 'sport', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Porto_Est%C3%A1dio_do_Drag%C3%A3o_2.jpg/330px-Porto_Est%C3%A1dio_do_Drag%C3%A3o_2.jpg"},
  { id: 'fado', category: 'music', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Jose_malhoa_fado.jpg/330px-Jose_malhoa_fado.jpg"},
  { id: 'amalia-rodrigues', category: 'music', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Am%C3%A1lia_Rodrigues_%28%27Fado_et_Flamenco%27%2C_Columbia%2C_1956%29%2C_cropped.png/330px-Am%C3%A1lia_Rodrigues_%28%27Fado_et_Flamenco%27%2C_Columbia%2C_1956%29%2C_cropped.png"},
  { id: 'vira-fandango', category: 'music', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/ViraDoMinho.jpg/330px-ViraDoMinho.jpg"}
]
