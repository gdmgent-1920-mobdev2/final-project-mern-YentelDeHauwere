import { default as React } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineSearch, AiOutlineBell, AiOutlineMenu } from "react-icons/ai";

import './Navbar.scss'

const Navbar = () => {

  return (
	  <div className="navb">
		<NavLink to='/'  className="navb-link" activeClassName="navb-link-icon-active">
			<AiOutlineHome className="navb-link-icon"  />
		</NavLink>
		
		<NavLink to='/search'  className="navb-link">
			<AiOutlineSearch className="navb-link-icon" activeClassName="navb-link-icon-active" />
		</NavLink>

		<NavLink to='/notifications'  className="navb-link">
			<AiOutlineBell className="navb-link-icon" activeClassName="navb-link-icon-active" />
		</NavLink>

		<NavLink to='/profile'  className="navb-link"> 
			<AiOutlineUser className="navb-link-icon" activeClassName="navb-link-icon-active" />
		</NavLink>

		<NavLink to='/menu'  className="navb-link">
			<AiOutlineMenu className="navb-link-icon" activeClassName="navb-link-icon-active" />
		</NavLink>
	  </div>
  );

};

export default Navbar;