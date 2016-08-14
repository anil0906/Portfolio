var React = require('react');
var Link = require('react-router').Link;

function BlogCard (props) {
    var blogTags = props.tags.map(function(tag) {
        return <a href="#" key={tag}  className="tag-link"><span>{"#"+tag+" "}</span></a>
    });
    return (
      <div className="blog-card">
        <Link to={"/blog/"+props.id}><h2>{props.heading}</h2></Link>
        <span className="card-text">{props.cardText+"..."}</span>
        <div className="blog-meta">
          <span className="blog-date">{props.date}</span>
          <span className="blog-tags">tags: {blogTags}</span>
        </div>
      </div>
    );

}
module.exports = BlogCard;
