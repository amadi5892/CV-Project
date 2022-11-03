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
      phone: '',
      school: '',
      major: '',
      dateStudy: '',
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

  numberEntered = (event) => {
    const phone = event.target.value;
    console.log({phone});
    this.setState(() => {
      return { phone };
    })
  };
  
  schoolEntered = (event) => {
    const school = event.target.value;
    console.log({school})
    this.setState(() => {
      return {school};
    })
  };

  majorEntered = (event) => {
    const major = event.target.value;
    console.log({major})
    this.setState(() => {
      return {major};
    })
  };

  dateStudyEntered = (event) => {
    const dateStudy = event.target.value;
    console.log({dateStudy})
    this.setState(() => {
      return {dateStudy};
    })
  };

  onSubmit = () => {
    console.log(this.state.submitted);
    this.setState(() => {
      if (this.state.name.length > 0 && this.state.phone.length === 10 && this.state.email.length > 0 && !this.state.submitted) {
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
    const {nameEntered, emailEntered, numberEntered, schoolEntered, majorEntered, dateStudyEntered} = this;
    const {onSubmit} = this;
    const {onEdit} = this;
    
    
    return (
     <div>
      <div>
        {this.state.submitted ? <Preview name={this.state.name} email={this.state.email} phone={this.state.phone} school={this.state.school} major={this.state.major} dateStudy={this.state.dateStudy} /> : <Cv placeholder='Enter Name' nameChangeHandler={nameEntered} emailChangeHandler={emailEntered} numberChangeHandler={numberEntered} schoolChangeHandler={schoolEntered} majorChangeHandler={majorEntered} dateStudyChangeHandler={dateStudyEntered} name={this.state.name} email={this.state.email} phone={this.state.phone} school={this.state.school} major={this.state.major} dateStudy={this.state.dateStudy} />}
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
