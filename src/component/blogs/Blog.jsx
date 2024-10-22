import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa6';

const Blog = ({ blog, handleBookMarks, handleTime }) => {
  return (
    <div>
      <div>
        <img className='w-full' src={blog?.cover} alt={blog.author} />
      </div>
      <div className='flex justify-between items-center my-3'>
        <div className='flex gap-5 items-center'>
          <div>
            <img
              className='h-10 w-10 rounded-full'
              src={blog?.author_img}
              alt=''
            />
          </div>
          <div>
            <h5 className='font-bold'>{blog?.author}</h5>
            <h6 className='text-sm'>{blog?.posted_date}</h6>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <h6>{blog?.reading_time} min read</h6>
          <h6 onClick={() => handleBookMarks(blog)} className='cursor-pointer'>
            <FaBookmark />
          </h6>
        </div>
      </div>
      <div>
        <h1 className='text-3xl font-bold'>{blog?.title}</h1>
      </div>
      <div className='flex gap-2 my-3'>
        {blog?.hashtags?.map((has, i) => (
          <span key={i}>#{has}</span>
        ))}
      </div>
      <div className='mb-5'>
        <p
          onClick={() => handleTime(blog?.reading_time, blog?.id)}
          className='text-[#6047ec] underline font-medium cursor-pointer'
        >
          Mark as read
        </p>
      </div>
      <hr className='bg-gray-400 mb-7' />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  handleBookMarks: PropTypes.func,
  handleTime: PropTypes.func,
};

export default Blog;
