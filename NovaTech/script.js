function trocar_tela() {

    var pesquisa = document.getElementById('pesquisa').value;

    const pesquisa_brasil = ['matue', 'Matue', 'matuê', 'Matuê', 'Roger Guedes', 'roger guedes',
        'Roger guedes', 'Thais Carla', 'Thaís Carla', 'Thais carla', 'thais carla'];

    const pesquisa_mundo = ['Travis Scott', 'Travis scott', 'travis scott', 'Elon Musk', 'Elon musk',
        'elon musk', 'Mark Zuckerberg', 'Mark zuckerberg', 'mark zuckerberg', 'loki', 'Loki'];

    const pesquisa_tec = ['bard', 'Bard', 'Apple Vision Pro', 'apple vision pro', 'Apple vision pro', 'apple',
        'ChatGPt', 'Chatgpt', 'ChatGPT-4'];

    const pesquisa_home = ['Neymar', 'neymar', 'Barbie', 'barbie', 'gta', 'GTA', 'GTA 6', 'gta 6', 'Cruzeiro',
    'cruzeiro', 'ney', 'Ney'];

    const pesquisa_geral = pesquisa_home.concat(pesquisa_brasil, pesquisa_mundo, pesquisa_tec);

    if ((pesquisa.length == 0)) {
        alert('Digite algum tema/notícia na barra de pesquisa');
    }
    else if (!(pesquisa_geral.includes(pesquisa))) {
        alert('Desculpe mas não encontramos nenhuma notíticia com o tema pesquisado');
    }

    for (let i = 0; i < pesquisa_brasil.length; i++) {
        if (pesquisa == pesquisa_brasil[i]) {
            location.href = "principais_noticias_brasil.html";
            break;
        }
    }

    for (let i = 0; i < pesquisa_mundo.length; i++) {
        if (pesquisa == pesquisa_mundo[i]) {
            location.href = "principais_noticias_mundo.html";
            break;
        }
    }

    for (let i = 0; i < pesquisa_tec.length; i++) {
        if (pesquisa == pesquisa_tec[i]) {
            location.href = "tecnologia.html";
            break;
        }
    }

    for (let i = 0; i < pesquisa_home.length; i++) {
        if (pesquisa == pesquisa_home[i]) {
            location.href = "index.html";
            break;
        }
    }

}


function enviar_email() {

    var nome = document.getElementById('nome').value;
    var sobre_nome = document.getElementById('sobre_nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var msg = document.getElementById('experiencia').value;


    var campoData = document.getElementById('dtnasc');
    var valorData = campoData.value;


    var radios = document.getElementsByName('genero');

        var opcaoSelecionada;
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                opcaoSelecionada = radios[i].value;
                break;
            }
        }

    var checkboxes = document.getElementsByName('assunto');

    var selecoes = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selecoes.push(checkboxes[i].value);
        }
    }


    if (nome.length > 0 && sobre_nome.length > 0 && email.length > 0 && senha.length > 0 && valorData.length > 0 && msg.length > 0){
        alert('Informações enviadas com sucesso!!\n\nNome: '+nome+' '+sobre_nome+'\nSexualidade: '+opcaoSelecionada+'\nData de nascimento: '+valorData+'\nE-mail: '+email+'\nSenha: '+senha+'\n\nAssunto da mensagem: '+'['+selecoes+']'+'\n'+'"'+msg+'"')
    }
    else {
        alert('Informações incompletas para o envio!!')
    }
    
    console.log(nome)
    console.log(sobre_nome)
    console.log(opcaoSelecionada)
    console.log(valorData)
    console.log(email)
    console.log(senha)
    console.log(selecoes)
    console.log(msg)

}





