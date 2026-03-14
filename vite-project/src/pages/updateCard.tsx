import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { RiSaveLine, RiArrowLeftLine } from "react-icons/ri";
import { cartasEjemplo } from "../componentes/CartasIniciales"; 
import type { Carta } from "../types";

const EditarCarta = ({ onGuardar }: { onGuardar: (carta: Carta) => Promise<void>}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // 1. Estado "plano": es mucho más fácil vincularlo a los inputs
  const [formData, setFormData] = useState({
    nombre: '',
    tipo: 'Luchador',
    poder: 0,
    defensa: 0,
    habilidadUltimate: '',
    descripcion: '',
    imagen: '',
    hp: 0
  });

  useEffect(() => {
    const cartaEncontrada = cartasEjemplo.find(c => c.id === Number(id));
    
    if (cartaEncontrada) {
      setFormData({
        nombre: cartaEncontrada.nombre,
        // Accedemos al objeto interno de la carta encontrada para llenar el estado plano
        tipo: cartaEncontrada.attributes?.tipo || 'Luchador',
        habilidadUltimate: cartaEncontrada.attributes?.habilidadUltimate || '',
        poder: cartaEncontrada.poder,
        defensa: cartaEncontrada.defensa,
        descripcion: cartaEncontrada.descripcion,
        imagen: cartaEncontrada.imagen,
        hp: cartaEncontrada.hp
      });
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 2. Reconstruimos el objeto con la estructura que espera tu interfaz 'Carta'
    const cartaActualizada: Carta = {
      id: Number(id),
      nombre: formData.nombre,
      poder: formData.poder,
      defensa: formData.defensa,
      hp: formData.hp,
      imagen: formData.imagen,
      descripcion: formData.descripcion,
      // Metemos los datos en el objeto interno para cumplir con el tipo
      attributes: {
        tipo: formData.tipo,
        habilidadUltimate: formData.habilidadUltimate
      }
    };
    await onGuardar(cartaActualizada);
    navigate('/');
  }
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-6 overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-4xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-2xl">
        
        <header className="mb-12 relative flex justify-between items-start">
          <div>
            <div className="flex items-center gap-5 mb-4">
              <div className="h-12 w-1.5 bg-amber-500 rounded-full" />
              <h1 className="text-4xl md:text-5xl font-black italic text-white uppercase leading-none">
                Editar <span className="text-amber-400">Carta</span>
              </h1>
            </div>
          </div>
          <button onClick={() => navigate('/')} className="text-white/40 hover:text-white transition-colors font-black uppercase text-[10px] flex items-center gap-2">
            <RiArrowLeftLine /> Volver
          </button>
        </header>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          
          <div className="space-y-2">
            <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Nombre</label>
            <input 
              type="text" 
              value={formData.nombre} 
              onChange={(e) => setFormData({...formData, nombre: e.target.value})}
              className="w-full bg-black/40 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-amber-500/50" 
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Tipo</label>
            <select 
              value={formData.tipo} 
              onChange={(e) => setFormData({...formData, tipo: e.target.value})}
              className="w-full bg-black/40 border border-white/10 p-4 rounded-2xl text-white outline-none"
            >
              <option value="Luchador">Luchador</option>
              <option value="Estratega">Estratega</option>
              <option value="Mago">Mago</option>
              <option value="Ninja">Ninja</option>
              <option value="Tanque">Tanque</option>
            </select>
          </div>

          <div className="md:col-span-2 grid grid-cols-3 gap-6 bg-white/2 p-8 rounded-4xl border border-white/5">
            <div className="space-y-2 text-center">
              <label className="text-[10px] font-black text-green-500/60 uppercase">HP</label>
              <input type="number" value={formData.hp} onChange={(e)=>setFormData({...formData, hp: +e.target.value})} className="w-full bg-black/60 p-4 rounded-xl text-white text-2xl text-center outline-none border border-white/5 focus:border-green-500" />
            </div>
            <div className="space-y-2 text-center">
              <label className="text-[10px] font-black text-red-500/60 uppercase">ATK</label>
              <input type="number" value={formData.poder} onChange={(e)=>setFormData({...formData, poder: +e.target.value})} className="w-full bg-black/60 p-4 rounded-xl text-white text-2xl text-center outline-none border border-white/5 focus:border-red-500" />
            </div>
            <div className="space-y-2 text-center">
              <label className="text-[10px] font-black text-blue-500/60 uppercase">DEF</label>
              <input type="number" value={formData.defensa} onChange={(e)=>setFormData({...formData, defensa: +e.target.value})} className="w-full bg-black/60 p-4 rounded-xl text-white text-2xl text-center outline-none border border-white/5 focus:border-blue-500" />
            </div>
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">URL Imagen</label>
            <input 
              type="url" 
              value={formData.imagen} 
              onChange={(e)=>setFormData({...formData, imagen: e.target.value})} 
              className="w-full bg-black/40 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-amber-500/50" 
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Habilidad Especial</label>
            <textarea rows={2} value={formData.habilidadUltimate} onChange={(e)=>setFormData({...formData, habilidadUltimate: e.target.value})} className="w-full bg-black/40 border border-white/10 p-4 rounded-2xl text-white outline-none resize-none focus:border-amber-500/50" />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Historia</label>
            <textarea rows={2} value={formData.descripcion} onChange={(e)=>setFormData({...formData, descripcion: e.target.value})} className="w-full bg-black/40 border border-white/10 p-4 rounded-2xl text-white outline-none resize-none focus:border-amber-500/50" />
          </div>

          <button type="submit" className="md:col-span-2 group relative w-full bg-amber-500 py-6 rounded-2xl shadow-lg hover:bg-amber-400 transition-all font-black uppercase italic text-xl flex items-center justify-center gap-3 text-black">
              Guardar Cambios <RiSaveLine size={24} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditarCarta;