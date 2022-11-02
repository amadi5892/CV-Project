import { Component } from 'react';

import Cv from './components/cv/cv.components';
import Preview from './components/preview/preview.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      submitted: false,
    }
  };

  nameEntered = (event) => {
    const name = event.target.value;
    console.log({name})
    this.setState(() => {
      return { name };
    })
  };

  emailEntered = (event) => {
    const email = event.target.value;
    console.log({email});
    this.setState(() => {
      return { email };
    })
  };

  onSubmit = () => {
    console.log(this.state.submitted);
    this.setState(() => {
      if (this.state.name.length > 0 && !this.state.submitted) {
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
    const {nameEntered} = this;
    const {emailEntered} = this;
    const {onSubmit} = this;
    const {onEdit} = this;
    
    
    return (
     <div>
      <div>
        {this.state.submitted ? <Preview name={this.state.name} email={this.state.email}  /> : <Cv placeholder='Enter Name' nameChangeHandler={nameEntered} emailChangeHandler={emailEntered} name={this.state.name} email={this.state.email} />}
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
