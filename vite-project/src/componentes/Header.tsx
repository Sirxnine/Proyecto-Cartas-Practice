import type { HeaderProps } from '../types/index';

function Header({ busqueda, setBusqueda }: HeaderProps) {
  return (
    <header className="border-b border-red-700/20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-700 to-[#330511] flex items-center justify-center text-2xl shadow-md">
              🥋
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-red-400 via-red-200 to-red-400 bg-clip-text text-transparent">
              JUEGO DE CARTAS
            </h1>
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar luchador..."
              className="w-full px-4 py-2 pl-10 bg-black/30 border border-white/5 rounded-lg 
                text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 
                focus:ring-red-600 focus:border-red-600 transition-all backdrop-blur-sm"
            />
            <div className="absolute left-3 top-2.5 text-red-400">🔍</div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;