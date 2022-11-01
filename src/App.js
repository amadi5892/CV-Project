import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      submitted: false,
    }
  };

  textEntered = (event) => {
    const name = event.target.value;
    this.setState(() => {
      return { name };
    })
  };

  onSubmit = () => {
    console.log(this.state.submitted);
    this.setState(() => {
      if (!this.state.submitted) {
        return {submitted: true};
      }
    })
  };

  onEdit = () => {
    console.log(this.state.submitted);
    this.setState(() => {
      if(this.state.submitted) {
        return {submitted: false};
      }
    })
  };

  
  render () {
    const {textEntered} = this;
    const {onSubmit} = this;
    const {onEdit} = this;
    
    
    return (
     <div>
      <div>
        {this.state.submitted ? <h1>{ this.state.name }</h1> : <p>Name: <input type='text' placeholder='Enter Name' onChange={textEntered} /></p>}
      </div>
      <div>
        <button className="submit-button" onClick={onSubmit} >Submit</button>
        <button className="edit-button" onClick={onEdit} >Edit</button>
      </div>
     </div>
     
    );
  };
}

export default App;
