var React = require('react');
function Blog (props) {
    var heading = props.blog.heading;
    function rawMarkup() {
       if(props.blog.content) {
          return { __html: props.blog.content.toString() };
        }
        else{
          return { __html: ""};
        }
      }
    return (
      <div className="blog">
        <div className="blog-heading">
        <h1>
            {heading}
        </h1>
        </div>
        <div className="blog-content">
          <span dangerouslySetInnerHTML={rawMarkup()} />
        </div>
      </div>
    );
  }
Blog.propTypes={
  heading: React.PropTypes.string,
  content: React.PropTypes.string
};

module.exports = Blog;
