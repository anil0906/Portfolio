var React = require('react');
var connect = require('react-redux').connect;
var Profile = require('../components/Profile.jsx');
var fetchProfile = require('../actions/actionCreater').fetchProfile;
var ProfilePage = React.createClass({
  componentWillMount() {
    this.props.fetchData();
  },
  render: function() {
    return (
      <Profile profile={this.props.profile} />
    );
  }
});

ProfilePage.propTypes = {
  profile : React.PropTypes.shape({
    description: React.PropTypes.string,
    technologies: React.PropTypes.arrayOf(React.PropTypes.string),
    projects: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number,
      description: React.PropTypes.string,
      name: React.PropTypes.string,
      image: React.PropTypes.string,
      url : React.PropTypes.string,
      technologies: React.PropTypes.arrayOf(React.PropTypes.string),
      platform: React.PropTypes.arrayOf(React.PropTypes.string)
    }))
  })
};

function mapStateToProps( state , ownProps ) {
var profile = state.profile;
  return {
    "profile": profile
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchData:function(){
      fetchProfile(dispatch).then( function (message) {
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
module.exports = connect(mapStateToProps,mapDispatchToProps)(ProfilePage);
