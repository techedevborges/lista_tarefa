// Elementos
let input = document.querySelector('input');
let lista = document.querySelector('ul');

input.addEventListener('keyup', handleKeyUp);

function handleKeyUp(e) {
    if(e.key === 'Enter') {
        let newLi = document.createElement('li');

        newLi.innerHTML = input.value;

        lista.appendChild(newLi);

        input.value = '';
    }
}