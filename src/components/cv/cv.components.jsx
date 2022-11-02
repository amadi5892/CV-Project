import { Component } from "react";

class Cv extends Component {
    render() {

        return(
            <div>
                <p>Name: <input type='text' placeholder={this.props.placeholder} onChange={this.props.onChangeHandler} value={this.props.value} /></p>
            </div>
        );
    }
};

export default Cv;