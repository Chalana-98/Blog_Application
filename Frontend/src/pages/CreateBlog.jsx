import React, { useContext, useState, useEffect } from "react";
import { useFetchJson } from "../hooks/useFetchJson";
import useFetchFunction from "../hooks/useFetchFunction";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");

  const navigate = useNavigate()

  const {
    error,
    fetchData,
    data: catsData,
    isLoading,
  } = useFetchJson("getAllCategory");
  const {
    error: er,
    fetchData: fetchTag,
    data: tagsData,
    isLoading: isLoadingTag,
  } = useFetchJson("getAllTag");

  useEffect(() => {
    _getCatNTag();
  }, []);

  const _getCatNTag = async () => {
    await fetchData();
    await fetchTag();
  };
  const postData = { title, content, tags, category };
  const { fetchFunction } = useFetchFunction("createPost", postData, "POST");

  const handleTagChange = (e) => {
    setTags(e.target.value);
  };

  const handleCatChange = (e) => {
    setCategory(e.target.value);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    console.log("category", category);
    console.log("tags", tags);
    await fetchFunction();
    navigate('/home')
    
  };
  return (
    <div className="flex justify-center items-center my-28 mx-10 min-h-[80vh]">
      <form className="w-full max-w-lg" action="#">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Title
            </label>
            <input
              required={true}
              onChange={(e) => setTitle(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Description
            </label>
            <textarea
              onChange={(e) => setContent(e.target.value)}
              required={true}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Category
            </label>
            <div className="relative">
              <select
                onChange={handleCatChange}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                {catsData.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              // htmlFor="grid-state"
            >
              Tags
            </label>
            <div className="relative">
              <select
                onChange={handleTagChange}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                // id="grid-state"
                value={tags}
              >
                {tagsData.map((tag) => (
                  <option key={tag.name} value={tag._id}>
                    {tag.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleCreate}
          type="submit"
          className="w-full mt-12 text-black bg-gray-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-md px-5 py-2.5 text-center"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
