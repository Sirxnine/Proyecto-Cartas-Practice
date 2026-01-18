import type { CartaProps } from '../types/index';

function Carta({ carta, onClick }: CartaProps) {
  return (
    <button
      onClick={() => onClick(carta)}
      className={`group w-full rounded-xl p-4 border-2 border-transparent
        bg-gradient-to-br from-[#071226] to-[#020617] cursor-pointer transform
        transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(2,6,23,0.8)]
        text-left focus:outline-none focus:ring-2 focus:ring-red-600`}
    >
      <div className="relative overflow-hidden rounded-lg mb-3">
        <img
          src={carta.imagen}
          alt={carta.nombre}
          className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = 'https://preview.redd.it/characters-that-can-be-recognized-with-just-their-silhouette-v0-ytm08da795qc1.jpg?width=374&format=pjpg&auto=webp&s=854ae5998b018e53a292ef0adc1f5716d89777f8';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none
          transition-colors duration-500 group-hover:from-[#2b0710]/30"></div>
      </div>

      <h3 className="text-lg font-extrabold text-white mb-1 drop-shadow-md">{carta.nombre}</h3>
      
      <p className="text-slate-300 text-sm mb-2">{carta.tipo}</p>
      
      <div className="grid grid-cols-2 gap-2 mt-3">
        <div className="bg-red-900/20 rounded p-2 border border-red-800 transition-colors duration-300">
          <p className="text-red-300 text-xs">💥 ATAQUE</p>
          <p className="text-white font-bold">{carta.poder}</p>
        </div>
        <div className="bg-blue-900/20 rounded p-2 border border-blue-800 transition-colors duration-300">
          <p className="text-blue-300 text-xs">🛡️ DEFENSA</p>
          <p className="text-white font-bold">{carta.defensa}</p>
        </div>
      </div>
    </button>
  );
}

export default Carta;