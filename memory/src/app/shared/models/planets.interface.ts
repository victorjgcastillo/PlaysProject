//se crea un modelo y dentro de el una interface
export interface PlanetInterface{
  id: number;
  name: string;
  img: string;
  checked?: boolean;//opcional porque por defecto estas caracteristicas no la tienen
  selected?: boolean
}
