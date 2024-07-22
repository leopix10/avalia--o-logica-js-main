let convidado = document.getElementById("convidado");
let convidados = [];
let listaFinal = document.getElementById("lista_convidados");

function cadastro() {
    if (convidado.value == '') {
        alert('Adicione um convidado!');
    } else {
        if (convidados.length < 10) {
            convidados.push(convidado.value);
            convidado.value = '';
        } else {
            alert('A lista está cheia! Remova algum convidado antes de adicionar outro!');
        }       
    }
}

function remover() {
    if (convidado.value == '') {
        alert('Escolha o convidado que deseja remover!')
    } else {
        let removerConvidado = convidados.indexOf(convidado.value);

        if (removerConvidado >= 0) {
            convidados.splice(removerConvidado, 10);
            convidado.value = '';
            listaFinal.innerHTML = '';
        } else {
            alert('Este nome não esta na sua lista de convidados!');
        }
    }
}

function exibir() {
    listaFinal.innerHTML = '';
    for (let i = 0; i < convidados.length; i++) {
        listaFinal.innerHTML += `<li>${convidados[i]}</li>`;
        
    }
}





