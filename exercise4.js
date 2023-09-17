fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completedCount = json.reduce((count, todo) => {
      if (todo.completed) {
        return count + 1;
      }
      return count;
    }, 0);
    console.log(completedCount);
  })
  .catch(function(err) {
    console.log(err);
  });