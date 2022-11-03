import { Component } from "react";

class Cv extends Component {
    render() {

        const { name, email, phone, school, major, dateStudy, company, position, mainTasks, dateWork } = this.props;

        return(
            <div>
                <form>
                    Name: <input type='text' placeholder={this.props.placeholder} onChange={this.props.nameChangeHandler} value={name.length > 0 ? name : ''} />
                    Email: <input type='email' placeholder='Email Address' onChange={this.props.emailChangeHandler} value={email.length > 0 ? email : ''} />
                    Phone: <input type='number' placeholder='Phone Number' onChange={this.props.numberChangeHandler} value={phone.length > 0 ? phone : ''} />
                    <br></br>
                    School Name: <input type='text' placeholder='School Name' onChange={this.props.schoolChangeHandler} value={school.length > 0 ? school : ''} /> 

                    <br></br>
                    Major: <input type='text' placeholder='Major' onChange={this.props.majorChangeHandler} value={major.length > 0 ? major : ''} /> 

                    Date of Study: <input type='date' onChange={this.props.dateStudyChangeHandler} value={dateStudy.length > 0 ? dateStudy : ''} />
                    <br></br>
                    Company: <input type='text' placeholder='Company Name' onChange={this.props.companyChangeHandler} value={company.length > 0 ? company : ''} /> 
                    <br></br>
                    Position: <input type='text' placeholder='Position Title' onChange={this.props.positionChangeHandler} value={position.length > 0 ? position : ''} />
                    <br></br>
                    Main Task: <textarea type='text' placeholder='Describe main duties...' onChange={this.props.mainTasksChangeHandler} value={mainTasks.length > 0 ? mainTasks : ''} />
                    <br></br>
                    Date of Employment: <input type='date' onChange={this.props.dateWorkChangeHandler} value={dateWork.length > 0 ? dateWork : ''} /> to <input type='date' onChange={this.props.dateWorkChangeHandler} value={dateWork.length > 0 ? dateWork : ''} />
                </form>

            </div>
        );
    }
};

export default Cv;