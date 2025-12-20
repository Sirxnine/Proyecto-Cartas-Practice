export interface Carta {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  tipo: string;
  rareza: string;
  poder: number;
  defensa: number;
  habilidadPasiva: string;
  habilidadUltimate: string;
  anime: string; 
}

export type NuevaCarta = Omit<Carta, 'id'>;

export interface GrupoAnime {
  id: string; 
  nombre: string; 
  imagenPortada: string; 
  descripcion: string;  
  cantidadCartas: number; 
}

export interface GrupoAnimeProps {
  grupo: GrupoAnime;
  cartas: Carta[]; 
  onGrupoClick: (grupoId: string) => void;
}

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
}

export interface ModalCartaProps {
  carta: Carta | null;
  isOpen: boolean;
  onClose: () => void;
}

export interface VistaGrupoProps {
  grupo: GrupoAnime | null;
  cartas: Carta[];
  onCartaClick: (carta: Carta) => void;
  onVolver: () => void;
}