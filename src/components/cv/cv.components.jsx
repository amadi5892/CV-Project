import { Component } from "react";

class Cv extends Component {
    render() {

        const { name } = this.props;
        const { email } = this.props;

        return(
            <div>
                <p>
                    Name: <input type='text' placeholder={this.props.placeholder} onChange={this.props.nameChangeHandler} value={name.length > 0 ? name : ''} />
                </p>
                <p>
                    Email: <input type='email' placeholder='Email Address' onChange={this.props.emailChangeHandler} value={email.length > 0 ? email : ''} />
                </p>
            </div>
        );
    }
};

export default Cv;