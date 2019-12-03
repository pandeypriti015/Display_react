import React, { Component } from 'react';
import './App.css';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      skills: ''
    }
    this.addDetails = this.addDetails.bind(this);
    this.sortDetails = this.sortDetails.bind(this);
  }
  addDetails() {
    let skill = this.state.skills.split(',');
    let text = this.state;
    text['skills'] = skill;
    this.props.showDetails(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      skills: ''
    })
  }
  sortDetails() {
    let sortitems = this.state;
    this.setState ({
    })
  }

  render() {
    return (
      <div className="">
        <div className='form'>
          <input className="" type="text" onChange={(event) => this.setState({ firstName: event.target.value })} />
          <input className="" type="text" onChange={(event) => this.setState({ lastName: event.target.value })} />
          <input className="" type="text" onChange={(event) => this.setState({ skills: event.target.value })} />
          <button className='button' onClick={this.addDetails}>Add</button>
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      skills: '',
      students: [
        {
          'firstName': 'Pramod',
          'lastName': 'Ray',
          'skills': ['Python', 'HTML', 'CSS']
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
    this.showDetails = this.showDetails.bind(this);
    this.sortDetails = this.sortDetails.bind(this);
  }

  showDetails(note) {
    this.setState({
      students: [...this.state.students, note]
    });
  }
  
  sortDetails() {
    let sortitems = this.state.students.sort(function(a,b){
      return a.firstName.localeCompare(b.firstName)})
      this.setState ({
        students:sortitems
      });
  }

  
  render() {
    return (
      <div className="App">
        <Details showDetails={this.showDetails} />
        <table>
          <thead>
            <tr>
              <th onClick={this.sortDetails}>Firstname</th>
              <th>Lastname</th>
              <th>Skills</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((item, index) => (
              <tr key={index}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td><ul>{item.skills.map((item, index) => (
                  <ol key={item}>
                    <ol>{item}</ol>
                  </ol>
                ))}</ul>
                </td>
              </tr>
            )
            )
            }

          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
