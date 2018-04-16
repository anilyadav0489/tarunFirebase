import React from 'react';
import Filters from 'Filters';
import DataTable from 'DataTable';
import firebase, {firebaseRef} from 'initDB';

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {students:[]}
  }

  snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
  }

  componentWillMount(){
    var that = this;

    console.log("mount successfull");
    firebase.database().ref('/students').on('value', function(snapshot) {
      var students = [];
      students.push(Object.keys(snapshot.val() || {}).map(k => snapshot.val()[k]));
      that.setState({students});
    });
  }

  handleUpdateTable(){
    var that = this;

    firebase.database().ref('/students').on('value', function(snapshot) {
      var students = [];
      students.push(Object.keys(snapshot.val() || {}).map(k => snapshot.val()[k]));
      that.setState({students});
    });
  }

  render(){
    return (
      <div>
        <div>
          <div>
            <Filters onUpdateTable={this.handleUpdateTable.bind(this)}/>
            <DataTable students={this.state.students}/>
          </div>
        </div>
      </div>
    );
  }

}

export default Main;
