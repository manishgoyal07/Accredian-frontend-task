import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-blue-600 font-bold">accredian</a>
        <button className="btn bg-blue-500 text-gray-200 mx-4">Courses</button>

      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className='font-semibold'><a>Refer & Earn</a></li>
          <li className='font-semibold'><a>Resources</a></li>
          <li className='font-semibold'><a>About Us</a></li>
          <button className="btn bg-blue-100 text-gray-700 mx-4">Login</button>
          <button className="btn bg-blue-500 text-gray-200 mx-4">Try for free</button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar