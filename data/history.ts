export interface HistoryEvent {
  id: string
  year: string
  image?: string
}

export const history: HistoryEvent[] = [
  { id: 'portus-cale', year: 'c. 300 BC' },
  { id: 'county', year: '1096', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Condado_portucalense_carte-1070-fr.png/330px-Condado_portucalense_carte-1070-fr.png"},
  { id: 'ceuta-fleet', year: '1415', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Henry_the_Navigator1.jpg/330px-Henry_the_Navigator1.jpg"},
  { id: 'methuen', year: '1703', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Assinatura_do_Tratado_de_Methuen_%E2%80%93_Hist%C3%B3ria_de_Portugal%2C_Popular_e_Ilustrada.jpg/330px-Assinatura_do_Tratado_de_Methuen_%E2%80%93_Hist%C3%B3ria_de_Portugal%2C_Popular_e_Ilustrada.jpg"},
  { id: 'clerigos-built', year: '1732–1763', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Torre_de_los_Cl%C3%A9rigos%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_01.JPG/330px-Torre_de_los_Cl%C3%A9rigos%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_01.JPG"},
  { id: 'ponte-barcas', year: '1809', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/The_Suffrage_of_the_Bridge_of_Boats_%281845%29_02.jpg/330px-The_Suffrage_of_the_Bridge_of_Boats_%281845%29_02.jpg"},
  { id: 'ponte-dom-luis', year: '1886', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Dom_Lu%C3%ADs_I_Bridge_%2836961760686%29.jpg/330px-Dom_Lu%C3%ADs_I_Bridge_%2836961760686%29.jpg"},
  { id: 'unesco', year: '1996', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Porto_July_2014-34a.jpg/330px-Porto_July_2014-34a.jpg"},
  { id: 'capital-of-culture', year: '2001', image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Casa_Da_Musica_%283190746009%29.jpg/330px-Casa_Da_Musica_%283190746009%29.jpg"}
]
