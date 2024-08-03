/*Concepto de DOM
Document Object Model conocido popularmente como DOM es una representación de la estructura de un documento HTML o XML. El DOM permite que los lenguajes de programación accedan y manipulen el contenido, la estructura y el estilo de un documento web de manera dinámica.*/

//GetElementById

let cambio = document.getElementById("elementID")
cambio.textContent = "Texto Nuevo"

//GetElementsByClassName

let lista= Array.from(document.getElementsByClassName("elementClass"))

lista.forEach(element => {
    element.style.backgroundColor = "red"
});

//GetElementByTagName

