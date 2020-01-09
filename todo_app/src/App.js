import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component{
  state = {

    todos: [
      {
        id: 1,
        title: 'Drink coffee',
        completed: 'True'
      },
      
      {
        id: 2,
        title: 'Complete React course',
        completed: 'False'
      },
      
      {
        id: 3,
        title: 'Go home',
        completed: 'False'
      }  
    ]
  }
  
  render(){
    console.log(this.state.todos)
  return (
    <div className="App">
      <Todos todos = {this.state.todos}/>
    </div>
  );
}
}

export default App;
