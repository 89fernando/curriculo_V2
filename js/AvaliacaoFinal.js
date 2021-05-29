const fernando = {
    sobre: {
        nome: 'Fernando Soares',
        endereco: 'Eng.Fernando Mendes, 90',
        email: 'fernando89@gmail.com',
        telefone: '(51)981626259',
        descricao: 'Sou Estudante fullstack na GROWDEV.',
        redes: {
            linkedin: 'https://www.linkedin.com/in/89fernando/',
            gitHub: 'https://github.com/89fernando',
            twitter:'https://twitter.com/feernando',
            facebook:'https://www.facebook.com/89fernando',
        },
        
    },

    conhecimentos: ['Possuo conhecimentos básicos em: ' + 'HTML','JS','CSS'],

    objetivo: {
        pessoais: 'Meus objetivos pessoais estão ligados a estar feliz e curtir meus amigos e familia.',
        profissionais: 'Profissionalmente pretendo dominar todas as stacks a qual me proponho a estudar.',

    }

}

function carregarElementosRedesSociais (){
    const elementoLinkedin = document.getElementById('linkedin');
    elementoLinkedin.href = fernando.sobre.redes.linkedin;
    
    const elementoGitHub = document.getElementById('gitHub');
    elementoGitHub.href = fernando.sobre.redes.gitHub;
    
    const elementoTwitter = document.getElementById('twitter');
    elementoTwitter.href = fernando.sobre.redes.twitter;
    
    const elementoFacebook = document.getElementById('facebook');
    elementoFacebook.href = fernando.sobre.redes.facebook;
}

function carregarElementosSobre (){
    const elementoNome = document.getElementById('nome');
    elementoNome.innerHTML += fernando.sobre.nome;
    
    const elementoEndereco = document.getElementById('endereco');
    elementoEndereco.innerHTML += fernando.sobre.endereco;
    
    const elementoEmail = document.getElementById('email');
    elementoEmail.innerHTML += fernando.sobre.email;
    
    const elementoDescricao = document.getElementById('descricao');
    elementoDescricao.innerHTML += fernando.sobre.descricao;
    
    carregarElementosRedesSociais();
}


function carregarElementosConhecimentos (){
    const elementoConhecimentos = document.getElementById('conhecimentos');
    elementoConhecimentos.innerHTML += fernando.conhecimentos;
}

function carregarElementosObjetivo (){
    const elementoObjetivoPessoais = document.getElementById('objetivopessoais');
    elementoObjetivoPessoais.innerHTML += fernando.objetivo.pessoais;

    const elementosObjetivoProfissionais = document.getElementById('objetivoprofissionais');
    elementosObjetivoProfissionais.innerHTML += fernando.objetivo.profissionais;

}

function carregarElementosHome() {
    const elementoNome = document.getElementById('nome');
    elementoNome.innerHTML += fernando.sobre.nome;
    
    const elementoEndereco = document.getElementById('endereco');
    elementoEndereco.innerHTML += fernando.sobre.endereco;
    
    const elementoEmail = document.getElementById('email');
    elementoEmail.innerHTML += fernando.sobre.email;
       
    carregarElementosRedesSociais();
}
