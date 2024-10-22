import { useState } from 'react';
import './App.css';
import Blogs from './component/blogs/Blogs';
import Bookmarks from './component/bookmarks/Bookmarks';
import Header from './component/Header';
import { useEffect } from 'react';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [bookMarks, setBookMarks] = useState([]);
  useEffect(() => {
    fetch('blog.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleBookMarks = (item) => {
    setBookMarks([item, ...bookMarks]);
  };
  console.log(bookMarks);
  return (
    <div className='w-[80%] mx-auto'>
      <Header />
      <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-9'>
          <Blogs blogs={blogs} handleBookMarks={handleBookMarks} />
        </div>
        <div className='col-span-3'>
          <h3 className='text-[#6047ec] bg-[#6047ec]/10 p-2 text-center font-medium'>
            Spent time on read : 177 min
          </h3>
          <Bookmarks bookMarks={bookMarks} />
        </div>
      </div>
    </div>
  );
}

export default App;
