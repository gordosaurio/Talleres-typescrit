export class Serie {

    id: number;
    nombre: string;
    canal: string;
    temporadas: number;
    descripcion: string;
    web: string;
    foto: string;
    
    constructor(id: number,nombre: string,canal: string,temporadas: number,descripcion: string,web: string,foto: string) {
      this.id = id;
      this.nombre = nombre;
      this.canal = canal;
      this.temporadas = temporadas;
      this.descripcion = descripcion;
      this.web = web;
      this.foto = foto;
    }
}