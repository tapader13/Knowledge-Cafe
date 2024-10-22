import PropTypes from 'prop-types';

const Bookmark = ({ book }) => {
  console.log(book, 1);
  return (
    <div className='bg-white mb-3 p-3 font-medium'>
      <h4>{book?.title}</h4>
    </div>
  );
};

Bookmark.propTypes = {
  book: PropTypes.object,
};

export default Bookmark;
