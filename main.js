document.addEventListener('DOMContentLoaded', () => {
    const avatar = document.getElementById('avatar');
    const nome = document.getElementById('name');
    const username = document.getElementById('username');
    const repositorios = document.getElementById('repo');
    const seguidores = document.getElementById('seguem');
    const seguindo = document.getElementById('seguin');
    const perfil = document.getElementById('perfil');

    (async () => {
            try{
            const req = await fetch('https://github.com/SabrinaCorregio');
            if (!req.ok){
                alert('Erro na requisição')
                throw new Error('Erro na requisição');
            }
            
            const dados = await req.json();
            
            avatar.src = dados.avatar_url;
            nome.textContent = dados.name;
            username.textContent = `@${dados.login}`;
            repositorios.textContent = dados.public_repos;
            seguidores.textContent = dados.followers;
            seguindo.textContent = dados.following;
            perfil.href = dados.html_url;
            } catch {
                console.log('Erro - Perfil', err.message)
                alert('Erro ao carregar o perfil, tente novamente!')
            }
        })();
});