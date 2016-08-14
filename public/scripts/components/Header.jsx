var React = require('react');
var Logo = require('./Logo.jsx');
var MenuIcon = require('./MenuIcon.jsx');
var Heading = require('./Heading.jsx');
var Header = React.createClass({
  getInitialState: function() {
    return {
      headingText:'Blog',
    }
  },

   render: function() {
     return (
       <div className="header">
       <Logo src="../../images/logo.jpg" className="logo"/>
       <Heading headingText={this.state.headingText}/>
       <MenuIcon src="../../images/menu_1.png" className="menuIcon" areaClassName="menuInitialState"/>
       </div>
     );
   }
 });
 module.exports = Header;
