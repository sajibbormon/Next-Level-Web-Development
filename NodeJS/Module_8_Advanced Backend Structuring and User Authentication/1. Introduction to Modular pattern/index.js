/**
 * Introduction to Modular Pattern
-------------------------------------

Two types of software design pattern for Web Development.

1. MVC

2. Modular


1. MVC
------------

basically three folders: model, view, controller




Model: database schema, queries etc.

View: ui, response, template engine etc.

Controller: handle request, backend logig

there could be more folders such as routes, interface (for typescript project)


suppose we are developing a student project.



interfaces                      routes                              models                          views                       controllers

student.interface.ts         student.route.ts                   student.model.ts                Template Engine:             student.controller.ts
admin.interface.ts           admin.route.ts                     admin.model.ts                  ejs                          admin.controller.ts
faculty.interface.ts         faculty.route.ts                   faculty.model.ts                hnadlerbars                  faculty.controller.ts
                                                                                                pugs

                                                                                                Library/Framework
                                                                                                React
                                                                                                Vue 
                                                                                                Angular


But what about the project is becoming large day by day? then we want to add a new feature. For such a thing, we will face problem in this MVC architecture bcz for student feature update we may need edit interface, routes, models views, controllers for the students, so we need to go different different folders to edit this, which is a headache for large project. 


The is another software design patter to solve this issue, which is called Modular pattern.


Modular Pattern
------------------


Student                                 Admin

student.interface.ts                admin.interface.ts
student.route.ts                    admin.route.ts
student.model.ts                    admin.model.ts
student.controller.ts               admin.controller.ts
student.service.ts                  admin.service.ts


Now if we want to update student feature then we will only move one folder and edit files. 

Benifits of using Modular Pattern

1. Scalibility
2. Maintainibility
3. Better Refactoring
4. Effiecient development

There are some rules/principles

1. DRY- Don't Repeat Yourself. (we will not repeat same type of code again and again, we will create template and save it to util folder)
2. Fat Model/Thin Controller. (all business logics and database operations should be in our model/service, and try to make the controller as lite as possible)


In TypeScript Project:   interface ---> Schema ---->  Model ----> DB Query

example:

Student

student.interface.ts        (interface)
student.route.ts            (all routes)
student.model.ts            (all schemas)
student.controller.ts       (all request response)
student.service.ts          (all business logic and db queries)



Request Response Flow of Modular Patter


                                                   req                    req          
        req                 req                  ------>                ------->
cleint ------>   route.ts  ----->  controller.ts            services.ts             DB
    |                                    |       <------                <--------                 
    |                                    |          res                    res     
    |               res                  |   
    --------------------------------------
           {success, message, data}         




           



 */