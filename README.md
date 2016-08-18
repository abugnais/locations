# Loopback + MongoDB + AngularJS Location Tracking

## Installation:
- sudo apt-get install nodejs
- sudo apt-get install mongodb
- sudo apt-get install npm
- sudo npm install -g npm
- sudo npm install -g n
- sudo npm install -g gulp
- sudo npm install -g bower
- n latest
- npm install
- bower install
- connect to mongodb and run: 
  `use locations;
  db.createUser({user: "locations", pwd: "123456", roles: [{role: "dbOwner", db: "locations"}]});`
- gulp serve
- browse to localhost:4000
