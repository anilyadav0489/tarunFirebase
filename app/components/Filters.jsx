import React from 'react';
import firebase, {firebaseRef} from 'initDB';

class Filters extends React.Component {
  saveStudent(e){
    e.preventDefault();
    var student = {rollno:1, name:'A', subject:'English'};
    firebaseRef.child('students').push(student);

    alert('hi');
  }
  render() {
    return (
      <div>
        <p>Filters</p>
        <div className="row">
          <div className="column small center medium-4 large-4">
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
            <input type="button" value="Add" className="button primary expanded" onClick={this.saveStudent}></input>
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
