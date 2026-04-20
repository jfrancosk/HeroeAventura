class Heroe {
    nombre: string;
    nivel: number;
    estaVivo: boolean;
    fechaCreación: Date;
    habilidades: string;
    estadisticas: string;

    constructor(nombre: string, habilidades: string) {
        this.nombre = nombre;
        this.nivel = 1;
        this.estaVivo = true;
        this.fechaCreación = (new Date);
        this.habilidades = habilidades;
        this.estadisticas = "100";
    }
    
    recibirDanio(puntos: number): void {
         puntos = 100-1;
         if (puntos==0){
            this.estaVivo=false
         }
    }

    subirNivel(): void {
        this.nivel = this.nivel + 1
    }

    generarFicha(): string {
        return "El Heroe " + this.nombre +"de nivel" + this.nivel +"estado" +this.estaVivo
    }

}