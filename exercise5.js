fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompleted = json.reduce((result, todo) => {
      if (!todo.completed) {
        result.push({ userID: todo.userId, title: todo.title });
      }
      return result;
    }, []);
    console.log(uncompleted);
  })
  .catch(function(err) {
    console.log(err);
  });