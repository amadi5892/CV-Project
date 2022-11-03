import { Component } from "react";

class Cv extends Component {
    render() {

        const { name, email, phone, school, major, dateStudy } = this.props;

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
                </form>

            </div>
        );
    }
};

export default Cv;