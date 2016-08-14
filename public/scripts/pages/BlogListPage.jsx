var React = require('react');
var connect = require('react-redux').connect;
var BlogList = require('../components/BlogList.jsx');
var fetchBlogs = require('../actions/actionCreater').fetchBlogs;
var NOT_FOUND = require('../actions/actionCreater').NOT_FOUND;
var DATA_ERROR = require('../actions/actionCreater').DATA_ERROR;
var VALID_DATA = require('../actions/actionCreater').VALID_DATA;
var history = require('../stores/store').history;
var BlogListPage = React.createClass({
  componentWillMount() {

    this.props.fetchData();
  },
  render: function() {
    {console.log("in bloglist:>")}
      {console.log(this.props)}
    return (
      <BlogList blogList={this.props.blogList} />
    );
  }
});

BlogListPage.propTypes = {
  blogList : React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    heading: React.PropTypes.string.isRequired,
    cardText: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    tags: React.PropTypes.arrayOf(React.PropTypes.string)
  }))
}
function mapStateToProps( state , ownProps ) {
var blogList = state.blogList;
  return {
    "blogList": blogList
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchData:function(){
      fetchBlogs(dispatch).then( function (message) {
        console.log("message :: "+message);
      } ).catch ( function (err){
        if ( err === NOT_FOUND ) {
              history.push('/notfound');
          } else if ( err === DATA_ERROR ) {
              history.push('/error');
          }
      });
    }
  };
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(BlogListPage);
