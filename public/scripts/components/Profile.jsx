var React = require('react');
var Project = require('./Project.jsx');
function Profile (props) {
var projects = [];
if(props.profile.projects) {
  projects = props.profile.projects.map(function(project) {
  return <Project key={project.id} project={project} />
});
}

  return (
    <div className="profile">
      <h1 className="profile-heading">
      this is profile
      </h1>
      <div className="profile-content">
      {projects}
      </div>
    </div>
  );
}
module.exports = Profile;
