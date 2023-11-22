import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { UserOutlined, CalendarOutlined, ClockCircleOutlined , FileOutlined, LogoutOutlined } from '@ant-design/icons';  

export default function Navbar () {
    const iconStyle = { color: 'white' };

  return (
    <nav className="bg-cyan-950 w-1/5 fixed top-0 left-0 bottom-0 overflow-y-auto p-4 m-4 rounded-2xl">
      <div className="mb-6">
        <div className="flex items-center space-x-3 p-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDoisN_XW3IVsEn4qXXTiqfTFBCCQOWqDFg&usqp=CAU"
            alt="User"
            className="w-12 h-12 rounded-xl"
          />
          <div>
            <p className="text-white font-semibold">Welcome back,</p>
            <p className="text-white">Username</p>
          </div>
        </div>
      </div>

      <hr className="border-b border-gray-600 mb-6" />

      <ul>
        
        <li className="flex items-center space-x-3">
          <ClockCircleOutlined style={iconStyle}/> 
          <a href="#" className="text-white navbar-items">Doctor Schedules</a>
        </li>
        <li className="flex items-center space-x-3 mt-4">
          <CalendarOutlined style={iconStyle}/> 
          <a href="#" className="text-white navbar-items">Patient Appointments</a>
        </li>
        <li className="flex items-center space-x-3 mt-4">
          <FileOutlined style={iconStyle}/> 
          <a href="#" className="text-white navbar-items">Forms</a>
        </li>
        <li className="flex items-center space-x-3 mt-4">
          <UserOutlined style={iconStyle}/> 
          <a href="#" className="text-white navbar-items">Profile</a>
        </li>
        <li className="flex items-center space-x-3 mt-4">
          <LogoutOutlined style={iconStyle}/>
          <a href="#" className="text-white navbar-items">Sign Out</a>
        </li>
      </ul>
    </nav>
  );
};
