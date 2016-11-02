angular.module('todoController', [])

  .controller('mainController', function($scope, Todos) {
    $scope.formData = {};

    Todos.get()
      .success(function(data) {
        $scope.todos = data;
      })
      .error(function(err) {
        console.log('Error: ' + err);
      });

    $scope.createTodo = function() {

      if(!$isEmptyObject($scope.formData)) {
        Todos.create($scope.formData)
          .success(function(data) {
            $scope.formData = {}; // clear the form so our user is ready to enter another
            $scope.todos = data;
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });  
      }
    };
        

    $scope.deleteTodo = function(id) {
      Todos.delete(id)
        .success(function(data) {
          $scope.todos = data;
        });
     };
  });