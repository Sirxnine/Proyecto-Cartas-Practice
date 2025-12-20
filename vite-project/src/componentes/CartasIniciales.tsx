import type { Carta, GrupoAnime } from "../types";

export const cartasGOH: Carta[] = [
  {
    id: 1,
    nombre: "Jin Mori",
    imagen: "https://i.pinimg.com/736x/8a/75/09/8a7509b72592884c71e10d6b24d367f2.jpg",
    descripcion: "Nieto de Jin Taejin y portador del poder del Dios Mono Sun Wukong. Protagonista principal del torneo God of High School.",
    tipo: "Luchador",
    rareza: "SS",
    poder: 9800,
    defensa: 9000,
    habilidadPasiva: "Renovación - Se cura automáticamente cuando su salud está baja",
    habilidadUltimate: "Jeabongchim x250.000 - Aumenta su poder 250,000 veces por 3 turnos",
    anime: "GOH"
  },
  {
    id: 2,
    nombre: "Han Daewi",
    imagen: "https://i.pinimg.com/1200x/e8/8a/7d/e88a7da089fbcf95163b69f1e4761d5b.jpg",
    descripcion: "El Rey de la Tierra, poseedor de una fuerza sobrehumana y gran inteligencia táctica. Mejor amigo de Mori.",
    tipo: "Luchador",
    rareza: "S",
    poder: 9200,
    defensa: 8800,
    habilidadPasiva: "Concentración Perfecta - No pierde la calma en combate",
    habilidadUltimate: "Puño del Dragón - Golpe que concentra toda su energía en un ataque devastador",
    anime: "GOH"
  },
  {
    id: 3,
    nombre: "Park Il-Pyo",
    imagen: "https://i.pinimg.com/736x/69/1a/ea/691aea1b816e581e75f4640ddbbe7a56.jpg",
    descripcion: "El Zorro de Seis Colas, usuario del poder del zorro de nueve colas y maestro del taekwondo.",
    tipo: "Mago",
    rareza: "A",
    poder: 8200,
    defensa: 7800,
    habilidadPasiva: "Transformación Zorro - Puede transformarse parcialmente",
    habilidadUltimate: "Ataque de Nueve Colas - Libera todo el poder del zorro",
    anime: "GOH"
  },
  {
    id: 4,
    nombre: "Park Mujin",
    imagen: "https://art.ngfiles.com/images/6240000/6240369_1456317_kyoyukannang_mujin-park.59563287a6cb3922fe2a447ce05ca58b.webp?f1732703557",
    descripcion: "Presidente de la Fundación y organizador del torneo God of High School. Extremadamente rico e influyente.",
    tipo: "Estratega",
    rareza: "SS",
    poder: 8500,
    defensa: 9500,
    habilidadPasiva: "Maestro Táctico - Siempre tiene un plan de respaldo",
    habilidadUltimate: "Ejército de Androides - Invoca un ejército de robots para luchar",
    anime: "GOH"
  }
];
export const cartasNaruto: Carta[] = [
  {
    id: 1,
    nombre: "Naruto Uzumaki",
    imagen: "https://preview.redd.it/reasons-why-naruto-uzumaki-is-the-best-hokage-v0-vq9pms038bya1.jpg?width=640&crop=smart&auto=webp&s=12150642ae4b9cb97122ecf1b2e885db5a9c260f",
    descripcion: "Ex-Hokage de la Hoja.",
    tipo: "Luchador",
    rareza: "SS",
    poder: 9800,
    defensa: 9000,
    habilidadPasiva: "Chakra del Kyuubi - Regeneración acelerada",
    habilidadUltimate: "Modo Sabio - Multiplica por 10 todos sus atributos",
    anime: "Naruto Shippuden"
  }
]
export const cartasEjemplo: Carta[] = [...cartasGOH, ...cartasNaruto];
export const gruposAnime: GrupoAnime[] = [
  {
    id: "GOH",
    nombre: "The God of High School",
    imagenPortada: "https://images.cdn2.buscalibre.com/fit-in/360x360/44/d2/44d295aba3b3cd9df349944d737eb28e.jpg",
    descripcion: "Torneo de artes marciales donde luchadores con poderes sobrenaturales compiten por un deseo.",
    cantidadCartas: cartasGOH.length
  },
  {
    id: "Naruto Shippuden",
    nombre: "Naruto",
    imagenPortada: "https://i.pinimg.com/736x/b1/2b/97/b12b9782aa863b75cdbee3a35ab62bd2.jpg",
    descripcion: "Historia de un ninja adolescente que busca ser reconocido como Hokage.",
    cantidadCartas: cartasNaruto.length
  }
];