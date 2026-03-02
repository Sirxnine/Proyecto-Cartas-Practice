import { RiCloseLine, RiSwordLine, RiShieldLine, RiFocus3Line, RiBookReadLine } from "react-icons/ri";
import type { Carta } from '../types';

interface ModalCartaProps {
  carta: Carta | null;
  isOpen: boolean;
  onClose: () => void;
}

const ModalCarta = ({ carta, isOpen, onClose }: ModalCartaProps) => {
  if (!isOpen || !carta) return null;

  return (
    // Reducimos el blur del fondo del modal completo
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
      
      {/* --- CARTAS DE FONDO DECORATIVAS (EFECTO JOYA) --- */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
        {/* Carta fantasma izquierda */}
        <div className="absolute w-112.5 aspect-[1/1.4] bg-linear-to-br from-white/10 to-transparent border border-white/10 rounded-[2.5rem] -translate-x-32 rotate-[-15deg] blur-[2px]" />
        {/* Carta fantasma derecha */}
        <div className="absolute w-112-5 aspect-[1/1.4] bg-linear-to-br from-white/10 to-transparent border border-white/10 rounded-[2.5rem] translate-x-32 rotate-15 blur-[2px]" />
      </div>

      {/* BOTÓN CERRAR: Un poco más integrado y pequeño */}
      <button 
        onClick={onClose} 
        className="absolute top-8 right-8 z-150 bg-red-600/80 hover:bg-red-600 text-white p-3.5 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all hover:scale-105 active:scale-95 border border-white/20"
      >
        <RiCloseLine size={24} />
      </button>

      {/* CUERPO DE LA CARTA: Full Art Refinado */}
      <div className="relative z-10 w-full max-w-120 aspect-[1/1.4] bg-black rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.8)] flex flex-col group animate-in zoom-in duration-300">
        
        {/* 1. LA IMAGEN: Protagonista absoluta */}
        <div className="absolute inset-0 z-0">
          <img 
            src={carta.imagen} 
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
            alt={carta.nombre} 
          />
          {/* Degradado reducido: Más sutil y solo en la base para lectura */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/10" />
        </div>

        {/* 2. CONTENIDO FLOTANTE (ARRIBA): Textos reducidos */}
        <div className="relative z-10 p-7 flex justify-between items-start drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col gap-1">
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-[9px] font-black px-2.5 py-1 rounded italic uppercase w-fit tracking-wider">
              {carta.anime} • {carta.tipo}
            </span>
            <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter leading-none mt-1">
              {carta.nombre} <span className="text-2xl font-bold opacity-70"></span>
            </h2>
          </div>
          
          <div className="text-right">
            <span className="text-white/60 text-[9px] font-black block tracking-widest">PUNTOS SALUD</span>
            <span className="text-4xl font-black text-white italic tracking-tighter tabular-nums leading-none">{carta.hp}</span>
          </div>
        </div>

        {/* 3. CONTENIDO FLOTANTE (ABAJO) - Información de Combate */}
        <div className="relative z-10 mt-auto p-7 space-y-5">
          
          {/* STATS: Claros y potentes, textos reducidos */}
          <div className="flex gap-3">
            <div className="flex-1 bg-red-600/10 backdrop-blur-md border border-red-500/30 p-3.5 rounded-xl flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-2.5">
                <RiSwordLine className="text-red-500" size={20} />
                <span className="text-white/90 font-black text-[11px] uppercase italic">Ataque</span>
              </div>
              <span className="text-xl font-black text-white italic leading-none">{carta.poder}</span>
            </div>

            <div className="flex-1 bg-blue-600/10 backdrop-blur-md border border-blue-500/30 p-3.5 rounded-xl flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-2.5">
                <RiShieldLine className="text-blue-500" size={20} />
                <span className="text-white/90 font-black text-[11px] uppercase italic">Defensa</span>
              </div>
              <span className="text-xl font-black text-white italic leading-none">{carta.defensa}</span>
            </div>
          </div>

          {/* HABILIDAD ULTIMATE: Desenfoque reducido para ver la imagen */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/15 p-4.5 rounded-2xl shadow-xl">
            <div className="flex items-center gap-1.5 mb-1.5 text-yellow-400 font-black uppercase text-[9px] tracking-[0.2em]">
              <RiFocus3Line size={16} /> Ultimate Move
            </div>
            <h3 className="text-xl font-black text-white italic uppercase mb-1.5 leading-none">
              {carta.habilidadUltimate.split(' - ')[0]}
            </h3>
            <p className="text-white/80 text-[13px] leading-tight italic font-medium px-0.5">
              {carta.habilidadUltimate.split(' - ')[1]}
            </p>
          </div>

          {/* LORE: Estilo "Flavor Text" más fino */}
          <div className="flex gap-2.5 items-start px-1.5 py-1">
            <RiBookReadLine className="text-white/20 shrink-0 mt-0.5" size={18} />
            <p className="text-[12px] text-white/40 italic leading-relaxed font-serif line-clamp-2">
              {carta.descripcion}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ModalCarta;