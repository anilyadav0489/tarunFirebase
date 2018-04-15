var React = require('react');

class DataTable extends React.Component {
  constructor(props){
    super(props);
  }
  render (){
    var students = [

      {rollno:1, name:'A', subject:'English'},
            {rollno:2, name:'B', subject:'Hindi'},
            {rollno:3, name:'C', subject:'Russian'}
    ];

    if(students.length == 0){
          return (
            <div className = "data-table">
              <p>Data table</p>
              <table className="hover stack">
                <thead className="data-table-header">
                  <tr>
                    <th width="150">Roll Number</th>
                    <th width="150">Name</th>
                    <th width="150">Subject</th>
                  </tr>
                </thead>
                <tbody>
                  <tr >
                    <td colSpan="3" className="no-data">No data available</td>
                  </tr>
                </tbody>
              </table>
          </div>
        );
      }else {
        return (
            <div>
              <div className = "data-table">
                <p>Data table</p>
                <table className="hover stack">
                  <thead className="data-table-header">
                    <tr>
                      <th width="150">Roll Number</th>
                      <th width="150">Name</th>
                      <th width="150">Subject</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(function(student, index){
                          return (<tr key={index}>
                                    <td>{student.rollno}</td>
                                    <td>{student.name}</td>
                                    <td>{student.subject}</td>
                                  </tr>);
                          })}
                  </tbody>
                </table>

              </div>
            </div>
        );
      }
  }

}

export default DataTable;
