const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const secrets = require('./secret.js');

console.log(secrets.angularDbUser);

// config===============================


mongoose.connect('mongodb://' + secrets.angularDbUser + ':' + secrets.angularDbPass + '@jello.modulusmongo.net:27017/Zo5repuw');

app.use(express.static( __dirname + "/public" ));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended' : 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

// DB models ===============================

const Todo = mongoose.model('Todo', {
  text: String
});

// routes ==================================================================
  
  // api ==================================================================


// get all Todos
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

// serve our homepage
  app.get('*', function(req,res) {
    res.sendFile(__dirname + '/public/index.html');
  });


app.listen(8080);
console.log('App listening on port: 8080');