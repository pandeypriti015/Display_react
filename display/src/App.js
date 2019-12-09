import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      skills: ''
    }

    this.addDetails = this.addDetails.bind(this);
    // this.sortDetails = this.sortDetails.bind(this);
  }

  addDetails() {
    // let skills = this.state.skills.split(',');
    // let text = this.state;
    // text['skills'] = skills;
    this.props.showDetails(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      skills: ''
    })
  }
  
  render() {
    return (
      <div className="">
        <div className='form'>
          <input className="" type="text" onChange={(event) => this.setState({ firstName: event.target.value })} />
          <input className="" type="text" onChange={(event) => this.setState({ lastName: event.target.value })} />
          <input className="" type="text" onChange={(event) => this.setState({ skills: event.target.value })} />
          <button className='button' onClick={this.addDetails}>Add</button><br />
          {/* <input type="text" className="input" onClick={this.searchBar} placeholder="search"/> */}
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
      students:[],

      // students: [
      //   {
      //     'firstName': 'Pramod',
      //     'lastName': 'Ray',
      //     'skills_list': ['Python', 'HTML', 'CSS']
      //   },
      //   {
      //     'firstName': 'Sachin',
      //     'lastName': 'Suresh',
      //     'skills_list': ['Python', 'HTML', 'CSS', 'CAT']
      //   },
      //   {
      //     'firstName': 'Saniya',
      //     'lastName': 'Iqbal',
      //     'skills_list': ['Python', 'HTML', 'CSS', 'Django','Git']
      //   },
      //   {
      //     'firstName': 'Samarth',
      //     'lastName': 'Hegde',
      //     'skills_list': ['Python', 'Git', 'CSS']
      //   }
      // ]
    }
    
    this.showDetails = this.showDetails.bind(this);
    this.sortDetails = this.sortDetails.bind(this);
    this.sortBySkills = this.sortBySkills.bind(this);
  }

  sortBySkills() {
    let sortSkills = this.state.students.sort(function(a,b){
      if (a.skills_list.length > b.skills_list.length) {
        return -1;
      }
      if (a.skills_list.length < b.skills_list.length){
      return 1;
      }
      return 0;
    });
    this.setState({
      students:sortSkills
    });
  }


  showDetails(note) {
    axios.post("http://127.0.0.1:8000/student/student/create/",note)

    // this.setState({
    //   students: [...this.state.students, note]
    // });
  }

  sortDetails() {
    let sortitems = this.state.students.sort(function(a,b){
      return a.firstName.localeCompare(b.firstName)})
      this.setState ({
        students:sortitems
      });
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/student/student/").then(res => {
      this.setState({
      students:res.data});
      })}
  
  DeleteDetails(id) {
    axios.delete("http://127.0.0.1:8000/student/student/"+id.toString()+"/delete")

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
              <th  onClick={this.sortBySkills}>Skills</th>
              <th>Operation</th>

            </tr>
          </thead>
          <tbody>
            
            {this.state.students.map((item, index) => (
              <tr key={index}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
              <td>
            <ul>
              {/* {console.log("item: ",item)} {console.log("skills_array",item.skills_aray)} */}
              {item.skills_array.map((item,index)=>
            <li key={index}>{item}
              
            </li>)}
            </ul>
                </td>
          
                  <td>
                    <button onClick={(event)=>this.DeleteDetails(item.id)}>DELETE</button> 
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