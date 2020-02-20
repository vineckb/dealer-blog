## Especificações

* Cadastro de usuário com nome, e-mail e senha
* Area de login solicitando e-mail e senha
* Página para edição de informações pessoais
* Cadastro de post com Título, Texto e Imagem
* Listagem de posts publicados, com título, imagem, autor e data de publicação. Quando não estiver logado, os posts devem estar apenas para leitura. Caso o usuário esteja logado, poderá editar e  excluir seus próprios posts
* Página para configuração de perfis de acesso. Está página estará disponível apenas para usuários do com perfil de administrador, nela deverá existir uma lista dos usuários cadastrados no sistema, podendo o administrador dar a outro usuário o mesmo perfil de acesso à outros usuários do sistema.
* O Admin poderá também na listagem de posts, editar e excluir posts de outros usuários.


## Rodando a aplicação

Para rodar a aplicação é necessário ter previamente instalado o Docker e Docker Compose. Você pode encontrar instruções de instalação neste link: https://hub.docker.com/editions/community/docker-desktop-ent

````bash
# Download do código
git clone https://github.com/vineckb/dealer-blog

# Acessar pasta do ambiente de desenvolvimento
cd dealer-blog/laradock

# Iniciar o servidor
docker-compose up -d nginx mysql phpmyadmin redis workspace

# Construir e popular o banco de dados
docker-compose exec workspace php artisan migrate
docker-compose exec workspace php artisan seed
````

