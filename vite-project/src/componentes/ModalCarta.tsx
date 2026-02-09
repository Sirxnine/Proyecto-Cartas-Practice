import type { ModalCartaProps } from '../types/index';
import { BsFeather } from "react-icons/bs";

function ModalCarta({ carta, isOpen, onClose }: ModalCartaProps) {
  if (!isOpen || !carta) return null;

  // Lógica de escalado de datos
  const psValue = Math.floor(carta.defensa / 10);
  const damageValue = Math.floor(carta.poder / 50);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
      onClick={onClose}
    >
      {/* Contenedor Principal */}
      <div 
        className="relative bg-black w-full max-w-135 aspect-[1/1.4] rounded-[2.8rem] p-2 shadow-[0_0_80px_rgba(0,0,0,0.9)] border-2 border-white/10 overflow-hidden group"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Ilustración de fondo */}
        <div className="absolute inset-0 z-0">
          <img 
            src={carta.imagen} 
            alt={carta.nombre}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent" />
        </div>

        {/* Header */}
        <div className="relative z-10 flex justify-between items-start p-6">
          <div className="flex flex-col">
            <div className="bg-linear-to-r from-gray-200 to-white text-[10px] font-black px-4 py-1 rounded-br-xl rounded-tl-lg italic text-gray-900 shadow-md w-fit border-b-2 border-gray-400 uppercase tracking-widest">
              {carta.tipo}
            </div>
            <h2 className="text-4xl font-black text-white italic tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] uppercase mt-2">
              {carta.nombre} <BsFeather className="text-5xl not-italic ml-1 font-serif opacity-90" />
            </h2>
          </div>

          {/* Vida (Defensa / 10) */}
          <div className="flex items-end gap-1 bg-black/60 backdrop-blur-lg pl-6 pr-4 py-2.5 rounded-l-full border-l border-y border-white/20 shadow-xl">
            <span className="text-xs font-bold text-white/70 mb-1">PS</span>
            <span className="text-5xl font-black text-white leading-none tracking-tighter">{psValue}</span>
            <div className="w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center border-2 border-black shadow-lg ml-3 text-xl">
              👊
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-8 pt-12 flex flex-col gap-6">
          
          {/* Sección de la Ulti */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 bg-orange-700 rounded-full border border-black shadow-sm" />
                  <div className="w-6 h-6 bg-gray-400 rounded-full border border-black shadow-sm" />
                </div>
                <h3 className="text-2xl font-black text-yellow-400 italic tracking-tight drop-shadow-md leading-none uppercase">
                  {carta.habilidadUltimate.split(' ')[0]} {carta.habilidadUltimate.split(' ')[1] || ''}
                </h3>
              </div>
              <span className="text-5xl font-black text-white italic drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">
                {damageValue}
              </span>
            </div>
            
            {/* Descrpcion de la Ulti*/}
            <p className="text-base md:text-lg text-gray-100 leading-snug font-medium drop-shadow-lg pr-4">
              {carta.habilidadUltimate}
            </p>
          </div>

          {/* Descripcion */}
          <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
            <p className="text-xs md:text-sm text-gray-300 italic font-light leading-relaxed">
              {carta.descripcion}
            </p>
          </div>

          {/* Copyright */}
          <div className="text-[8px] text-white/20 font-mono tracking-[0.4em] text-center mt-2 uppercase">
            Proyecto // Leonardo_Monterola // 2026
          </div>
        </div>

        {/* Botón de cierre */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-linear-to-br from-white to-gray-400 rotate-45 z-30 shadow-2xl flex items-start justify-center pt-3">
          <button 
            onClick={onClose}
            className="text-black font-black text-3xl -rotate-45 hover:text-red-600 transition-all transform hover:scale-110"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalCarta;