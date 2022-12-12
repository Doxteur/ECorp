
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
