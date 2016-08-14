var React = require('react');
var BlogCard = require('./BlogCard.jsx')
function BlogList (props) {
  function openBlog (id) {
      props.openBlog(id);
  }
    var blogCards = props.blogList.map ( function (blog) {
      return <BlogCard
        key={blog.id}
        id={blog.id}
        cardText={blog.cardText}
        tags={blog.tags}
        date={blog.date}
        heading={blog.heading}
        openBlog={openBlog} />
    });
    return (
      <div>{blogCards}</div>
    );
  }
module.exports = BlogList;
