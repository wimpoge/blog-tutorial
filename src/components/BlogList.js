import { Link } from "react-router-dom";

const BlogList = ({ title, blogs }) => {
  const timestamp = Date.now()
  const date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp)
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
          <h2>{blog.title}</h2>
          <span>Written by {blog.author}</span>
          <p>{blog.body}</p>
          </Link>
          <span>{date}</span>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
