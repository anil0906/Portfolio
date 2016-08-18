var React = require('react');
var Link = require('react-router').Link;
var Header = React.createClass({
componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll);
},
componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleScroll);
},
shouldComponentUpdate: function(prevProps) {
  console.log("!prevProps.isScroll === this.props.isScroll :: "+ !prevProps.isScroll === this.props.isScroll);
  console.log("!prevProps.isScroll :: "+ prevProps.isScroll);
  console.log("this.props.isScroll :: "+ this.props.isScroll);

  return !prevProps.isScroll === this.props.isScroll;
},
handleScroll: function(event) {
    var scrollTop = event.srcElement.body.scrollTop;
    if(scrollTop > 320) {
      this.props.collapseHeader();
    }
    else {
      this.props.stretchHeader();
    }
},
  render: function() {
    var isScroll = this.props.isScroll;
    return (
      <div className={ isScroll ? "header header-fixed" : "header" }>
        <div className={isScroll ? "profile profile-fixed" : "profile"}>
          <div className={isScroll ? "avatar avatar-fixed" : "avatar"}>
          </div>
          <div className="profile-text title">
            <Link to="/home"> Anil Sharma</Link>
          </div>
          <div className={isScroll ? "hidden" : "profile-text title-fourth"}>
            Full Stack Java and React Developer
          </div>
        </div>
        <div className={isScroll ? "nav nav-fixed" : "nav"}>
          <Link to="/profile"><div className="nav-item">PROFILE</div></Link>
          <div className="nav-item">|</div>
          <Link to="/blog"><div className="nav-item">BLOG</div></Link>
        </div>
      </div>
    );
  }
});
 module.exports = Header;
