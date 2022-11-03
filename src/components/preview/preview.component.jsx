import { Component } from "react";

class Preview extends Component {
    render() {
        const { name, email, phone, school, major, dateStudy } = this.props;
        return(
            <div>
                <h1> {name} </h1>
                <h2> {email} </h2>
                <h2> {phone} </h2>
                <p>Educational Experience</p>
                <p>{school}</p> {/*School name */}
                <p>{major}</p> {/*Title of Study */}
                <p>{dateStudy}</p> {/*Date of Study */}
                <p>Practical Experience</p>
                <p>{}</p> {/*Company name */}
                <p>{}</p> {/*Position */}
                <p>{}</p> {/*Main Tasks */}
                <p>{}</p> {/*Date Range */}
            </div>
        )
    }
};

export default Preview;