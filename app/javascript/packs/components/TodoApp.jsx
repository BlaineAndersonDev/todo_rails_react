import React from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";

// First we create a getTodoItems method that hits our API's index action at /api/v1/todo_items.
// If the request is successful, we load that data into state via this.setState({ todoItems });, otherwise we log the error.
// Then, we call getTodoItems() when the < TodoApp > component loads via the componentDidMount() call.
// Finally, we bind getTodoItems in order for the keyword this to work in our componentDidMount() callback.

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: []
    };
    this.getTodoItems = this.getTodoItems.bind(this);
  }
  componentDidMount() {
    this.getTodoItems();
  }
  getTodoItems() {
    axios
      .get("/api/v1/todo_items")
      .then(response => {
        const todoItems = response.data;
        this.setState({ todoItems });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return <p>TodoApp</p>
  }
}

document.addEventListener('turbolinks:load', () => {
  const app = document.getElementById('todo-app')
  app && ReactDOM.render(<TodoApp />, app)
})