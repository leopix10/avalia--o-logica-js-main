function calcular() {

    let alunos = document.getElementById("alunos").value;

    let alunosPcd = document.getElementById("alunos_pcd").value;

    
    let totalAlunos = parseInt(alunos) + parseInt(alunosPcd);


    let porcentagem = alunosPcd/totalAlunos*100;

    document.getElementById("percentual_pcd").innerText = porcentagem.toFixed(1);

    document.getElementById("total_alunos").innerText = totalAlunos;

}