
# ECorp
##prérequis
### Lancer le projet

#### Coter serveur
- cd server && composer install
- Configurer .env
- php artisan key:generate && php artisan migrate:refresh 
- php artisan db:seed && php artisan serv
#### Coter Client
- cd client && npm install && npm start