import  { useState } from 'react';
import { Link} from 'react-router-dom';
import React, { useEffect } from "react";
import { useFetchJson } from '../hooks/useFetchJson';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCategoryExpanded, setIsCategoryExpanded] = useState(false);
  const { error, fetchData, data, isLoading } = useFetchJson("getAllCategory");
  const { error:e, fetchData:fetchTag, data:tags, isLoading:isLoadingTag } = useFetchJson("getAllTag");

  useEffect(() => {
    _getCatNTag();
  }, []);

  const _getCatNTag = async () => {
    await fetchData();
    await fetchTag();
  };
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleCategory = () => {
    setIsCategoryExpanded(!isCategoryExpanded);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
         
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blog App</span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isExpanded}
          onClick={toggleExpand}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`w-full md:flex md:w-auto ${isExpanded ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li className="relative">
              <button
                id="categoryButton"
                onClick={toggleCategory}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Category
                <svg className="w-2.5 h-2.5 ml-1 inline-block" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              {/* Nested Dropdown Menu */}
              {isCategoryExpanded && (
                <div className="absolute left-0 mt-2 py-2 bg-white border border-gray-100 rounded-lg shadow-lg">
                   {data.map((cat) => (
                     <a href="/?cat=all" key={cat.id} className="block px-4 py-2 text-gray-900 hover:bg-gray-100">{cat.name}</a>

                   ))}

                </div>
              )}
            </li>
            
            <button type="button" className="text-white  bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center my-5 sm:my-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"><Link className=' ' to= {'/create'}>Create Post</Link></button>
            <button type="button" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link className=' ' to= {'/login'}>Login</Link></button>
            
            {/* Other list items */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
