class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    drinkSake() {
        this.salud += 10;
    }
}

class Sensei extends Ninja {
    constructor(
        nombre,
        salud = 200,
        velocidad = 10,
        fuerza = 10,
        sabiduria = 10
    ) {
        super(nombre, salud);
        this.velocidad = velocidad;
        this.fuerza = fuerza;
        this.sabiduria = sabiduria;
    }
    speakWisdom() {
        console.log(
            "La sabiduría del sensei dice: El camino hacia la victoria no es fácil pero es inevitable"
        );
        super.drinkSake();
    }
}

const sensei1 = new Sensei("Master Splinter");
console.log(sensei1);
sensei1.speakWisdom();
console.log(sensei1);