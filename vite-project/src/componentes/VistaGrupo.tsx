import type { VistaGrupoProps } from '../types/index';
import ListaCartas from './ListaCartas';

function VistaGrupo({ grupo, cartas, onCartaClick, onVolver }: VistaGrupoProps) {
  if (!grupo) return null;

  return (
    <div>
      <div className="mb-6 p-4 bg-gradient-to-r from-red-900/50 to-black rounded-xl">
        <button
          onClick={onVolver}
          className="text-white hover:text-red-400 mb-4 flex items-center gap-2"
        >
          ← Volver a todos los animes
        </button>
        <div className="flex items-center gap-4">
          <img
            src={grupo.imagenPortada}
            alt={grupo.nombre}
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div>
            <h1 className="text-3xl font-bold text-white">{grupo.nombre}</h1>
            <p className="text-gray-300 mt-2">{grupo.descripcion}</p>
            <p className="text-red-400 mt-2">
              {cartas.length} personajes disponibles
            </p>
          </div>
        </div>
      </div>

      <ListaCartas cartas={cartas} onCartaClick={onCartaClick} />
    </div>
  );
}

export default VistaGrupo;