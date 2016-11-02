const Todo = require('./models/todo');

module.exports = function(app) {

  app.get('/api/todos', function(req, res) {

      Todo.find(function(err, todos) {
        if (err) {
          res.send(err);
        }
        res.send(todos);
      });
    });


// create a new Todo
  app.post('/api/todos', function(req, res) {

    Todo.create({
      text: req.body.text,
      done: false
    }, function(err, todo) {
      if (err) {
        res.send(err);
      }
      
      Todo.find(function(err, todos) {
        if (err) {
          res.send(err) 
        }
        res.send(todos);
      });
    });
  });


  // delete a Todo
  app.delete('/api/todos/:todo_id', function(req, res) {

    Todo.remove({
      _id: req.params.todo_id
    }, function(err, todo) {
      if (err) {
          res.send(err) 
        }

      Todo.find(function(err, todos) {
        if (err) {
        res.send(err) 
      }
      res.send(todos);
      });

    });
  });

  app.get('*', function(req,res) {
    res.sendFile(__dirname + '/../public/index.html');
  });

};