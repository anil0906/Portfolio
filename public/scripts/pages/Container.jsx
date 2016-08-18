var React = require('react');
var Header = require('../components/Header.jsx');
var Loader = require('../components/Loader.jsx');
var connect = require('react-redux').connect;
var stretchHeader = require('../actions/actionCreater').stretchHeader;
var collapseHeader = require('../actions/actionCreater').collapseHeader;

var Container = React.createClass({
  render: function(){
    return (
      <div className='container'>
        <Header isScroll={this.props.util.isScroll} stretchHeader={this.props.stretchHeader} collapseHeader= {this.props.collapseHeader}/>
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
function mapDispatchToProps(dispatch, ownProps) {
  return {
    stretchHeader:function(){
      stretchHeader(dispatch);
    },
    collapseHeader: function() {
      collapseHeader(dispatch);
    }
  };
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(Container);
