import type { GrupoAnime, Carta } from '../types/index';
import GrupoAnimeCard from './GrupoAnime';

interface ListaGruposProps {
  grupos: GrupoAnime[];
  cartasPorAnime: Record<string, Carta[]>;
  onGrupoClick: (grupoId: string) => void;
}

function ListaGrupos({ grupos, cartasPorAnime, onGrupoClick }: ListaGruposProps) {
  return (
    <div className="space-y-4">
      {grupos.map((grupo) => (
        <GrupoAnimeCard
          key={grupo.id}
          grupo={grupo}
          cartas={cartasPorAnime[grupo.id] || []}
          onGrupoClick={onGrupoClick}
        />
      ))}
    </div>
  );
}

export default ListaGrupos;