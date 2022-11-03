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
      company: '',
      position: '',
      mainTasks: '',
      dateWork: '',
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

  companyEntered = (event) => {
    const company = event.target.value;
    console.log({company})
    this.setState(() => {
      return {company};
    })
  };

  positionEntered = (event) => {
    const position = event.target.value;
    console.log({position})
    this.setState(() => {
      return {position};
    })
  };

  mainTasksEntered = (event) => {
    const mainTasks = event.target.value;
    console.log({mainTasks})
    this.setState(() => {
      return {mainTasks};
    })
  };

  dateWorkEntered = (event) => {
    const dateWork = event.target.value;
    console.log({dateWork})
    this.setState(() => {
      return {dateWork};
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
    const {nameEntered, emailEntered, numberEntered, schoolEntered, majorEntered, dateStudyEntered, positionEntered, companyEntered, mainTasksEntered, dateWorkEntered} = this;
    const {onSubmit} = this;
    const {onEdit} = this;
    
    
    return (
     <div>
      <div>
        {this.state.submitted ? <Preview name={this.state.name} email={this.state.email} phone={this.state.phone} school={this.state.school} major={this.state.major} dateStudy={this.state.dateStudy} company={this.state.company} position={this.state.position} mainTasks={this.state.mainTasks} dateWork={this.state.dateWork} /> : <Cv placeholder='Enter Name' nameChangeHandler={nameEntered} emailChangeHandler={emailEntered} numberChangeHandler={numberEntered} schoolChangeHandler={schoolEntered} majorChangeHandler={majorEntered} dateStudyChangeHandler={dateStudyEntered} companyChangeHandler={companyEntered} positionChangeHandler={positionEntered} mainTasksChangeHandler={mainTasksEntered} dateWorkChangeHandler={dateWorkEntered} name={this.state.name} email={this.state.email} phone={this.state.phone} school={this.state.school} major={this.state.major} dateStudy={this.state.dateStudy} company={this.state.company} position={this.state.position} mainTasks={this.state.mainTasks} dateWork={this.state.dateWork} />}
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
