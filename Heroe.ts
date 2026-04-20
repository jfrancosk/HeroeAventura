class Heroe {
    nombre: string;
    nivel: number;
    estaVivo: boolean;
    fechaCreación: Date;
    habilidades: string;
    estadisticas: {fuerza: number;agilidad: number};

    constructor(nombre: string, habilidades: string) {
        this.nombre = nombre;
        this.nivel = 1;
        this.estaVivo = true;
        this.fechaCreación = new Date();
        this.habilidades = habilidades;
        this.estadisticas = {fuerza: 10, agilidad: 10};
    }
    
    recibirDanio(puntos: number): void {
         puntos = 100-1;
         if (puntos==0){
            this.estaVivo=false
         }
    }

    subirNivel(): string{
        this.nivel = this.nivel + 1
        this.estadisticas.agilidad+= 2;
        return "El Heroe " + this.nombre +" ha subido a nivel " + this.nivel;
    }

    generarFicha(): string {
        return "El Heroe " + this.nombre +"de nivel" + this.nivel +"estado" +this.estaVivo
    }

}