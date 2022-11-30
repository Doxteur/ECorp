
# ECorp
## prérequis

- [ ] Installer [NodeJS](https://nodejs.org/en/download/)
- [ ] Installer [WampServer](http://www.wampserver.com/en/)
- [ ] Installer [Composer](https://getcomposer.org/download/)

### Lancer le projet

Les infos de connexion à la base de données pour le fichier env sont dans le google doc

#### Coter serveur
- cd server && composer install
- Configurer .env
- php artisan key:generate && php artisan migrate:refresh 
- php artisan db:seed && php artisan serv
#### Coter Client
- cd client && npm install && npm start