import React from 'react'

function Contact() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div className="lg:mb-0 mb-10">
        <div className="group w-full h-full">
          <div className="relative h-full">
            <img
              src="https://pagedone.io/asset/uploads/1696488602.png"
              alt="ContactUs tailwind section"
              className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
            />
            <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
              Contact us
            </h1>
            <div className="absolute bottom-0 w-full lg:p-11 p-5">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 block">
                <a href="#" className="flex items-center mb-6">
                  <h5 className="text-gray-900 dark:text-gray-200 text-base font-normal leading-6 ml-5">
                    470-601-1911
                  </h5>
                </a>
                <a href="#" className="flex items-center mb-6">
                  <h5 className="text-gray-900 dark:text-gray-200 text-base font-normal leading-6 ml-5">
                    Pagedone1234@gmail.com
                  </h5>
                </a>
                <a href="#" className="flex items-center">
                  <h5 className="text-gray-900 dark:text-gray-200 text-base font-normal leading-6 ml-5">
                    654 Sycamore Avenue, Meadowville, WA 76543
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
        <h2 className="text-indigo-600 dark:text-indigo-400 font-manrope text-4xl font-semibold leading-10 mb-11">
          Send Us A Message
        </h2>
        <input
          type="text"
          className="w-full h-12 text-gray-600 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 dark:border-gray-600 focus:outline-none pl-4 mb-10"
          placeholder="Name"
        />
        <input
          type="text"
          className="w-full h-12 text-gray-600 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 dark:border-gray-600 focus:outline-none pl-4 mb-10"
          placeholder="Email"
        />
        <input
          type="text"
          className="w-full h-12 text-gray-600 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 dark:border-gray-600 focus:outline-none pl-4 mb-10"
          placeholder="Phone"
        />
        <div className="mb-10">
          <h4 className="text-gray-500 dark:text-gray-400 text-lg font-normal leading-7 mb-4">
            Preferred method of communication
          </h4>
          <div className="flex">
            <div className="flex items-center mr-11">
              <label
                htmlFor="radio-group-1"
                className="flex items-center cursor-pointer text-gray-500 dark:text-gray-400 text-base font-normal leading-6"
              >
                <span className="border border-gray-300 dark:border-gray-500 rounded-full mr-2 w-4 h-4 ml-2" />
                Email
              </label>
            </div>
            <div className="flex items-center">
              <label
                htmlFor="radio-group-2"
                className="flex items-center cursor-pointer text-gray-500 dark:text-gray-400 text-base font-normal leading-6"
              >
                <span className="border border-gray-300 dark:border-gray-500 rounded-full mr-2 w-4 h-4 ml-2" />
                Phone
              </label>
            </div>
          </div>
        </div>
        <input
          type="text"
          className="w-full h-12 text-gray-600 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 dark:border-gray-600 focus:outline-none pl-4 mb-10"
          placeholder="Message"
        />
        <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 dark:bg-indigo-700 dark:hover:bg-indigo-900 shadow-sm">
          Send
        </button>
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact
