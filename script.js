const gatoDato = [
    "Los gatos pasan aproximadamente el 70% de su vida durmiendo.",
    "Al igual que las huellas dactilares humanas, cada gato tiene un patrón nasal único.",
    "Los gatos pueden hacer más de 100 sonidos vocales, mientras que los perros solo pueden hacer alrededor de 10.",
    "Su columna vertebral flexible les permite contorsionarse y caber en espacios reducidos.",
    "El ronroneo no siempre indica felicidad; también puede ser una forma de autocalmarse.",
    "Los gatos maúllan a los humanos, pero casi nunca a otros gatos.",
    "El cerebro de un gato es biológicamente más similar al de un humano que el de un perro.",
    "Los estudios han demostrado que la frecuencia del ronroneo de un gato puede ayudar a curar los huesos y los músculos.",
    "El ronroneo de un gato puede ayudar a sanar huesos y músculos.",
    "Los gatos tienen 32 músculos en cada oreja, que les permiten girarlas en casi cualquier dirección.",
    "Los gatos tienen una memoria a largo plazo excepcional, especialmente cuando se trata de experiencias que afectan sus emociones.",
    "Los gatos tienen un tercer párpado llamado 'membrana nictitante' que protege sus ojos.",
    "Los gatos pueden saltar hasta seis veces su longitud.",
    "Los gatos duermen entre 12 y 16 horas al día.",
    "Los gatos pueden girar sus orejas 180 grados",
    "Los gatos tienen huesos en la cola que les ayudan a equilibrarse.",
    "Son carnívoros obligados, necesitan proteína animal.",
    "La mayoría de los gatos odian los cítricos.",
    "Su cola refleja su estado de ánimo.",
    "Pueden reconocer su nombre, pero a veces lo ignoran.",
    "Sus garras siempre crecen, por eso las afilan.",
    "En el antiguo Egipto, los gatos eran sagrados.",
    "Un gato casero vive en promedio 15 años."
];

const curiosidadRandom = () =>{
    const dato = document.getElementById("gatoDato");
    const randomNum = Math.floor(Math.random()* gatoDato.length);
    const datoTexto = dato.querySelector("p");

    datoTexto.style.opacity = 0;

    setTimeout(() => {
        datoTexto.textContent = gatoDato[randomNum];
        datoTexto.style.opacity = 1;
    }, 200);
}

document.getElementById("nuevoDato").addEventListener("click", curiosidadRandom);