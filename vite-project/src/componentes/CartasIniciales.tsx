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
    defensa: 9800,
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
    id: 101,
    nombre: "Naruto Uzumaki",
    imagen: "https://preview.redd.it/reasons-why-naruto-uzumaki-is-the-best-hokage-v0-vq9pms038bya1.jpg?width=640&crop=smart&auto=webp&s=12150642ae4b9cb97122ecf1b2e885db5a9c260f",
    descripcion: "Ex-Hokage de la Hoja.",
    tipo: "Ninja",
    rareza: "SS",
    poder: 9800,
    defensa: 9000,
    habilidadPasiva: "Chakra del Kyuubi - Regeneración acelerada",
    habilidadUltimate: "Modo Sabio - Multiplica por 10 todos sus atributos",
    anime: "Naruto Shippuden"
  },
  {
    id: 102,
    nombre: "Sasuke Uchiha",
    imagen: "https://i.pinimg.com/736x/41/a5/a8/41a5a88487ce52ec3901f8721187c3a5.jpg",
    descripcion: "Último sobreviviente del Clan Uchiha.",
    tipo: "Ninja",
    rareza: "SS",
    poder: 9200,
    defensa: 8200,
    habilidadPasiva: "Sharingan - Copia técnicas y predice movimientos",
    habilidadUltimate: "Susano'o Perfecto - Armadura de chakra invulnerable",
    anime: "Naruto Shippuden"
  },
  {
    id: 103,
    nombre: "Minato Namikaze",
    imagen: "https://wallpapers.com/images/hd/minatonamikaze-reanimado-ij3gxuijz1ec0iin.jpg",
    descripcion: "Cuarto Hokage, conocido como 'Relámpago Amarillo de Konoha'. Padre de Naruto.",
    tipo: "Ninja",
    rareza: "S",
    poder: 8900,
    defensa: 8700,
    habilidadPasiva: "Teleportación Instantánea - Se mueve a velocidad relámpago",
    habilidadUltimate: "Rasengan Volátil - Esfera de chakra de máxima potencia",
    anime: "Naruto Shippuden"
  },
  {
    id: 104,
    nombre: "Madara Uchiha",
    imagen: "https://u-mercari-images.mercdn.net/photos/m38030209152_1.jpg",
    descripcion: "Fundador de Konoha junto a Hashirama. Busca crear un mundo de ilusiones perfectas.",
    tipo: "Ninja",
    rareza: "SS",
    poder: 9800,
    defensa: 9200,
    habilidadPasiva: "Rinnegan Eternal - Ve chakra y controla los seis caminos",
    habilidadUltimate: "Meteoritos del Cielo - Invoca meteoritos gigantes desde la atmósfera",
    anime: "Naruto Shippuden"
  }
]
export const cartasSoloLeveling:Carta[] = [
  {
    id: 201,
    nombre: "Sung Jin Woo",
    imagen: "https://preview.redd.it/sung-jin-woo-edit-by-me-v0-67iuvihc30fc1.png?width=640&crop=smart&auto=webp&s=211aa45810ea39339055ffcc70befaf9d32cb048",
    descripcion: "Monarca de las Sombras",
    tipo: "Monarca",
    rareza: "SS",
    poder: 9800,
    defensa: 9800,
    habilidadPasiva: "Sistema de Monarca - Puede aumentar de forma constante sus atributos",
    habilidadUltimate: "Sombras - Manifiesta un ejercito de mas de 1000 soldados sombra",
    anime: "Solo Leveling"
  }
]

export const cartasEjemplo: Carta[] = [...cartasGOH, ...cartasNaruto, ...cartasSoloLeveling];
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
  },
  {
    id: "Solo Leveling",
    nombre: "Solo Leveling",
    imagenPortada: "https://pendulo.com/imagenes_grandes/9798400/979840090193.GIF",
    descripcion: "Un mundo donde aparecen portales llenos de monstruos, obligando a humanos con poderes (cazadores) a luchar para proteger a la humanidad",
    cantidadCartas: cartasSoloLeveling.length
  }
];