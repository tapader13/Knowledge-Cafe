import { useState } from 'react';
import './App.css';
import Blogs from './component/blogs/Blogs';
import Bookmarks from './component/bookmarks/Bookmarks';
import Header from './component/Header';
import { useEffect } from 'react';
import {
  getBookmarks,
  getTimes,
  setBookmarks,
  setTimes,
} from './utils/storage';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [bookMarks, setBookMarks] = useState([]);
  const [time, setTime] = useState(0);
  useEffect(() => {
    fetch('blog.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  useEffect(() => {
    const times = getTimes();
    setTime(times);
    const bkms = getBookmarks();
    setBookMarks(bkms);
  }, []);
  const handleBookMarks = (item) => {
    const findBookmarks = bookMarks.find((bkm) => bkm.id === item.id);
    if (!findBookmarks) {
      setBookMarks([item, ...bookMarks]);
      setBookmarks([item, ...bookMarks]);
    }
  };
  const handleTime = (tme, id) => {
    setTime(tme + time);
    setTimes(tme + time);
    const filterBookmarks = bookMarks.filter((bkm) => bkm.id !== id);
    setBookMarks(filterBookmarks);
    setBookmarks(filterBookmarks);
  };
  console.log(bookMarks);
  return (
    <div className='w-[80%] mx-auto'>
      <Header />
      <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-9'>
          <Blogs
            blogs={blogs}
            handleBookMarks={handleBookMarks}
            handleTime={handleTime}
          />
        </div>
        <div className='col-span-3'>
          <h3 className='text-[#6047ec] bg-[#6047ec]/10 p-2 text-center font-medium'>
            Spent time on read : {time} min
          </h3>
          <Bookmarks bookMarks={bookMarks} />
        </div>
      </div>
    </div>
  );
}

export default App;
