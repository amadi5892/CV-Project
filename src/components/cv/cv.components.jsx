import { Component } from "react";

class Cv extends Component {
    render() {

        const { name, email, phone } = this.props;

        return(
            <div>
                <form>
                    Name: <input type='text' placeholder={this.props.placeholder} onChange={this.props.nameChangeHandler} value={name.length > 0 ? name : ''} />
                    Email: <input type='email' placeholder='Email Address' onChange={this.props.emailChangeHandler} value={email.length > 0 ? email : ''} />
                    Phone: <input type='number' placeholder='(xxx) xxx-xxxx' onChange={this.props.numberChangeHandler} value={phone.length > 0 ? phone : ''} />
                </form>

            </div>
        );
    }
};

export default Cv;