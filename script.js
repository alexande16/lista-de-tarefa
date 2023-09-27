const btn = document.querySelector('.button')
const input = document.querySelector('.input-task')
const taskList = document.querySelector('.task-list')

let myList = []

function addTask() {
    myList.push(input.value)
    input.value = ''
    showTask()
}
function showTask() {
    let novaLi = ''

    myList.forEach((tarefas, posicao) => {
        novaLi = novaLi + `
     <li class="task">
        <p>${tarefas}</p>
        <img src="imagens/check-img.png" alt="img-check"onclick="deletar(${posicao})">
    </li>
     `
    })

    taskList.innerHTML = novaLi
}
function deletar(posicao) {
    myList.splice(posicao, 1);
    
    showTask() 
}

btn.addEventListener('click', addTask)