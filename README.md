Small challange project that consists in getting the right data from the database and create a couple of filters 
(by industry and health) on the client-side

Technologies in use: 

- MongoDB, Mongoose and ReactJS

Health Filter:

- High - health above 80

- Medium - health between 50 and 80

- Low - health below 50

Industry Filter:

Should show only the businesses that match the industry selected in the front end. This should be a drop down
menu of the industries

Setup:
1. Ensure that you have mongo db installed
https://docs.mongodb.com/manual/installation/
2. Ensure that you have the most recent version of nodejs installed
https://github.com/creationix/nvm
3. Run ‘npm install’
4. Run ‘npm start’ to start the server - this will populate the database when you run it for the first
time
5. The front end listens on port localhost:8000
