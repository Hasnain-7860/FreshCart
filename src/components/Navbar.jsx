import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiBoxList } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";





const Navbar = () => {
  return (
    <div>
        <div className=''>
            <div className='container flex justify-between py-5 items-center'>
                <div className='flex gap-12'>
                    <img src="https://freshcart-next-js.vercel.app/images/logo/freshcart-logo.svg" alt="" />
                    <div className=' hidden lg:flex w-[600px]  items-center justify-between px-4 shadow-xl rounded-lg border-solid border-2 border-black' >
                        <input className='w-[550px] outline-none ' type="search" placeholder='Search for product' /><CiSearch  className='text-[20px]'/>
                    </div>
                    <div className='hidden lg:flex  justi items-center gap-4 shadow-lg p-3 border-solid border-2 border-black rounded-lg text-gray-500 font-semibold '>
                    <FiMapPin /> <h1>Location</h1>
                    </div>
                </div>
                <div className=' flex gap-4 text-[25px] lg:flex lg:gap-8 lg:text-[25px]  text-green-500  '>
                <CiHeart />
                <RiContactsLine />
                <IoCartOutline />
                <RxHamburgerMenu className='text-[25px] lg:hidden'  />


                </div>
            </div>
            <div>
                <button><CiBoxList /> <p>All Departments </p> </button>
                <button><h1>Home</h1><MdKeyboardArrowDown /></button>
                <button><h1>Shop</h1><MdKeyboardArrowDown /></button>
                <button><h1>Stores</h1><MdKeyboardArrowDown /></button>
                <button><h1>Megamenu</h1><MdKeyboardArrowDown /></button>
                <button><h1>Pages</h1><MdKeyboardArrowDown /></button>
                <button><h1>Account</h1><MdKeyboardArrowDown /></button>
                <button><h1>Home</h1><MdKeyboardArrowDown /></button>
                <button><h1>Home</h1><MdKeyboardArrowDown /></button>
                

            </div>
        </div>
    </div>
  )
}

export default Navbar