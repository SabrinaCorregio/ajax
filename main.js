document.addEventListener('DOMContentLoaded', () => {
    const avatar = document.getElementById('avatar');
    const nome = document.getElementById('name');
    const username = document.getElementById('username');
    const repositorios = document.getElementById('repo');
    const seguidores = document.getElementById('seguem');
    const seguindo = document.getElementById('seguin');
    const perfil = document.getElementById('perfil');

    (async () => {
        try {
            // Requisição Ajax via Fetch API para seu perfil
            const req = await fetch('https://api.github.com/users/SabrinaCorregio');
            
            if (!req.ok) {
                throw new Error('Erro na requisição');
            }

            const dados = await req.json();

            // Preenchendo os dados na página
            avatar.src = dados.avatar_url;
            nome.textContent = dados.name || "Nome não informado";
            username.textContent = `@${dados.login}`;
            repositorios.textContent = dados.public_repos;
            seguidores.textContent = dados.followers;
            seguindo.textContent = dados.following;
            perfil.href = dados.html_url; // Direciona para seu perfil
        } catch (err) {
            console.error('Erro - Perfil:', err.message);
            alert('Erro ao carregar o perfil, tente novamente!');
        }
    })();
});
