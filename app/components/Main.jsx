import React from 'react';
import Filters from 'Filters';
import DataTable from 'DataTable';

class Main extends React.Component{
  render(){
    return (
      <div>
        <div>
          <div>
            <p>My parent component</p>
            <Filters/>
            <DataTable/>
          </div>
        </div>
      </div>
    );
  }

}

export default Main;
