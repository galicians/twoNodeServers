## Two web servers to help with the mechanics of node asynchronous event loop model

#This is just a starting point(sandbox) that can be used to ilustrate the following concepts in node:

 - asynchronous calls and the event loop
 - reading and writing the response and request objects
 - get and post http methods
 - http node package
 - and specially *** promises ***

#To install this:

 - git clone https://github.com/galicians/twoNodeServers on your machine
 - npm install
 - node app.js
 - visit http://localhost:3000/ and you should see: Hello Makers, I'm server One
 - visit http://localhost:5000/ and you should see:Hello Makers, I'm server Two

#To interact between servers you have several tools, I usually use:

- POSTMAN chrome extension
- curl
- direct interaction between servers
- installing angular in the front end, and using the $http service

#Using the browser to follow the http traffic flow

- At resources cookies locahost you have access to your session
- At network you can see the requests of the different resources of your app


#Observations:

- In app.js there is a lot of repition going on, as serverOne and serverTwo are image servers, we could create a class Object with its prototypes and then 2 instances of that class, avoiding the duplicity of methods. At the moment I would like to keep it reduntant as it's simple to study. In the close future I will the other approach.