import { Component } from "react";

class Preview extends Component {
    render() {
        const { name, email, phone } = this.props;
        return(
            <div>
                <h1> {name} </h1>
                <h2> {email} </h2>
                <h2> {phone} </h2>
            </div>
        )
    }
};

export default Preview;