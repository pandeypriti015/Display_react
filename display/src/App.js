import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      students : [
        {
          'firstName': 'Pramod',
          'lastName': 'Ray',
          'skills': ['Python','HTML','CSS']
        },
        {
          'firstName': 'Sachin',
          'lastName': 'Suresh',
          'skills': ['Python', 'HTML', 'CSS', 'CAT']
        },

        {
          'firstName': 'Samarth',
          'lastName': 'Hegde',
          'skills': ['Python', 'Git', 'CSS']
        }
      ]
    }
  }

  render() {

    return (
      <div className="App">
      
        {this.state.students.map((item,index)=>(
        <div key={item,index} >
        <h2>{item.firstName}</h2>
        <h2>{item.lastName}</h2>
        <h3>{item.skills}</h3>
        </div>))}
        <div>
          <h1></h1>
        </div>
      </div>
    );
  }
}

export default App;


