import React,{Component} from 'react';
import './App.css';
import Todos from './components/Todo';

class App extends Component{
  state={
    todos:[
        {
            id:1,
            Name:'test1',
            Value:'false'
        },
        {
            id:2,
            Name:'test2',
            Value:'false'
        },
        {
            id:3,
            Name:'test3',
            Value:'false'
        }
    ]
}
render(){
  return (
    <div className="App">
      <header className="App-header">
  
        <Todos todos={this.state.todos}/>
   
     
      </header>
    </div>
  );}
}

export default App;
