var React = require('react');
var Project = require('./Project.jsx');
function Profile (props) {
var projects = [], backTechs = [], frontTechs = [], tools = [];
if(props.profile.projects) {
  projects = props.profile.projects.map(function(project) {
  return <Project key={project.id} project={project} />
  });
}
if(props.profile.technologies) {
  backTechs = props.profile.technologies.backend.map(function(tech, index) {
  return (
    <div className="tech" key={index}>
      <div>{tech}</div>
      <img src={"/images/logos/"+tech+".svg"} />
    </div>
  )
});
frontTechs = props.profile.technologies.frontend.map(function(tech, index) {
return (
  <div className="tech" key={index}>
    <div>{tech}</div>
    <img src={"/images/logos/"+tech+".svg"} />
  </div>
)
});
tools = props.profile.technologies.tools.map(function(tech, index) {
return (
  <div className="tech" key={index}>
    <div>{tech}</div>
    <img src={"/images/logos/"+tech+".svg"} />
  </div>
)
});
}

  return (
    <div className="profile-main">
      <div className="profile-content">
        <h1 className="projects-heading">
          SKILLS
        </h1>
        <div className="tech-section">
        <div className="tech-component">
          <h2>BACKEND</h2>
          <div className="tech-container">
        {backTechs}
      </div>
       </div>
       <div className="tech-component">
         <h2>UI/UX</h2>
         <div className="tech-container">
       {frontTechs}
       </div>
      </div>
      <div className="tech-component">
        <h2>TOOLS</h2>
        <div className="tech-container">
      {tools}
      </div>
     </div>
     </div>
        <h1 className="projects-heading">
          PROJECTS
        </h1>
      {projects}
      </div>
    </div>
  );
}
module.exports = Profile;
