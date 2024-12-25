// Interpretar IMC

function InterpretarIMC(indiceDeMasaCorporal) {
    if (indiceDeMasaCorporal < 18.5){
        console.log("Bajo Peso");
    } else if (indiceDeMasaCorporal <= 24.9){
        console.log("Normal");
    } else if (indiceDeMasaCorporal <= 29.9){
        console.log("Sobrepeso");
    } else {
        console.log("Obesidad");
    }
}

InterpretarIMC(32.2);