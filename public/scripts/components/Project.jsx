var React = require('react');
var Link = require('react-router').Link;
function Project (props) {
  return (
    <div className="project">
        <div className="project-image">
          <Link to={props.project.url}><img src={props.project.image}></img></Link>
        </div>
        <div className="project-content">
          <div className="project-heading title">
            <Link to={props.project.url}>{props.project.name}</Link>
          </div>
          <div className="project-detail title-half">
            {props.project.description}
          </div>
          <div className="project-tech">
            {props.project.technologies.map(function(tech, index) {
              return <span key={index}>{tech} *</span>
            })}
          </div>
          <div className="project-platform">
            {props.project.platforms.map(function(platform, index) {
              return <span key={index}>{platform} *</span>
            })}
          </div>
        </div>
    </div>
  );
}
module.exports = Project;
