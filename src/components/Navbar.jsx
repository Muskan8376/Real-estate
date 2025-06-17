// import Asserts from '../assets/Asserts'

// const Navbar = () => {
//   return (
//     <div className='absolute top-0 left-0 w-full z-10'>
//       <div>
//         {/* <asserts /> */}
//         <Asserts/>
//         <img src={Asserts.logo} alt="" />
//         <ul>
//             <a href="#Header" className='cursor-pointer hover:text-gray-400'>HOME</a>
//             <a href="#Header" className='cursor-pointer hover:text-gray-400'>ABOUT</a>
//             <a href="#Header" className='cursor-pointer hover:text-gray-400'>PROJECTS</a>
//             <a href="#Header" className='cursor-pointer hover:text-gray-400'>TESTIMONIAL</a>
//         </ul>
//         <button className='hidden md:block bg-white px-8 py-2 rounded-full'> Sign Up</button>
//       </div>
//     </div>
//   )
// }

// export default Navbar




import { useState } from 'react';
import assets from '../assets/Asserts';
import { useEffect } from 'react';

const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  useEffect(()=>{
if(showMobileMenu){
  document.body.style.overflow = 'hidden'
}
else{
  document.body.style.overflow = 'auto';
}
return()=>{
  document.body.style.overflow = 'auto';
}
  },[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='flex items-center justify-between  container mx-auto py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        
        <img src={assets.logo} alt="Logo" className='h-10' />

       
        <ul className=' hidden md:flex gap-7 text-white'>
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>HOME</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400'>ABOUT</a>
          <a href="#Projects" className='cursor-pointer hover:text-gray-400'>PROJECTS</a>
          <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>TESTIMONIALS</a>
        </ul>

       
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>
          Sign Up
        </button>
        <img src={assets.menu_icon} onClick ={()=> setshowMobileMenu(true)}className='md:hidden w-7 cursor-pointer' alt="" />
      </div>
      {/* ----------MOBILE-MENU------------ */}
    <div className={`md:hidden  ${showMobileMenu ? 'fixed w-full':'h-0 w-0'}right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>

<div className='flex justify-end p-6 cursor-pointer'>
  <img src={assets.cross_icon}  onClick={()=> setshowMobileMenu(false)}className='w-6' alt="" />
</div>



      <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
        <a href="#Header" onClick={()=> setshowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block'> HOME </a>
        <a href="#About" onClick={()=> setshowMobileMenu(false)}  className='px-4 py-2 rounded-full inline-block'> ABOUT </a>
        <a href="#Projects" onClick={()=> setshowMobileMenu(false)}  className='px-4 py-2 rounded-full inline-block'> PROJECTS </a>
        <a href="#Testimonials"  onClick={()=> setshowMobileMenu(false)}  className='px-4 py-2 rounded-full inline-block'> TEXTIMONIALS </a>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;

