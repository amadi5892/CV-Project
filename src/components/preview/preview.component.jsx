import { Component } from "react";

class Preview extends Component {
    render() {
        const { name, email, phone, school, major, dateStudy, company, position, mainTasks, dateWork } = this.props;
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
                <p>{company}</p> {/*Company name */}
                <p>{position}</p> {/*Position */}
                <p>{mainTasks}</p> {/*Main Tasks */}
                <p>{dateWork}</p> {/*Date Range */}
            </div>
        )
    }
};

export default Preview;