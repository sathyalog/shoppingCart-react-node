This developed in reactjs components with flux architecture. Also you can run from server end by nodejs with ejs.

A basic shopping cart that support add/remove from cart using local storage.

Concepts covered:

1. Routings (latest react-router version 1.0.0)

2. Auth login

3. Singup form that stores in json file

4. Search Functionality


Auth login:

You cannot see home page without login. If you try to hit home page directly it will prompt you to login. You can even login from your signup credentials as well.

In order to work with signup form, i have created db.json file which acts like database that stores your data from your sign up form.

To run this, initially install "CORS" extension and enable it. 


Run "node signupserver.js" //check localhost:8081/api/users - this should display json data.


Now try filling signup that allows you to store data in db.json file.