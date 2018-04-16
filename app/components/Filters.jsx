import React from 'react';
import firebase, {firebaseRef} from 'initDB';

class Filters extends React.Component {
  constructor(props){
    super(props);
  }

  saveStudent(e){
    e.preventDefault();
    const rollno = this.refs.rollNumber.value;
    const name = this.refs.name.value;
    const subject = this.refs.subject.value;
    var student = {rollno, name, subject};
    firebaseRef.child('students').push(student);
    this.props.onUpdateTable();
    //alert('hi');
  }
  render() {
    return (
      <div>
        <p> </p>
        <div className="row">
          <div className="column small-10 center medium-4 large-4">
            Roll No:
            <input ref="rollNumber" type="input" placeholder="Roll Number"></input>
          </div>
          <div className="column small center medium-4 large-4">
            Name:
            <input ref="name" type="input" placeholder="Name"></input>
          </div>
          <div className="column small center medium-4 large-4">
            Subject:
            <input ref="subject" type="input" placeholder="Subject"></input>
          </div>
        </div>
        <div className = "row buttons">
          <div className="column small center medium-4 large-4">
            <input type="button" value="Add" className="button primary expanded" onClick={this.saveStudent.bind(this)}></input>
          </div>
          <div className="column small center medium-4 large-4">
            <input type="button" value="Clear all fields" className="button primary expanded"></input>
          </div>
      </div>
      </div>
    );
  }

}

export default Filters;
