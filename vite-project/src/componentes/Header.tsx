import type { HeaderProps } from '../types/index';

function Header({ busqueda, setBusqueda }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-red-900/90 via-black to-red-900/90 border-b-2 border-red-600">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          
          <div className="flex items-center gap-3">
            <div className="text-3xl animate-pulse">🥋</div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 bg-clip-text text-transparent">
              JUEGO DE CARTAS
            </h1>
          </div>
          
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar luchador..."
              className="w-full px-4 py-2 pl-10 bg-black/70 border-2 border-red-700 rounded-lg 
                text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                focus:ring-red-500 focus:border-red-500 transition-all"
            />
            <div className="absolute left-3 top-2.5 text-red-500">🔍</div>
          </div>
          
        </div>
      </div>
    </header>
  );
}

export default Header;