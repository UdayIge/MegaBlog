import React, { useState } from 'react'
import Services from "../appwrite/config"
import { Link } from 'react-router-dom'
import { Loader } from './Loader'
const PostCard = ({$id, title, featuredImage}) => {
  const [imageLoading, setImageLoading] = useState(true)
  const handleImageLoad = () => {
    setImageLoading(false);
  }
  return (
    <div className='max-w-sm bg-white border border-gray-300/75 rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-200/40'>
      <Link to={`/post/${$id}`}>
        <div className="relative h-40 w-full rounded-t-md overflow-hidden">
          {imageLoading && (<Loader />)}
          <img
            src={Services.getFilePreview(featuredImage)}
            alt={title}
            onLoad={handleImageLoad}
            className={`rounded-t-md h-40 w-full object-cover object-center transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
            style={{ position: 'absolute', inset: 0 }}
            draggable={false}
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/post/${$id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title.length > 50 ? `${title.slice(0, 50)}...` : title}
          </h5>
        </Link>
        <Link
          to={`/post/${$id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
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
        </Link>
      </div>
    </div>
  );
}

export default PostCard