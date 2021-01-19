# TO-DO-Backend
It has all the backend functionality needed to build an to-do application.

A) Assumption:
  1. It is having only the backend functionality and the result of all the operations are printed on the console as we are not rendering the output on the frontend.
  
 2. I am also considering for the 3rd point that says "The  user should be able to prioritize the todos" for this if user wants to change the priority they can use update operation to change the priority. 
 
 3. For the search operation we are using the title and priorities individually.
  

B) Approach:

  1.Start with creating a server.
  
  2.Create connection with the DB
  
  3.Create Table model
  
  4.Define routes and controllers performing appropriate actions.
  
  5.Test the application on all the aspects and for the api's created.
  
C) DB schema:

  List(title,description,due_date,priority)
  
  ID, createdAT and modifiedAT are also stored by default for all Items.
  
D) Steps to run:

  Prerequisite:
  
  1.Node installed.
  
  2.Postgres installed.

  Commands:
  
  1.npm init //To initiatize 
  
  2.npm i //To install all the packages used and in json file.
  
  3.npm start //To start the server

  Paths To check :

  1. To create:http://localhost:8080/create-listItem
  2. To update:http://localhost:8080/update-listItem/:id
  3. To delete:http://localhost:8080/delete-listItem/:id
  4. To read: http://localhost:8080/show-listItem
  5. To searchbyTitle:http://localhost:8080/search-by-title?title=title_name
  6. To searchbyPriority:http://localhost:8080/search-by-priority?priority=priority_name
