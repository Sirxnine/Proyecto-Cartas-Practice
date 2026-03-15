import { useState } from "react";
import { RiAddLine, RiImageAddLine, RiShieldLine, RiSwordLine, RiHistoryLine, RiLoader4Line } from "react-icons/ri";
import { BsFeather } from "react-icons/bs";
import { useNavigate } from 'react-router';
import type { Carta } from "../types";

const FormularioCarta = ({ onCrear, loading }: { onCrear: (carta: Carta) => Promise<{ success: boolean; error?: any }>; loading: boolean }) => {
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

  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const nuevaCarta: Carta = {
      id: Date.now(),
      nombre: formData.nombre,
      poder: Number(formData.poder),
      defensa: Number(formData.defensa),
      hp: Number(formData.hp),
      imagen: formData.imagen,
      descripcion: formData.descripcion,
      tipo: formData.tipo,
      habilidadUltimate: formData.habilidadUltimate
    };

    const result = await onCrear(nuevaCarta);
    
    if (result.success) {
      navigate('/');
    } else {
      setError("Error al crear la carta. Intenta de nuevo.");
    }
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-6 overflow-hidden bg-[#030303]">
      {/* ... efectos de fondo ... */}

      <div className="relative z-10 w-full max-w-4xl bg-white/3 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-[0_0_80px_rgba(0,0,0,0.8)]">
        {/* ... header ... */}

        {error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-2xl text-red-400 text-sm font-mono">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {/* ... todos los inputs igual ... */}

          <div className="md:col-span-2 pt-6">
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full py-6 rounded-2xl transition-all duration-500 overflow-hidden ${
                loading 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-cyan-500 hover:bg-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.25)]'
              }`}
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 text-black font-black uppercase italic tracking-tighter text-xl flex items-center justify-center gap-3">
                {loading ? (
                  <>
                    <RiLoader4Line className="animate-spin text-2xl" />
                    CREANDO CARTA...
                  </>
                ) : (
                  <>
                    Crear Carta <RiAddLine className="text-2xl" />
                  </>
                )}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioCarta;