//Busca y selecionar el primer elemento del DOM que coincide
//con el selector CSS que puede ser: una clase,
// id, [], por nombre de atributos, y asi
//sucesivamente, se puede buscar Los diferentes selectores disponibles
let incrementar=document.querySelector('.incrementar');
let disminuir=document.querySelector('.disminuir');
let reset=document.querySelector('.reset');
let text =document.querySelector('.text');

let contador=0; //almacenar el valor actual del contador
// addEventListener Añade una escucha del evento indicado (primer parámetro),
// el (segundo parámetro).
// y en el caso de que ocurra, se ejecutará la función asociada indicada en
incrementar.addEventListener('click', ()=>{
    contador++; //se incrementa el contador
    text.textContent=contador;
    //Con textContent se modifica el contenido en texto plano,
    //con innerhtml se modifica a nivel html es decir que se podra agregar
    // etiquetas html en el texto y js y lo va a interpretar como html.
});

disminuir.addEventListener('click', ()=>{
    contador--; //se decrementa el contador
    text.textContent=contador;
});

reset.addEventListener('click', ()=>{
    contador=0; //se inicializa el contador a e
    text.textContent=contador;

})