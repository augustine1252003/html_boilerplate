const myButton = document.getElementById('master');

myButton.addEventListener('click', toggleStyle);

function toggleStyle(){
    myButton.classList.toggle('button');
}