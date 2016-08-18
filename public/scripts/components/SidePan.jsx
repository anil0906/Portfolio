var React = require('react');
var Link = require('react-router').Link;
var SidePan = React.createClass({
  render: function () {
    return (
      <div className="side-pan">
        <div className="profile">
          <div className="avatar">
          </div>
          <div className="profile-name">
             <Link to="/home"> Anil Sharma</Link> 
          </div>
        </div>
        <div className="menu">
           <Link to="/profile" className="menu-item">Profile</Link>
           <Link to="/blog" className="menu-item">Blog</Link>
        </div>
      </div>
    );
  }
});
module.exports = SidePan;
