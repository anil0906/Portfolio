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
  return !prevProps.isScroll === this.props.isScroll;
},
handleScroll: function(event) {
  var timeout = null;
    //var scrollTop = event.srcElement.body.scrollTop;
    // if(scrollTop > 10) {
    console.log("scrolling started");
      this.props.collapseHeader();
    // }
    // else {
    //   this.props.stretchHeader();
    // }
    clearTimeout(timeout);
      var that = this;
timeout = setTimeout(function(){

  console.log("scrolling stopped");
  that.props.stretchHeader();
},200);
},
  render: function() {
    var isScroll = this.props.isScroll;
    console.log("in render :::: "+isScroll);
    return (
      <div className={ isScroll ? "header" : "header" }>
        <div className={isScroll ? "profile" : "profile"}>
          <div className={isScroll ? "avatar" : "avatar"}>
          </div>
          <div className="profile-text title">
            <Link to="/home"> Anil Sharma</Link>
          </div>
          <div className={isScroll ? "profile-text title-fourth" : "profile-text title-fourth"}>
            Full Stack Java and React Developer
          </div>
        </div>
        <div className={isScroll ? "nav" : "nav"}>
          <Link to="/profile"><div className="nav-item">PROFILE</div></Link>
          <div className="nav-item">|</div>
          <Link to="/blog"><div className="nav-item">BLOG</div></Link>
        </div>
      </div>
    );
  }
});
 module.exports = Header;
