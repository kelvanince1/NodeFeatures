var Todos = require('../models/todoModel');

module.exports = function(app) {

   app.get('/api/setupTodos', function(req, res) {

       // seed database
       var starterTodos = [
           {
               username: 'tester',
               todo: 'Buy milk',
               isDone: false,
               hasAttachment: false
           },
           {
               username: 'tester',
               todo: 'Feed dog',
               isDone: false,
               hasAttachment: false
           },
           {
               username: 'tester',
               todo: 'Learn Node',
               isDone: false,
               hasAttachment: false
           }
       ];
       Todos.create(starterTodos, function(err, results) {
           res.send(results);
       });
   });

}
