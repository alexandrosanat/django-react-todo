import React, { Component } from 'react';
import './App.css';


const tasks = [
  {
    "id": 1,
    "title": "Go Supermarket",
    "description": "Description mandatory",
    "completed": true
  },
  {
    "id": 2,
    "title": "Do laundry",
    "description": "Description mandatory",
    "completed": true
  },
  {
    "id": 3,
    "title": "Dishes",
    "description": "Buy some",
    "completed": true
  }
]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      taskList: tasks,
    }
  }
}



displayCompleted = (status) => {
  if (status) {
    return this.setstatus({ viewCompleted: true });
  }
  return this.setstatus({ viewCompleted: false });
}


renderTabList = () => {
  return (
    <div className='my-5 tab-list'>
      <span onClick={() => this.displayCompleted(true)}
        className={this.state.viewCompleted ? "active" : ""}>
        Completed
      </span>
      <span onClick={() => this.displayCompleted(false)}
        className={this.state.viewCompleted ? "" : "active"}>
        Incomplete
      </span>
    </div>
  )
}


export default App;
