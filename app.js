const btn = document.querySelector('.btn');
const btnTeste = document.querySelector('.btn_teste');
const btnApagarTudo = document.querySelector('.apagar_tudo');
const input = document.querySelector('.input');
const space = document.querySelector('.space');

let id = 0;
let tarefas = [];

btnApagarTudo.style.display = 'none';

const criarTarefa = () => {
    tarefas.push({tarefa: input.value, id});
    console.log(tarefas);
    input.value = '';
    imprimirTarefa(id);
    id += 1;
    if (tarefas.length > 0) btnApagarTudo.style.display = 'inline-block';
}

const imprimirTarefa = (id) => {
    space.innerHTML = '';
    for (let i of tarefas) {
        space.innerHTML += `<li>
        ${i.tarefa}
        <button class="btn btn_apagar" id="${id}">Remover</button>
        </li>`;
        const apagarTarefa = document.querySelector('.btn_apagar');
        apagarTarefa.addEventListener('click', () => console.log(i.id));
        // id+=1;
    }
}

const apagaTudo = () => {
    tarefas = [];
    imprimirTarefa();
    console.log(tarefas);
    console.log('APAGUEI TUDOOO!');
    btnApagarTudo.style.display = 'none';
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value) criarTarefa();
    else console.log(input.value.length);
});

btnApagarTudo.addEventListener('click', () => {
    apagaTudo();
})