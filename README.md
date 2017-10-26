# attendance-checker-system

A list of things happening in this app:

* We provide express service endpoints using HTTP
* We utilize Mongoose to communicate with a MongoDb database


##Tutorials and Things to remember:
* install MongDB on c9: [here](https://community.c9.io/t/setting-up-mongodb/1717)
* update MongoDB on c9 to 3.x: [here](https://community.c9.io/t/updating-mongodb/3914)

The commands in the update tutorial should be changed as follows: 

```
sudo apt-get remove mongodb-org mongodb-org-server

sudo apt-get autoremove

sudo rm -rf /usr/bin/mongo*

echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list

sudo apt-get update

sudo apt-get install mongodb-org mongodb-org-server

sudo touch /etc/init.d/mongod

sudo apt-get install mongodb-org-server
```