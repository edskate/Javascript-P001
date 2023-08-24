function cumprimentar(nome) {
    console.log("Olá" + nome);
}
// invocacao = nome()

cumprimentar("Matheus");

// esxop de varáveis

let cor = "azul";

function mostrarCor() {
    let cor = "verde";

    console.log("cor");

    mostrarCor();
}