var React = require('react');
var SidePan = require('../components/SidePan.jsx');
var Loader = require('../components/Loader.jsx');
var connect = require('react-redux').connect;
var Container = React.createClass({
  render: function(){
    return (
      <div className='container'>
        <SidePan />
        <div className="main-content">
          {this.props.children}
        </div>
        <Loader util={this.props.util}/>
      </div>
    );
  }
});

function mapStateToProps( state , ownProps ) {
var util = state.util;
  return {
    "util": util,
    "children": ownProps.children
  };
}

module.exports = connect(mapStateToProps,null)(Container);
