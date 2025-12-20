import type { GrupoAnimeProps } from '../types/index';

function GrupoAnimeCard({ grupo, cartas, onGrupoClick }: GrupoAnimeProps) {
  return (
    <button
      onClick={() => onGrupoClick(grupo.id)}
      className="w-full bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-4 
        border-2 border-red-600 hover:border-red-400 transition-all 
        hover:scale-105 cursor-pointer text-left"
    >
      <div className="flex items-center gap-4">
        <img
          src={grupo.imagenPortada}
          alt={grupo.nombre}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white">{grupo.nombre}</h3>
          <p className="text-gray-300 text-sm mt-1">{grupo.descripcion}</p>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-red-400">📦 {grupo.cantidadCartas} cartas</span>
            <span className="text-blue-400">👥 {cartas.length} personajes</span>
          </div>
        </div>
        <div className="text-2xl text-red-400">→</div>
      </div>
    </button>
  );
}

export default GrupoAnimeCard;