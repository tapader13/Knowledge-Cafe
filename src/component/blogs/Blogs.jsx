import PropTypes from 'prop-types';
import Blog from './Blog';

const Blogs = ({ blogs, handleBookMarks }) => {
  return (
    <div>
      {blogs.map((blog, i) => (
        <Blog key={i} blog={blog} handleBookMarks={handleBookMarks} />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  blogs: PropTypes.array.isRequired,
  handleBookMarks: PropTypes.func,
};

export default Blogs;
