
import { Link } from "react-router-dom";
import { useFetchJson } from '../hooks/useFetchJson';
import React, { useEffect } from "react";

function Home() {
  const { error, fetchData, data, isLoading } = useFetchJson("getAllPost");

  useEffect(() => {
    _getPost();
  }, []);

  const _getPost = async () => {
    await fetchData();
    console.log(error);
  };
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className=" flex items-center justify-center">
      <div className=" gap-5 my-5 flex flex-col mx-10 items- max-w-xl  ">
        {data.map((post) => (
          <div className="post gap-5 flex justify-center item-center" key={post._id}>
            <div className="post bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {post.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {post.desc}
                </p>
                <button

                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <Link className="link" to={`/post/${post.id}`}>
                    Read more
                  </Link>

                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}



      </div>
    </div>
  );
}

export default Home;
