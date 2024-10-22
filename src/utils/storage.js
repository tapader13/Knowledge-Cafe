export const getTimes = () => {
  const times = localStorage.getItem('times');
  if (times) {
    return JSON.parse(times);
  }
  return 0;
};

export const getBookmarks = () => {
  const bkms = localStorage.getItem('bkms');
  if (bkms) {
    return JSON.parse(bkms);
  }
  return [];
};

export const setTimes = (times) => {
  localStorage.setItem('times', JSON.stringify(times));
};
export const setBookmarks = (items) => {
  localStorage.setItem('bkms', JSON.stringify(items));
};
