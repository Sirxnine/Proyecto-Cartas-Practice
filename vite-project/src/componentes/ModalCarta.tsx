import { useEffect, useState } from 'react';
import type { ModalCartaProps } from '../types/index';

function ModalCarta({ carta, isOpen, onClose }: ModalCartaProps) {
  const [visible, setVisible] = useState<boolean>(isOpen);
  const [closing, setClosing] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setClosing(false);
    } else if (visible) {
      setClosing(true);
      const t = setTimeout(() => setVisible(false), 360);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const handleRequestClose = () => {
    setClosing(true);
    // wait for animation then call parent's onClose
    setTimeout(() => {
      setVisible(false);
      onClose();
    }, 320);
  };

  if (!visible || !carta) return null;

  const backdropClass = closing ? 'backdrop-fade-out' : 'backdrop-fade-in';
  const panelClass = closing ? 'modal-pop-out' : 'modal-pop-in';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity ${backdropClass}`}
      onClick={handleRequestClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle de ${carta.nombre}`}
    >
      <div
        className={`w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-red-700
          bg-gradient-to-br from-[#071226] to-[#020617] shadow-2xl ${panelClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-red-500/20">
          <h2 className="text-2xl font-bold text-white">{carta.nombre}</h2>
          <button
            onClick={handleRequestClose}
            className="w-10 h-10 rounded-full bg-black/30 border border-red-700 flex items-center justify-center
              text-white hover:bg-red-600 hover:text-white transition-colors shadow-sm"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <div className="flex-1">
              <img
                src={carta.imagen}
                alt={carta.nombre}
                className="w-full h-auto max-h-125 object-contain rounded-lg border-2 border-red-600/40 shadow-inner"
                onError={(e) => {
                  e.currentTarget.src = 'https://preview.redd.it/characters-that-can-be-recognized-with-just-their-silhouette-v0-ytm08da795qc1.jpg?width=374&format=pjpg&auto=webp&s=854ae5998b018e53a292ef0adc1f5716d89777f8';
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="rounded-lg p-4 bg-gradient-to-br from-red-900/30 to-black/10 border border-red-800">
                <p className="text-red-300 text-sm">💥 PODER</p>
                <p className="text-white font-bold text-2xl">{carta.poder}</p>
                <div className="h-2 bg-red-900 rounded-full mt-2">
                  <div 
                    className="h-full bg-red-500 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${(carta.poder / 10000) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="rounded-lg p-4 bg-gradient-to-br from-blue-900/30 to-black/10 border border-blue-800">
                <p className="text-blue-300 text-sm">🛡️ DEFENSA</p>
                <p className="text-white font-bold text-2xl">{carta.defensa}</p>
                <div className="h-2 bg-blue-900 rounded-full mt-2">
                  <div 
                    className="h-full bg-blue-500 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${(carta.defensa / 10000) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-black/30 rounded-lg p-4 border border-white/5">
                <p className="text-gray-400 text-sm">TIPO</p>
                <p className="text-white font-bold text-lg">{carta.tipo}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">📜 DESCRIPCIÓN</h3>
              <p className="text-gray-300 leading-relaxed">{carta.descripcion}</p>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg p-4 border border-green-700/30 bg-green-900/10">
                <h3 className="text-lg font-bold text-green-300 mb-2">⚙️ HABILIDAD PASIVA</h3>
                <p className="text-gray-300">{carta.habilidadPasiva}</p>
              </div>
              
              <div className="rounded-lg p-4 border border-yellow-700/30 bg-yellow-900/10">
                <h3 className="text-lg font-bold text-yellow-300 mb-2">💫 HABILIDAD ULTIMATE</h3>
                <p className="text-gray-300">{carta.habilidadUltimate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCarta;