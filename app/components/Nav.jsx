var React = require('react');
var {Link} = require('react-router-dom');
//var {connect} = require('react-redux');

class Nav extends React.Component{

  constructor(props){
      super(props);
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu ">
            <li className="menu-text">SOW Maintenance</li>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/about" >About</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
            <ul className="menu">
              <li className="author-text">
                created by Anil Yadav
              </li>
            </ul>
        </div>
      </div>
    );
  }
};

export default Nav;
