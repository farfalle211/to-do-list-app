// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;


import React from "react";
import ToDoItem from './components/ToDoItem';
import todosData from './todosData'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
                  todos: todosData
                }

       this.handleChange = this.handleChange.bind(this)
   }

   handleChange(id) {
           this.setState(prevState => {
               const updatedTodos = prevState.todos.map(todo => {
                   if (todo.id === id) {
                       todo.completed = !todo.completed
                   }
                   return todo
               })
               return {
                   todos: updatedTodos
               }
           })
       }


  render() {
      const todosItems = this.state.todos.map(item => 
        <ToDoItem 
          key={item.id} 
          item={item}
          handleChange={this.handleChange}
          />
        )

    return (
      <div className="todo-list">
        {todosItems}
      </div>
    )
  }

}

export default App;