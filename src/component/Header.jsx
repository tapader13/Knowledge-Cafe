const Header = () => {
  return (
    <div className='flex items-center py-5 justify-between'>
      <div>
        <h1 className='text-2xl font-bold'>Knowledge Cafe</h1>
      </div>
      <div>
        <img src='/profile.png' alt='' className='w-10 h-10 rounded-full' />
      </div>
    </div>
  );
};

export default Header;
