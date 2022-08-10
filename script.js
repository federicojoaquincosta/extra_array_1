const imagenesProductos = [
    "https://http2.mlstatic.com/D_NQ_NP_2X_619126-MLA50232132766_062022-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_2X_847906-MLA49763193559_042022-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_991401-MLA31351342525_072019-O.webp"
];
const nombreProductos = ["tv", "celular", "pc"];

function mostrarProductos(arrayTexto, arrayImagenes) {
    document.querySelector("#productos").innerHTML = ``
    for (i = 0; i < arrayTexto.length; i++) {
        document.querySelector("#productos").innerHTML += `
            <h1> producto ${arrayTexto[i]} <h1>
            <br>
            <img src=${arrayImagenes[i]} alt="" width="200" height="200">
            <br>
            `
    }

};
mostrarProductos(nombreProductos,imagenesProductos);

nombreProductos.push("tablet", "calculadora");
imagenesProductos.push("https://http2.mlstatic.com/D_NQ_NP_864297-MLA45629129579_042021-O.webp","https://http2.mlstatic.com/D_NQ_NP_650805-MLA42396523656_062020-O.webp");

mostrarProductos(nombreProductos,imagenesProductos);

function agregar() {
nombreProductos.push(document.querySelector("#inputnombre").value);
imagenesProductos.push(document.querySelector("#inputimagen").value);
mostrarProductos(nombreProductos,imagenesProductos);

};