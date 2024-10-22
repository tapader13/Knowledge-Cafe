import PropTypes from 'prop-types';
import Bookmark from './bookmark';

const Bookmarks = ({ bookMarks }) => {
  console.log(bookMarks, 2);
  return (
    <div className='bg-[#111111]/10 p-5 mt-4'>
      <h3 className='font-bold mb-2'>Bookmarked Blogs : {bookMarks?.length}</h3>
      {bookMarks?.map((book, i) => (
        <Bookmark key={i} book={book} />
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookMarks: PropTypes.array,
};

export default Bookmarks;
