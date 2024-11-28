import React, { useEffect, useState } from "react";

function Notification({ message, action}) {
  const [show, setShow] = useState(true);

  useEffect (() => {
    if(show){
        const timer = setTimeout(()=>{
            setShow(false);
        },5000);
        return () => clearTimeout(timer);
    }
  },[show])

  return (
    <>
      {show && (
        <div className="fixed flex items-center w-full max-w-sm p-4 mx-auto mt-4 bg-white rounded-lg shadow-lg bottom-4 right-4">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
            <svg
              className="w-6 h-6 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-4.414l5.293-5.293-1.414-1.414L9 11.586 7.121 9.707 5.707 11.121 9 14.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="ml-3">
            <h3 className="text-sm font-medium text-gray-900">{action}</h3>
            <p className="text-sm text-gray-500">
              {message}
            </p>
          </div>

          <button
            className="ml-auto text-gray-400 hover:text-gray-500"
            onClick={() => setShow(false)}
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

export default Notification;