import { default as React } from 'react';
import * as Routes from '../routes';
import { Navbar, Inputbox } from '../components';

const HomePage = ({children}) => {
	
  return (
	<div>
		<Inputbox />
		<Navbar />
		{children}
	</div>
  )
};

export default HomePage;