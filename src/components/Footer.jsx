import React from 'react'
import Button from './Button';

const Footer = () => {
  const printMsg = () => {};
  return (
    <div className="bg-white h-20 w-full text-white flex items-center justify-between ">
      <Button func={printMsg} name="footer" style={"bg-red-500 rounded-md text-black font-extrabold "} />
    </div>
  );
}

export default Footer