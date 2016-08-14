var React = require('react');
var connect = require('react-redux').connect;
var Blog = require('../components/Blog.jsx');
var fetchSingleBlog = require('../actions/actionCreater').fetchSingleBlog;
var NOT_FOUND = require('../actions/actionCreater').NOT_FOUND;
var DATA_ERROR = require('../actions/actionCreater').DATA_ERROR;
var VALID_DATA = require('../actions/actionCreater').VALID_DATA;
var history = require('../stores/store').history;
var SingleBlogPage = React.createClass({
  componentWillMount() {
    console.log("component will mount with id : " + this.props.params.id );
    this.props.fetchData(this.props.params.id);
  },
  render: function() {
    return (
      <Blog blog={this.props.blog} />
    );
  }
});
SingleBlogPage.propTypes = {
  blog : React.PropTypes.shape({
   heading: React.PropTypes.string.isRequired,
   id: React.PropTypes.number.isRequired,
   date: React.PropTypes.string.isRequired,
   tags: React.PropTypes.arrayOf(React.PropTypes.string),
   content: React.PropTypes.string.isRequired
  })
}
function mapStateToProps( state , ownProps ) {
  var blog = state.blog;
  return {
    "blog":blog
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchData:function(id){
      fetchSingleBlog(dispatch, id)
      .then( function (message) {
        console.log("message :: "+message);
      } ).catch ( function (err){
        if ( err === NOT_FOUND ) {
              history.push('/notfound');
          } else if (err === DATA_ERROR ) {
              history.push('/error');
          }
      });
    }
  };
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(SingleBlogPage);
