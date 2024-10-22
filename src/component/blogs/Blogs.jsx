import PropTypes from 'prop-types';
import Blog from './Blog';

const Blogs = ({ blogs, handleBookMarks, handleTime }) => {
  return (
    <div>
      {blogs.map((blog, i) => (
        <Blog
          key={i}
          blog={blog}
          handleBookMarks={handleBookMarks}
          handleTime={handleTime}
        />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  blogs: PropTypes.array.isRequired,
  handleBookMarks: PropTypes.func,
  handleTime: PropTypes.func,
};

export default Blogs;
