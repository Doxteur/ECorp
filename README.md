# ECorp

## prérequis

- [ ] Installer [NodeJS](https://nodejs.org/en/download/)
- [ ] Installer [WampServer](http://www.wampserver.com/en/)
- [ ] Installer [Composer](https://getcomposer.org/download/)

### Lancer le projet

Les infos de connexion à la base de données pour le fichier env sont dans le google doc

### Coter Base de données

- Créer une base de données nommée `TP_YNOV_LARAVEL`

#### Coter serveur

- npm run installServer
- Configurer .env du dossier Server grace au .env.example
- cd Server
- php artisan key:generate && php artisan migrate:refresh
- php artisan db:seed && php artisan serv

#### Coter Client

- npm run installClient
- npm run client

# En cas de problème

- [ ] Vérifier que les ports 80 et 3306 sont libres
- [ ] Vérifier que les services WampServer et MySQL sont bien lancés
- [ ] Vérifier que le serveur est bien lancé
- [ ] Vérifier les infos de connexion à la base de données dans le fichier .env du dossier Server (Le nom de la base doit être le meme que celui dans le fichier .env du dossier Server)
- [ ] Vérifier que le fichier .env du dossier Server est bien dans le dossier Server

# Documentation

- [ ] [Laravel](https://laravel.com/docs/5.8)
- [ ] [React](https://reactjs.org/docs/getting-started.html)
- [ ] [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [ ] [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction)

