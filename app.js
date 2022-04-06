const btn = document.querySelector('.btn');
const btnTeste = document.querySelector('.btn_teste');
const btnApagarTudo = document.querySelector('.apagar_tudo');
const input = document.querySelector('.input');
const space = document.querySelector('.space');

let id = 1  ;
let tarefas = [];

btnApagarTudo.style.display = 'none';

const criarTarefa = () => {
    tarefas.push({tarefa: input.value, id});
    console.log(tarefas);
    input.value = '';
    imprimirTarefa(id);
    id++;
    if (tarefas.length > 0) btnApagarTudo.style.display = 'inline-block';
}

const imprimirTarefa = () => {
    space.innerHTML = '';
    for (let i of tarefas) {
        const li = document.createElement('li');
        li.classList.add('lista');
        const btnApagar = document.createElement('button');
        const separador = document.createElement('div');
        separador.classList.add('separador')
        separador.appendChild(li);
        separador.appendChild(btnApagar);
        space.appendChild(separador);
        btnApagar.classList.add('btn');
        btnApagar.classList.add('btn_apagar');
        btnApagar.classList.add(i.id);
        li.innerHTML = i.tarefa;
        btnApagar.innerHTML = 'delete';
        btnApagar.addEventListener('click', () => {
            tarefas = tarefas.filter(val => {
                return val.id !== parseInt(btnApagar.classList[2]);
            });
            console.log(tarefas);
            imprimirTarefa();
        });
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