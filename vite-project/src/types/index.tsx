export interface Carta {
  id: number;
  defensa: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  poder: number;
  attributes: {
  tipo: string;
  habilidadUltimate: string; 
  }
  hp: number;
}

export type NuevaCarta = Omit<Carta, 'id'>;


export interface HeaderProps {
  busqueda: string;
  setBusqueda: (valor: string) => void;
}

export interface CartaProps {
  carta: Carta;
  onClick: (carta: Carta) => void;
}

export interface ListaCartasProps {
  cartas: Carta[];
  onCartaClick: (carta: Carta) => void;
  onEliminarCarta: (id: number) => void
  onAñadirCarta: (carta: Carta) => void;
  onGuardar: (carta: Carta) => Promise<void>;
}

export interface ModalCartaProps {
  carta: Carta | null;
  isOpen: boolean;
  onClose: () => void;
}

export interface IApiCard        {
            "idCard": string,
            "name": string,
            "description": string,
            "attack": number,
            "defense": number,
            "lifePoints": number,
            "pictureUrl": string,
            "attributes": {
                  tipo?: string;
                  habilidadUltimate?: string;
                  anime?: string; 
            },
            "userSecret": string,
            "createdAt": string,
            "updatedAt": null | string 
        }

export const toApiCardMapper = (card:Carta): IApiCard =>({
  idCard:card.id.toString(),
  name:card.nombre,
  description:card.descripcion,
  attack:card.poder,
  defense:card.defensa,
  lifePoints:card.hp,
  pictureUrl:card.imagen,
  attributes: {
    tipo: card.attributes.tipo,
    habilidadUltimate: card.attributes.habilidadUltimate,
  },
  userSecret:"Leon422088LA", 
  createdAt: new Date().toISOString(),
  updatedAt: null
})

export const toCardApiMapper = (apiCard:IApiCard): Carta => ({
  id: parseInt(apiCard.idCard),
  nombre: apiCard.name,
  descripcion: apiCard.description,
  poder: apiCard.attack,
  defensa: apiCard.defense,
  hp: apiCard.lifePoints,
  imagen: apiCard.pictureUrl,
  attributes: {
    tipo: apiCard.attributes.tipo || '',
    habilidadUltimate: apiCard.attributes.habilidadUltimate || ''
  }
});
