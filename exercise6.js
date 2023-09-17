fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completedTodosPerUser = json.reduce((result, todo) => {
      if (todo.completed) {
        if (result[todo.userId]) {
          result[todo.userId]++;
        } else {
          result[todo.userId] = 1;
        }
      }
      return result;
    }, {});
    console.log(completedTodosPerUser);
  })
  .catch(function(err) {
    console.log(err);
  });