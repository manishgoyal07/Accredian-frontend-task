import React from 'react'
import Modal_Form from './Modal_Form'

const Main = () => {
  return (
    <div className="hero min-h-3.5 my-10">
      <div className="hero-content bg-blue-100 shadow-inner p-10 flex-col lg:flex-row-reverse">
        <img
          src="https://rupeezy.in/assets/images/others/homepage/ref-desktop.svg"
          className="max-w-lg rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold text-gray-900">Let's Learn <br /> & Earn</h1>
          <h3 className="py-6 text-2xl font-semibold">
            Get a chance to win <br />up-to <span class="text-blue-600 text-3xl font-bold">Rs. 15000</span>
          </h3>
          <Modal_Form />
        </div>
      </div>
    </div>)
}

export default Main