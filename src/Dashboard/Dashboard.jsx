import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/images/logo.png'
const Dashboard = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isDropdownOpen2, setDropdownOpen2] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
    const toggleDropdown2 = () => {
      setDropdownOpen2(!isDropdownOpen2);
    };
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    const closeMenu = () => {
      setMenuOpen(false);
    };

    return (
        
       <div>
          <nav
            className="relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
            data-te-navbar-ref
        >
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="ml-2">
        <div className='flex justify-center '>
    <a href="#">
        <img class="w-auto h-14 sm:h-7" src={logo} alt=""/>
    </a>

    </div>
        </div>
        <button
          className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          onClick={toggleMenu}
        >
          {/* Hamburger icon */}
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {isMenuOpen && (
          <div
            className="visible mt-2 flex-grow basis-[100%] items-center lg:mt-0 lg:flex lg:basis-auto"
            id="navbarSupportedContent3"
            data-te-collapse-item
          >
            <button
              className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
              type="button"
              onClick={closeMenu}
            >
              
            </button>

            {/* Left links */}
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
              data-te-navbar-nav-ref
            >
              
              <li className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
              <a class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200" href="#">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
          </svg>
                <span class="mx-4 font-medium">Dashboard</span>
            </a>
            <Link to={'/dashboard/account'} class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span class="mx-4 font-medium">Accounts</span>
            </Link>
            <a

          className="flex items-center px-3 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
          href="#"
          onClick={toggleDropdown}
          >
          <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="order"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="30" d="m544.93 341.77 45.62 45.62 86.84-86.85M302.94 343.96h149.14"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="30" d="M770.24 343.96h150.2l-104.4 312.96H407.39L302.98 343.96l-43.56-130.57H103.56"></path><circle cx="480.59" cy="786.46" r="52.65" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="30"></circle><circle cx="742.84" cy="786.46" r="52.65" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="30"></circle><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="30" d="M770.24 343.96c0 87.86-71.22 159.08-159.07 159.08-87.86 0-159.08-71.22-159.08-159.08 0-87.85 71.22-159.07 159.08-159.07 87.85 0 159.07 71.22 159.07 159.07z"></path></svg>

          <span className="mx-4 font-medium">Order</span>
          <svg class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>

            <svg class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
          </a>
{isDropdownOpen && (
        <div className="mt-1 space-y-2 pl-9">
          <a
            className="block px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            All Order
          </a>
          <a
            className="block px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover.text-gray-700"
            href="#"
          >
            Complete Order
          </a>
          {/* Add more dropdown items as needed */}
        </div>
      )}
       <div>
      <a
        className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
        onClick={toggleDropdown2}
      >
    <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" id="product">
      <path
        d="M13.984 3a.5.5 0 0 0-.238.064 4.72 4.72 0 0 0-2.369 3.63H4.5a.5.5 0 0 0-.5.5v4.615a.5.5 0 0 0 .5.5H5V27.5a.5.5 0 0 0 .5.5h21a.5.5 0 0 0 .5-.5V12.309h.547a.5.5 0 0 0 .5-.5V7.193a.5.5 0 0 0-.5-.5h-6.924a4.72 4.72 0 0 0-2.37-3.629a.5.5 0 0 0-.24-.064a.5.5 0 0 0-.443.26L16 6.12 14.43 3.26a.5.5 0 0 0-.444-.26a.5.5 0 0 1-.002 0zm-.12 1.307 1.312 2.386h-2.697a3.61 3.61 0 0 1 1.384-2.386zm4.273 0a3.61 3.61 0 0 1 1.384 2.386h-2.697l1.313-2.386zM5 7.693h9v3.616H5V7.693zm10 0h2V27h-2V7.693zm3 0h9.046v3.616H18V7.693zM6 12.31h8V27H6V12.309zm12 0h8V27h-8V12.309zm-3.703 15.646a.5.5 0 0 0 .015.008l-.015-.008zm3.408 0-.021.008a.5.5 0 0 0 .021-.008z"
        color="#000"
        fontFamily="sans-serif"
        fontWeight="400"
        overflow="visible"
      />
    </svg>

        <span className="mx-4 font-medium">Product</span>
        <svg class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
          </svg>

          <svg class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
          </svg>
      </a>

      {isDropdownOpen2 && (
        <div className="mt-1 space-y-2 pl-9">
          <a
            className="block px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            All Product
          </a>
          <Link to={'/dashboard/productadd'}
            className="block px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover.text-gray-700"
            
          >
            Add Product
          </Link>
          {/* Add more dropdown items as needed */}
        </div>
      )}
            </div>
            <hr class="my-6 border-gray-200 dark:border-gray-600" />
            <Link to={'/dashboard/category'} class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span class="mx-4 font-medium">Category</span>
            </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
          </nav>
        <aside class="flex flex-col w-52 px-4 py-8 overflow-y-auto bg-white dark:bg-gray-900 dark:border-gray-700">

        <div class="relative mt-6">
        </div>

    
      </aside>
       </div>
    );
};

export default Dashboard;