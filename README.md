## Requisites

* docker
* docker compose

## Run

````bash
# Download do código
git clone ...

# Acessar pasta do ambiente de desenvolvimento
cd <project-folder>/laradock

# Iniciar o servidor
docker-compose up -d nginx mysql phpmyadmin redis workspace

# Construir e popular o banco de dados
docker-compose exec workspace php artisan migrate
docker-compose exec workspace php artisan seed
````

