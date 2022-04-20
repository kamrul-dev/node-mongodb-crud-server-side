/* 
    1. Create a node server with 5 steps
    1.1. Create folder
    1.2. npm init
    1.3. npm i express cors mongodb
    1.4. script-dev: nodemon index.js
    1.5. create index.js
    1.6. use 5 steps to create a node server
-------------------------------------------------

    Create Atlas Account
    --------------------
    1. sign up. google access
    2. create cluster
    3. create user dbuser and password
    4. Network Access --> ip address: allow all
    5. database > Connect > code copy paste in index.js

    ---------------------------------------------------


    CRUD Operation
    ----------------
    1. node mongodb CRUD > FundaMentals
    2. Create async run function
--------------------------------------------------------


    Intergrate sending data from client to server
    ------------------------------------------------
    1. Client side: create form
    2. on submit get from data and create user object
    3. on Server: create user POST method to receive data on the backend
    4. on client side : set fetch with POST , headers, body
    5. make sure you return a json from the POST API

    Load Data to the Client side
    ------------------------------
    1. create a get API
    2. create a query object
    3. collection.find(query)
    4. cursor.toArray()
    5. return the result
*/