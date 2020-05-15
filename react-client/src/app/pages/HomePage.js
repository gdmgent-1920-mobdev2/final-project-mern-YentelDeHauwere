import { default as React } from 'react';
import * as Routes from '../routes';
import { Navbar, Inputbox } from '../components';
import { FiSearch } from "react-icons/fi";

const HomePage = ({children}) => {
	
  return (
	<div>
		<Inputbox placeholder='Search by adress' type='text'  />
		<Navbar />
		{children}
	</div>
  )
};

export default HomePage;